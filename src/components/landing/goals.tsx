import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Heart, Users, Sparkles } from "lucide-react";
import goals from "@/assets/data/goals.json";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";

const iconMap = [Brain, Heart, Users, Sparkles];

const Goals: React.FC = () => {
    return (
        <section className="space-y-10">
            <div className="text-center space-y-4 animate-fade-in-up">
                <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">
                    ¿Te gustaría?
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                    Imagina cómo sería tu vida si pudieras lograr estos objetivos
                </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
                {goals.map((goal, index) => {
                    const Icon = iconMap[index];
                    return (
                        <Collapsible>
                            <Card
                                key={index}
                                className="min-h-[250px] flex justify-center group hover:shadow transition-all duration-300 border-2 hover:border-primary/50 animate-fade-in-up"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <CollapsibleTrigger className="cursor-pointer">
                                    <CardHeader className="space-y-4">
                                        <div className="flex flex-col items-center text-center gap-4">
                                            <div className="shrink-0 w-14 h-14 bg-linear-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                                <Icon className="w-7 h-7 text-primary-foreground" />
                                            </div>
                                            <CardTitle className="text-2xl font-bold text-primary group-hover:text-primary/80 transition-colors leading-tight">
                                                {goal.title}
                                            </CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CollapsibleContent>
                                        <CardContent>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {goal.description}
                                            </p>
                                        </CardContent>
                                    </CollapsibleContent>
                                </CollapsibleTrigger>
                            </Card>
                        </Collapsible>
                    );
                })}
            </div>
        </section>
    );
};

export default Goals;