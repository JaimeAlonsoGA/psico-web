const Stats: React.FC = () => {
    return (
        <section className="py-16 px-4 bg-teal-600 text-white">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
                <div>
                    <p className="text-5xl font-bold mb-2">+200</p>
                    <p className="text-xl">Pacientes</p>
                </div>
                <div>
                    <p className="text-5xl font-bold mb-2">+1000</p>
                    <p className="text-xl">Sesiones</p>
                </div>
                <div>
                    <p className="text-5xl font-bold mb-2">2</p>
                    <p className="text-xl">Artículos en libros</p>
                </div>
            </div>
        </section>
    );
};

export default Stats;