import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const calSans = localFont({
    src: "./fonts/CalSansUI[wght,GEOM].woff2",
    variable: "--font-sans",
    weight: "300 700",
    display: "swap",
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Join the waitlist for Zeddius",
    description:
        "A socially backed, identity based, behavior alignment system.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${calSans.variable} ${geistMono.variable}`}>
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
