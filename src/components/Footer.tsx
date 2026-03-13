import { FaRedditAlien, FaXTwitter } from "react-icons/fa6";
import { TbSquareRoundedLetterZ } from "react-icons/tb";

export default function Footer() {
    return (
        <footer className="bg-background-neutral py-16">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 px-10">
                <div className="space-y-2 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-2 group cursor-default">
                        <div className="w-10 h-10">
                            <TbSquareRoundedLetterZ className="h-full w-auto text-[var(--primary)]" />
                        </div>
                        <span className="text-xl font-bold tracking-tight lowercase">
                            zeddius
                        </span>
                    </div>
                    <p className="text-xs text-secondary">
                        © 2026 zeddius. All rights reserved.
                    </p>
                </div>
                <div className="flex gap-6">
                    <a
                        className="w-10 h-10 flex items-center justify-center rounded-lg border border-secondary text-secondary hover:text-primary hover:border-primary transition-all"
                        href="https://x.com/zeddiushq"
                        target="_blank"
                    >
                        <FaXTwitter />
                    </a>
                    <a
                        className="w-10 h-10 flex items-center justify-center rounded-lg border border-secondary text-secondary hover:text-primary hover:border-primary transition-all"
                        href="https://www.reddit.com/r/zeddius"
                        target="_blank"
                    >
                        <FaRedditAlien />
                    </a>
                </div>
            </div>
        </footer>
    );
}
