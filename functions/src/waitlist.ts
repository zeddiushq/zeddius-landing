import { onRequest } from "firebase-functions/v2/https";
import { initializeApp } from "firebase-admin/app";
import { getFirestore, FieldValue } from "firebase-admin/firestore";

initializeApp();
const db = getFirestore();

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 10 minute
const MAX_REQUESTS = 5;

export const waitlist = onRequest(async (req, res) => {
    try {
        if (req.method !== "POST") {
            res.status(405).send("Method Not Allowed");
            return;
        }

        const ip =
            req.headers["x-forwarded-for"]?.toString().split(",")[0] ||
            req.socket.remoteAddress ||
            "unknown";

        const { email, company } = req.body;

        // honeypot
        if (company) {
            res.status(200).send("ok");
            return;
        }

        // validate email
        if (!email || !EMAIL_REGEX.test(email)) {
            res.status(400).send("Invalid email");
            return;
        }

        // rate limit
        const rateRef = db.collection("rateLimits").doc(ip);
        const rateDoc = await rateRef.get();

        const now = Date.now();

        if (rateDoc.exists) {
            const data = rateDoc.data()!;
            const windowStart = data.windowStart;
            const count = data.count;

            if (now - windowStart < RATE_LIMIT_WINDOW_MS) {
                if (count >= MAX_REQUESTS) {
                    res.status(429).send("Too many requests");
                    return;
                }

                await rateRef.update({
                    count: FieldValue.increment(1),
                });
            } else {
                await rateRef.set({
                    windowStart: now,
                    count: 1,
                });
            }
        } else {
            await rateRef.set({
                windowStart: now,
                count: 1,
            });
        }

        const normalizedEmail = email.trim().toLowerCase();

        // check for existing entry
        const existing = await db
            .collection("waitlist")
            .where("email", "==", normalizedEmail)
            .limit(1)
            .get();

        if (!existing.empty) {
            res.status(409).send("Already registered");
            return;
        }

        // not a duplicate, safe to write
        await db.collection("waitlist").add({
            email: normalizedEmail,
            createdAt: FieldValue.serverTimestamp(),
        });

        res.status(200).send("ok");
    } catch (err: any) {
        console.error(err);
        res.status(500).send("server error");
    }
});
