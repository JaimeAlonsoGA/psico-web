import { Check, Star } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import plans from "@/assets/data/plans.json";

export const Pricing: React.FC = () => {
    return (
        <section className="py-24 px-4 bg-linear-to-b from-accent/20 to-background">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4 animate-fade-in-up">
                    <Badge variant="secondary" className="text-base px-4 py-2">
                        <Star className="w-4 h-4 mr-2" />
                        Primera sesión con descuento
                    </Badge>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
                        Reserva tu primera cita
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                        Tras la primera cita podrás elegir con qué oferta continuar
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <Card
                            key={index}
                            className={`relative overflow-hidden transition-all duration-300 ${plan.featured
                                    ? 'border-4 border-primary shadow-2xl scale-105 hover:scale-110'
                                    : 'border-2 hover:border-primary/30 hover:shadow-xl'
                                } animate-fade-in-up`}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {plan.featured && (
                                <div className="absolute top-0 right-0 bg-linear-to-br from-primary to-secondary text-primary-foreground px-6 py-2 text-sm font-bold rounded-bl-2xl">
                                    ¡RECOMENDADO!
                                </div>
                            )}
                            <CardHeader className="space-y-4 pt-8">
                                <CardTitle className="text-2xl font-bold text-foreground">
                                    {plan.title}
                                </CardTitle>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-6xl font-bold text-primary">
                                        {plan.price.replace('€', '')}
                                    </span>
                                    <span className="text-2xl text-muted-foreground">€</span>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <ul className="space-y-3">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-base text-muted-foreground">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button
                                    className="w-full"
                                    size="lg"
                                    variant={plan.featured ? "default" : "outline"}
                                    asChild
                                >
                                    <a href="https://wa.me/message/S2DJOUOQBHVKA1">
                                        Empecemos
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;