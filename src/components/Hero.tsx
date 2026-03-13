"use client";

import { useState } from "react";
import Form from "./Form";
import Alert from "./Alert";

export default function Hero() {
    const [submitCount, setSubmitCount] = useState(0);
    const [errorCount, setErrorCount] = useState(0);
    const [errorMessage, setErrorMessage] = useState("");
    const [infoCount, setInfoCount] = useState(0);
    const [infoMessage, setInfoMessage] = useState("");

    const handleSuccess = () => setSubmitCount((prev) => prev + 1);
    const handleError = (message: string) => {
        setErrorMessage(message);
        setErrorCount((prev) => prev + 1);
    };
    const handleInfo = (message: string) => {
        setInfoMessage(message);
        setInfoCount((prev) => prev + 1);
    };

    return (
        <main className="max-w-4xl mx-auto pt-5 md:pt-24 pb-32 text-center px-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-(--primary)/10 text-primary text-xs font-bold uppercase tracking-widest mb-8">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                Waitlist Now Open
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-[1.1]">
                Stop playing games <br className="hidden md:block" />
                with <span className="text-primary">yourself.</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary mb-12 max-w-2xl mx-auto leading-relaxed">
                Build the identity you keep promising. Publicly. For real this
                time.
            </p>
            {submitCount > 0 && (
                <Alert
                    key={submitCount}
                    message="You're in — start your journey September 2nd."
                    variant="success"
                />
            )}
            {errorCount > 0 && (
                <Alert
                    key={`error-${errorCount}`}
                    message={errorMessage}
                    variant="error"
                />
            )}
            {infoCount > 0 && (
                <Alert
                    key={`info-${infoCount}`}
                    message={infoMessage}
                    variant="info"
                />
            )}
            <Form
                onSuccess={handleSuccess}
                onError={handleError}
                onInfo={handleInfo}
                variant="hero"
            />
        </main>
    );
}
