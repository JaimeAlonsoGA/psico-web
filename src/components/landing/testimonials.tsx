import { Quote } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import testimonials from "@/assets/data/testimonials.json";

export const Testimonials: React.FC = () => {
    return (
        <section className="py-24 px-4 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4 animate-fade-in-up">
                    <Badge variant="secondary" className="text-base px-4 py-2">
                        <Quote className="w-4 h-4 mr-2" />
                        Testimonios reales
                    </Badge>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
                        Historias de transformación
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                        Lee las experiencias de quienes ya dieron el primer paso
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card
                            key={index}
                            className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-linear-to-br from-accent/50 to-background border-2 animate-fade-in-up"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <CardContent className="pt-8 space-y-6">
                                <Quote className="w-12 h-12 text-primary/30 group-hover:text-primary/50 transition-colors" />
                                <p className="text-lg text-muted-foreground leading-relaxed italic">
                                    "{testimonial.text}"
                                </p>
                                <div className="flex items-center gap-3 pt-4 border-t border-border">
                                    <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold text-lg">
                                        {testimonial.author[0]}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-foreground">{testimonial.author}</p>
                                        <div className="flex gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <span key={i} className="text-yellow-500">★</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;