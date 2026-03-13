import { LuArrowLeftRight, LuUsers } from "react-icons/lu";
import { RxLightningBolt } from "react-icons/rx";

export default function FeaturesSection() {
    return (
        <section className="bg-background-neutral py-24" id="features">
            <div className="max-w-7xl mx-auto px-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">
                        Zeddius is the environment.
                    </h2>
                    <p className="text-secondary">
                        A system built for those who are ready to{" "}
                        <span className="italic font-bold">
                            actually hold the line
                        </span>{" "}
                        on their commitments.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-background p-8 rounded-2xl shadow-sm flex flex-col items-center justify-center">
                        <div className="inline-flex bg-primary/20 rounded-full p-3 text-[var(--primary)] text-3xl mb-4">
                            <LuArrowLeftRight />
                        </div>
                        <h3 className="text-xl font-bold mb-3">
                            Alignment over streaks
                        </h3>
                        <p className="text-secondary text-center leading-relaxed">
                            Focus on long-term trajectory and consistency rather
                            than fragile daily streaks that discourage recovery.
                        </p>
                    </div>
                    <div className="bg-background p-8 rounded-2xl shadow-sm flex flex-col items-center justify-center">
                        <div className="inline-flex bg-primary/20 rounded-full p-3 text-[var(--primary)] text-3xl mb-4">
                            <RxLightningBolt />
                        </div>
                        <h3 className="text-xl font-bold mb-3">
                            Frictionless entry
                        </h3>
                        <p className="text-secondary text-center leading-relaxed">
                            Lightning fast UX designed to get you in and out in
                            seconds. Log, commit, and get back to work.
                        </p>
                    </div>
                    <div className="bg-background p-8 rounded-2xl shadow-sm flex flex-col items-center justify-center">
                        <div className="inline-flex bg-primary/20 rounded-full p-3 text-[var(--primary)] text-3xl mb-4">
                            <LuUsers />
                        </div>
                        <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                            Real stakes
                        </h3>
                        <p className="text-secondary text-center leading-relaxed">
                            Social visibility creates skin in the game. Your
                            public profile is a testament to who you are
                            becoming.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
