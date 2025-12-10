import { Award, Star, TrendingUp } from "lucide-react";

export const Stats: React.FC = () => {
    return (
        <section className="py-10 px-6 xl:px-0 bg-linear-to-br from-primary via-primary/90 to-secondary text-primary-foreground relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-grid-white/5 bg-position-[32px_32px]" />
            <div className="absolute inset-0 bg-linear-to-t from-primary/50 to-transparent" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid md:grid-cols-3 gap-12 text-center">
                    <div className="space-y-3 animate-fade-in">
                        <TrendingUp className="w-12 h-12 mx-auto mb-4 opacity-80" />
                        <p className="text-6xl md:text-7xl font-bold">+200</p>
                        <p className="text-xl opacity-90 font-medium">Pacientes transformados</p>
                    </div>
                    <div className="space-y-3 animate-fade-in delay-200">
                        <Star className="w-12 h-12 mx-auto mb-4 opacity-80" />
                        <p className="text-6xl md:text-7xl font-bold">+1000</p>
                        <p className="text-xl opacity-90 font-medium">Sesiones realizadas</p>
                    </div>
                    <div className="space-y-3 animate-fade-in delay-300">
                        <Award className="w-12 h-12 mx-auto mb-4 opacity-80" />
                        <p className="text-6xl md:text-7xl font-bold">2</p>
                        <p className="text-xl opacity-90 font-medium">Artículos publicados</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;