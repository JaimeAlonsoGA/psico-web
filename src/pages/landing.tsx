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
        <div className="min-h-screen bg-linear-to-b from-accent/20 to-background space-y-20">
            <Hero />
            <div className="space-y-12">
                <div className="space-y-24 max-w-7xl mx-auto px-6 xl:px-0">
                    <Goals />
                    <About />
                </div>
                <div className="bg-background py-12 px-6 xl:px-0">
                    <Services />
                </div>
                <Pricing />
                <Stats />
                <div className="pt-12 space-y-24 max-w-7xl mx-auto px-6 xl:px-0">
                    <Testimonials />
                    <Benefits />
                    <Problems />
                </div>
            </div>
            <Contact />
            <FAQ />
            <Footer />
        </div>
    );
}