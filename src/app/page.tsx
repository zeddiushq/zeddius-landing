import Header from "../components/Header";
import Hero from "../components/Hero";
import PainPoints from "../components/PainPoints";
import FeaturesSection from "../components/FeaturesSection";
import Countdown from "../components/Countdown";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <PainPoints />
            <FeaturesSection />
            <Countdown />
            <FinalCTA />
            <Footer />
        </>
    );
}
