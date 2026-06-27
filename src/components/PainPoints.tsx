import { LuEyeOff, LuTimerOff, LuTrendingUpDown } from "react-icons/lu";

export default function PainPoints() {
    return (
        <section
            className="max-w-7xl mx-auto py-24 border-t border-gray-500/20 px-10"
            id="philosophy"
        >
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight mb-4">
                    The standard is broken.
                </h2>
                <div className="w-12 h-1 bg-(--primary)/20 mx-auto rounded-full" />
            </div>
            <div className="grid md:grid-cols-3 gap-12">
                <div className="space-y-4">
                    <div className="text-primary">
                        <LuTimerOff className="text-4xl" />
                    </div>
                    <h3 className="text-xl font-bold">Tedious tracking</h3>
                    <p className="text-secondary leading-relaxed">
                        Most tools turn self-improvement into a second job.
                        Manual entry is where progress goes to die.
                    </p>
                </div>
                <div className="space-y-4">
                    <div className="text-primary">
                        <LuEyeOff className="text-4xl" />
                    </div>
                    <h3 className="text-xl font-bold">
                        No real accountability
                    </h3>
                    <p className="text-secondary leading-relaxed">
                        Privacy is the hiding spot for mediocrity. Real change
                        happens when you're being watched.
                    </p>
                </div>
                <div className="space-y-4">
                    <div className="text-primary">
                        <LuTrendingUpDown className="text-4xl" />
                    </div>
                    <h3 className="text-xl font-bold">Meaningless data</h3>
                    <p className="text-secondary leading-relaxed">
                        Numbers without narrative are just noise. Data should
                        drive identity, not just fill charts.
                    </p>
                </div>
            </div>
        </section>
    );
}
