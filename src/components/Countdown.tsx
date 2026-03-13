"use client";
import { useEffect, useState } from "react";
import { LuLock } from "react-icons/lu";

// target launch date: Wednesday September 2, 2026 @ 9:00 AM PST (UTC‑8)
const LAUNCH_DATE = new Date("2026-09-02T09:00:00-08:00");

function formatDateForBadge(d: Date) {
    return d.toLocaleString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
        timeZone: "America/Los_Angeles",
    });
}

function computeCountdown(now: Date) {
    const diff = Math.max(LAUNCH_DATE.getTime() - now.getTime(), 0);
    const seconds = Math.floor(diff / 1000) % 60;
    const minutes = Math.floor(diff / (1000 * 60)) % 60;
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    return { days, hours, minutes, seconds };
}

export default function Countdown() {
    const [count, setCount] = useState(() => computeCountdown(new Date()));

    useEffect(() => {
        const id = setInterval(() => {
            setCount(computeCountdown(new Date()));
        }, 1000);
        return () => clearInterval(id);
    }, []);

    return (
        <section className="max-w-6xl mx-auto py-32 text-center px-10">
            <h2 className="font-bold uppercase tracking-[0.3em] text-secondary mb-12">
                Launch Window
            </h2>
            <div className="mb-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                {[
                    { label: "Days", value: count.days },
                    { label: "Hours", value: count.hours },
                    { label: "Minutes", value: count.minutes },
                    { label: "Seconds", value: count.seconds },
                ].map(({ label, value }) => (
                    <div
                        key={label}
                        className="border border-gray-500/20 bg-background-neutral/50 text-card-foreground flex flex-col gap-6 rounded-xl py-6"
                    >
                        <div className="flex flex-col items-center justify-center p-4 sm:p-6">
                            <span className="text-3xl font-bold tabular-nums sm:text-4xl md:text-5xl">
                                {String(value).padStart(2, "0")}
                            </span>
                            <span className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground sm:text-sm">
                                {label}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
            <p className="text-secondary flex items-center justify-center gap-2">
                <LuLock /> {formatDateForBadge(LAUNCH_DATE)} PST
            </p>
        </section>
    );
}
