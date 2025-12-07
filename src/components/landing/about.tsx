const About: React.FC = () => {
    return (
        <section className="py-20 px-4 bg-teal-50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
                    Me gustaría acompañarte en este proceso
                </h2>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <img
                            src="https://asmentepsicologia.com/wp-content/uploads/2024/08/Diseno-sin-titulo-4-1024x682.png"
                            alt="Alberto Sainz"
                            className="rounded-lg shadow-xl w-full"
                        />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-teal-700">Sobre mí</h3>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            Me llamo Alberto Sainz y soy psicólogo sanitario y me especialicé en la ansiedad a través de enfoques más modernos. Estudié en España, Estados Unidos y Países Bajos gracias a diferentes Becas.
                        </p>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            Tras observar el modelo más común de psicoterapia en el que solo se aplican soluciones a corto plazo en forma de parches, decidí especializarme en enfoques más modernos con más garantías a largo plazo.
                        </p>
                        <p className="text-gray-700 font-semibold">
                            La idea de ir al psicólogo es que desarrolles una serie de habilidades y aprendizajes para no tener que volver nunca.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;