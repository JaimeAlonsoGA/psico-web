const Services: React.FC = () => {
    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
                    Descripción de tus servicios
                </h2>
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg">
                        <img
                            src="https://asmentepsicologia.com/wp-content/uploads/2024/08/pexels-julia-m-cameron-4144923-scaled.jpg"
                            alt="Terapia individual"
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-8">
                            <h3 className="text-2xl font-bold mb-4 text-teal-700">Terapia individual</h3>
                            <p className="text-gray-700 leading-relaxed">
                                ¡Dejémonos de paliativos! La terapia es un espacio donde desarrollarás habilidades para gestionar tu ansiedad. Aprenderás una nueva forma de relacionarte contigo mismo/a y de afrontar los problemas. El principal objetivo es que la ansiedad deje de impedirte vivir la vida plena que quieres.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg">
                        <img
                            src="https://asmentepsicologia.com/wp-content/uploads/2024/08/pexels-diva-plavalaguna-6147014-copia-scaled.jpg"
                            alt="Terapia grupal"
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-8">
                            <h3 className="text-2xl font-bold mb-4 text-teal-700">Terapia grupal</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Si hay algo que realmente es terapéutico, es poder ayudar y apoyar a otras personas que están pasando por situaciones similares, al mismo tiempo que tú recibes su apoyo. El objetivo es dirigirnos juntos hacia la vida que queréis tener a través de un proceso terapéutico grupal.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;