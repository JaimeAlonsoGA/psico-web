import plans from '@/assets/data/plans.json';

const Pricing: React.FC = () => {
    return (
        <section className="py-20 px-4 bg-teal-50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
                    Reserva tu primera cita a un precio reducido
                </h2>
                <p className="text-center text-gray-600 mb-12">
                    Tras la primera cita podrás elegir con qué oferta continuar
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-lg p-8 shadow-lg ${plan.featured ? 'ring-2 ring-teal-600 transform scale-105' : ''}`}
                        >
                            <h3 className="text-2xl font-bold mb-4 text-gray-900">{plan.title}</h3>
                            <p className="text-5xl font-bold text-teal-600 mb-6">{plan.price}</p>
                            <ul className="mb-8 space-y-3">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="text-gray-700 flex items-start">
                                        <span className="text-teal-600 mr-2">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <a
                                href="https://wa.me/message/S2DJOUOQBHVKA1"
                                className="block w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors"
                            >
                                Empecemos
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;