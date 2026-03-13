"use client";

import { useState } from "react";
import { LuArrowRight } from "react-icons/lu";

export default function Form({
    onSuccess,
    onError,
    onInfo,
    variant,
}: {
    onSuccess: () => void;
    onError: (message: string) => void;
    onInfo: (message: string) => void;
    variant: "hero" | "cta";
}) {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const validateEmail = (value: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    };

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");

        if (!validateEmail(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        setLoading(true);

        // call the waitlist cloud function
        try {
            const res = await fetch("/api/waitlist", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email,
                    company: "", // honeypot field (leave blank)
                }),
            });

            if (res.status === 429) {
                onError("Too many attempts. Give it a minute and try again.");
                return;
            }

            if (res.status === 409) {
                onInfo("You're already on the list.");
                return;
            }

            if (!res.ok) {
                onError("Something went wrong. Try again in a moment.");
                return;
            }

            setEmail("");
            onSuccess();
        } catch {
            onError("Could not connect. Check your connection and try again.");
        } finally {
            setLoading(false);
        }
    };

    const heroStyles = {
        input: `flex-1 px-6 py-4 rounded-xl bg-gray-500/8 hover:bg-gray-500/16 focus:bg-gray-500/16 focus:ring-4 focus:ring-(--primary)/30 transition-all outline-none ${error ? "border border-red-500" : "border-transparent"}`,
        button: `flex items-center justify-center gap-3 bg-primary hover:bg-primary/75 text-background font-bold px-8 py-4 rounded-xl transition-all shadow-lg whitespace-nowrap focus:border-primary focus:ring-4 focus:ring-(--primary)/30 outline-none ${loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`,
        textFieldError: "text-red-500",
    };

    const ctaStyles = {
        input: `flex-1 px-6 py-4 rounded-xl bg-white/90 hover:bg-white focus:bg-white text-gray-900 focus:ring-4 focus:ring-white/30 transition-all outline-none ${error ? "border-2 border-[#7A0F1C] dark:border-[#6B0F1A]" : "border-none border-transparent"}`,
        button: "flex items-center justify-center gap-3 bg-gray-800 hover:bg-black text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg whitespace-nowrap focus:border-primary focus:ring-4 focus:ring-white/30 outline-none",
        textFieldError: "text-[#7A0F1C] dark:text-[#6B0F1A]",
    };

    const styles = variant === "hero" ? heroStyles : ctaStyles;

    return (
        <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-2 max-w-lg mx-auto"
        >
            <div className="flex flex-col items-start gap-2">
                <div className="flex flex-col sm:flex-row gap-2 w-full">
                    <input
                        className={styles.input}
                        placeholder="Enter your email"
                        required
                        type="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            if (error) setError("");
                        }}
                        name="email"
                    />
                    {error && (
                        <p
                            className={`${styles.textFieldError} text-sm pl-2 sm:hidden text-start`}
                        >
                            {error}
                        </p>
                    )}
                    {/* honeypot field */}
                    <input type="text" name="company" className="hidden" />
                    <button
                        className={styles.button}
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? "Submitting..." : "Join Waitlist"}
                        <LuArrowRight className="text-xl" />
                    </button>
                </div>
                {error && (
                    <p
                        className={`${styles.textFieldError} text-sm pl-2 hidden sm:block`}
                    >
                        {error}
                    </p>
                )}
            </div>
        </form>
    );
}
