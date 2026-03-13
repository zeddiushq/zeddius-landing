"use client";

import { useState, useEffect } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { LuInfo } from "react-icons/lu";
import { MdErrorOutline } from "react-icons/md";

type AlertVariant = "success" | "error" | "info";

interface AlertProps {
    message: string;
    variant?: AlertVariant;
}

export default function Alert({ message, variant = "success" }: AlertProps) {
    const [visible, setVisible] = useState(true);
    const [fading, setFading] = useState(false);

    useEffect(() => {
        const fadeTimer = setTimeout(() => setFading(true), 4000);
        const hideTimer = setTimeout(() => setVisible(false), 5000);
        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(hideTimer);
        };
    }, []);

    const dismiss = () => {
        setFading(true);
        setTimeout(() => setVisible(false), 1000);
    };

    if (!visible) return null;

    const variantBackgroundStyles = {
        success: "bg-[#22C55E]",
        error: "bg-red-600",
        info: "bg-sky-500",
    };

    const variantFontColor = {
        success: "text-black",
        error: "text-white",
        info: "text-white",
    };

    const variantIcons = {
        success: FaRegCircleCheck,
        error: MdErrorOutline,
        info: LuInfo,
    };

    const Icon = variantIcons[variant];

    return (
        <div
            className={`fixed top-6 right-6 z-50 flex items-center justify-between gap-4 px-4 py-3 rounded-xl ${variantBackgroundStyles[variant]} ${variantFontColor[variant]} text-sm shadow-lg transition-opacity duration-1000 max-w-md ${
                fading ? "opacity-0" : "opacity-100"
            }`}
        >
            <Icon className="text-2xl" />
            <span className="font-semibold">{message}</span>
            <button
                onClick={dismiss}
                className={`rounded-full p-1 font-black hover:bg-white/10 transition-colors shrink-0 ${variantFontColor[variant]}`}
                aria-label="Close"
            >
                <IoClose className="text-2xl" />
            </button>
        </div>
    );
}
