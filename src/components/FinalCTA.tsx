"use client";

import Form from "./Form";
import { useState } from "react";
import Alert from "./Alert";

export default function FinalCTA() {
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
        <section className="max-w-3xl mx-auto px-6 py-24 md:mb-32 bg-primary md:rounded-4xl text-center text-white relative overflow-hidden">
            {/* Abstract Background Detail */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-black mb-6">
                    Join the real ones.
                </h2>
                <p className="text-white mb-10 text-lg opacity-80 font-semibold">
                    Be part of the founding cohort.
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
                    variant="cta"
                />
            </div>
        </section>
    );
}
