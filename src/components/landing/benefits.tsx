import { benefits } from '@/assets/data/benefits';

const Benefits: React.FC = () => {
    return (
        <section className="py-20 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                    <div key={index} className="text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-600 text-white rounded-full mb-4">
                            <benefit.icon className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-900">{benefit.title}</h3>
                        <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Benefits;