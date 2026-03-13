import { TbSquareRoundedLetterZ } from "react-icons/tb";

export default function Header() {
    return (
        <header className="max-w-7xl mx-auto py-8 flex justify-between items-center px-10">
            <div className="flex items-center gap-2 group cursor-default">
                <div className="w-10 h-10">
                    <TbSquareRoundedLetterZ className="h-full w-auto text-[var(--primary)]" />
                </div>
                <span className="text-2xl font-bold tracking-tight lowercase">
                    zeddius
                </span>
            </div>
        </header>
    );
}
