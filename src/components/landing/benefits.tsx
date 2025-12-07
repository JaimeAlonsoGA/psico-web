import { CheckCircle2 } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { benefits } from "@/assets/data/benefits";

export const Benefits: React.FC = () => {
    return (
        <section className="py-24 px-4 bg-linear-to-b from-accent/20 to-background">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4 animate-fade-in-up">
                    <Badge variant="secondary" className="text-base px-4 py-2">
                        <CheckCircle2 className="w-4 h-4 mr-2" />
                        ¿Por qué elegirme?
                    </Badge>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
                        Tu bienestar es mi prioridad
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <Card
                            key={index}
                            className="text-center group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 animate-fade-in-up"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <CardContent className="pt-8 space-y-4">
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-linear-to-br from-primary to-primary/70 text-primary-foreground rounded-3xl shadow-lg group-hover:scale-110 transition-transform mx-auto">
                                    <benefit.icon className="w-10 h-10" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground px-4">
                                    {benefit.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed px-2">
                                    {benefit.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;