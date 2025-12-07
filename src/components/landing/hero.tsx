import portrait from "@/assets/images/portrait_1_bg.png";

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-linear-to-b from-teal-100 to-white px-4">
            <div className="max-w-4xl mx-auto text-start">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                    PEDIR AYUDA NO ES UN FRACASO,<br />ES UN ACTO DE AMOR PROPIO
                </h1>
                <a
                    href="https://wa.me/message/S2DJOUOQBHVKA1"
                    className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
                >
                    Empecemos
                </a>
            </div>
            <img
                src={portrait}
                alt="Decorative"
                className="absolute bottom-0 right-0 w-1/3" />
        </section>
    );
};

export default Hero;