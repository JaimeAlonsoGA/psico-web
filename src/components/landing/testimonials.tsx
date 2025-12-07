import testimonials from '@/assets//data/testimonials.json';

const Testimonials: React.FC = () => {
    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
                    Esto es lo que opinan mis pacientes
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-teal-50 p-8 rounded-lg">
                            <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                            <p className="font-semibold text-teal-700">{testimonial.author}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;