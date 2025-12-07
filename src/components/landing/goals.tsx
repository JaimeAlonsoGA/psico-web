import goals from "@/assets/data/goals.json";

const Goals: React.FC = () => {
    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
                    Te gustaría poder
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {goals.map((goal, index) => (
                        <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-semibold mb-4 text-teal-700">{goal.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{goal.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Goals;