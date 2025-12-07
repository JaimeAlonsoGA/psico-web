import problems from '@/assets/data/problems.json';

const Problems: React.FC = () => {
    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
                    ¿Te identificas con alguna de estas situaciones?
                </h2>
                <p className="text-center text-teal-600 text-xl font-semibold mb-16">¡Entonces es para ti!</p>
                <div className="space-y-8">
                    {problems.map((problem, index) => (
                        <div key={index} className="bg-teal-50 p-8 rounded-lg">
                            <h3 className="text-xl font-bold mb-4 text-gray-900">{problem.title}</h3>
                            <p className="text-gray-700 leading-relaxed">{problem.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Problems;