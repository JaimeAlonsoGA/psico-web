import { User, UsersIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

export const Services: React.FC = () => {
    return (
        <section className="max-w-7xl mx-auto space-y-10">
            <div className="text-center space-y-4 animate-fade-in-up">
                {/* <Badge variant="secondary" className="text-base px-6 py-2">
                        Servicios Personalizados
                    </Badge> */}
                <h2 className="text-4xl md:text-5xl font-bold text-balance text-primary">
                    ¿Cómo puedo ayudarte?
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                    Sesiones diseñadas para acompañarte en tu proceso de transformación
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                {/* Individual Therapy */}
                <Card className="group hover:shadow transition-all duration-300 overflow-hidden border-2 hover:border-primary/50 animate-fade-in">
                    <div className="relative h-80 overflow-hidden">
                        <img
                            src="https://asmentepsicologia.com/wp-content/uploads/2024/08/pexels-julia-m-cameron-4144923-scaled.jpg"
                            alt="Terapia individual"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-4 left-4">
                            <Badge className="bg-primary text-primary-foreground">
                                <User className="w-4 h-4 mr-2" />
                                Individual
                            </Badge>
                        </div>
                    </div>
                    <CardHeader>
                        <CardTitle className="text-3xl text-primary">Terapia individual</CardTitle>
                        <CardDescription className="text-base">
                            Sesiones personalizadas para tu crecimiento personal
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            ¡Dejémonos de paliativos! La terapia es un espacio donde desarrollarás habilidades
                            para gestionar tu ansiedad. Aprenderás una nueva forma de relacionarte contigo mismo/a
                            y de afrontar los problemas.
                        </p>
                        <Button variant="outline" className="w-full" size="lg">
                            Más información
                        </Button>
                    </CardContent>
                </Card>

                {/* Group Therapy */}
                <Card className="group hover:shadow transition-all duration-300 overflow-hidden border-2 hover:border-secondary/50 animate-fade-in delay-200">
                    <div className="relative h-80 overflow-hidden">
                        <img
                            src="https://asmentepsicologia.com/wp-content/uploads/2024/08/pexels-diva-plavalaguna-6147014-copia-scaled.jpg"
                            alt="Terapia grupal"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-4 left-4">
                            <Badge className="bg-secondary text-secondary-foreground">
                                <UsersIcon className="w-4 h-4 mr-2" />
                                Grupal
                            </Badge>
                        </div>
                    </div>
                    <CardHeader>
                        <CardTitle className="text-3xl text-secondary">Terapia grupal</CardTitle>
                        <CardDescription className="text-base">
                            Crecimiento compartido y apoyo mutuo
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            Si hay algo que realmente es terapéutico, es poder ayudar y apoyar a otras personas
                            que están pasando por situaciones similares, al mismo tiempo que tú recibes su apoyo.
                        </p>
                        <Button variant="outline" className="w-full" size="lg">
                            Más información
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

export default Services;