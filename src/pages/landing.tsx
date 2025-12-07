import About from "@/components/landing/about";
import Benefits from "@/components/landing/benefits";
import Contact from "@/components/landing/contact";
import FAQ from "@/components/landing/faq";
import Goals from "@/components/landing/goals";
import Hero from "@/components/landing/hero";
import Pricing from "@/components/landing/pricing";
import Problems from "@/components/landing/problems";
import Services from "@/components/landing/services";
import Stats from "@/components/landing/stats";
import Testimonials from "@/components/landing/testimonials";
import Footer from "@/components/layout/footer";

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-white">
            <Hero />
            <Goals />
            <About />
            <Services />
            <Pricing />
            <Stats />
            <Testimonials />
            <Benefits />
            <Problems />
            <Contact />
            <FAQ />
            <Footer />
        </div>
    );
}