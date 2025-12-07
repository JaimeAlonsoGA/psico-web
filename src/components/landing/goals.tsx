import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Heart, Users, Sparkles } from "lucide-react";
import goals from "@/assets/data/goals.json";

const iconMap = [Brain, Heart, Users, Sparkles];

const Goals: React.FC = () => {
    return (
        <section className="py-24 px-4 bg-linear-to-b from-background to-accent/20">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4 animate-fade-in-up">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
                        Te gustaría poder
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                        Imagina cómo sería tu vida si pudieras lograr estos objetivos
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {goals.map((goal, index) => {
                        const Icon = iconMap[index];
                        return (
                            <Card
                                key={index}
                                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 animate-fade-in-up"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <CardHeader className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="shrink-0 w-14 h-14 bg-linear-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                            <Icon className="w-7 h-7 text-primary-foreground" />
                                        </div>
                                        <CardTitle className="text-2xl font-bold text-primary group-hover:text-primary/80 transition-colors leading-tight">
                                            {goal.title}
                                        </CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        {goal.description}
                                    </p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Goals;