import Hero from "@/components/landing/hero";
import Goals from "@/components/landing/goals";
import About from "@/components/landing/about";
import Services from "@/components/landing/services";
import Pricing from "@/components/landing/pricing";
import Stats from "@/components/landing/stats";
import Testimonials from "@/components/landing/testimonials";
import Benefits from "@/components/landing/benefits";
import Problems from "@/components/landing/problems";
import Contact from "@/components/landing/contact";
import FAQ from "@/components/landing/faq";
import Footer from "@/components/layout/footer";

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-background">
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