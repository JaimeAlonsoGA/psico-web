import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { benefits } from "@/assets/data/benefits";

export const Benefits: React.FC = () => {
    return (
        <section className="space-y-10">
            <div className="text-center space-y-4 animate-fade-in-up">
                {/* <Badge variant="secondary" className="text-base px-6 py-2">
                        <CheckCircle2 className="w-4 h-4 mr-2" />
                        ¿Por qué elegirme?
                    </Badge> */}
                <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
                    Tu bienestar es mi prioridad
                </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                    <Card
                        key={index}
                        className="text-center group hover:shadow transition-all duration-300 border-2 hover:border-primary/50 animate-fade-in-up"
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <CardContent className="pt-8 space-y-4">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-linear-to-br from-primary to-primary/70 text-primary-foreground rounded-3xl shadow-lg group-hover:scale-110 transition-transform mx-auto">
                                <benefit.icon className="w-10 h-10" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground px-6">
                                {benefit.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed px-2">
                                {benefit.description}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <div className="w-full flex">
                <Button className="mx-auto" size={"lg"}>
                    Reserva Tu Primera Sesión
                </Button>
            </div>
        </section>
    );
};

export default Benefits;