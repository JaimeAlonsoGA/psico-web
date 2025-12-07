import faqs from "@/assets/data/faqs.json";

const FAQ: React.FC = () => {
    return (
        <section className="py-20 px-4 bg-gray-50">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
                    Preguntas frecuentes
                </h2>
                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <details key={index} className="bg-white p-6 rounded-lg shadow-sm">
                            <summary className="font-semibold text-lg cursor-pointer text-gray-900 hover:text-teal-600">
                                {faq.question}
                            </summary>
                            <p className="mt-4 text-gray-700 leading-relaxed">{faq.answer}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;