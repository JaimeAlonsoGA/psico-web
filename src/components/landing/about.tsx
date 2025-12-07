import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Target } from "lucide-react";

const About: React.FC = () => {
    return (
        <section id="about" className="py-24 px-4 bg-linear-to-b from-accent/20 to-background">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4 animate-fade-in-up">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
                        Me gustaría acompañarte en este proceso
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                        Juntos desarrollaremos las habilidades que necesitas para vivir plenamente
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <div className="relative group animate-fade-in">
                        <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all" />
                        <img
                            src="https://asmentepsicologia.com/wp-content/uploads/2024/08/Diseno-sin-titulo-4-1024x682.png"
                            alt="Alberto Sainz"
                            className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="space-y-8 animate-fade-in-up">
                        <div className="space-y-2">
                            <Badge variant="secondary" className="text-base px-4 py-2">
                                <GraduationCap className="w-4 h-4 mr-2" />
                                Psicólogo Sanitario
                            </Badge>
                            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                                Alberto Sainz
                            </h3>
                        </div>

                        <div className="space-y-6">
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Soy psicólogo sanitario especializado en ansiedad a través de enfoques modernos.
                                Estudié en <strong className="text-foreground">España, Estados Unidos y Países Bajos</strong> gracias
                                a diferentes becas.
                            </p>

                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Tras observar el modelo común de psicoterapia que solo aplica soluciones a corto plazo,
                                decidí especializarme en enfoques más modernos con garantías a largo plazo.
                            </p>

                            <Card className="bg-primary/5 border-primary/20">
                                <CardContent className="pt-6">
                                    <div className="flex items-start gap-3">
                                        <Target className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                        <p className="text-lg font-semibold text-foreground leading-relaxed">
                                            La idea de ir al psicólogo es que desarrolles una serie de habilidades
                                            y aprendizajes para no tener que volver nunca.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Achievements */}
                        <div className="grid grid-cols-3 gap-4">
                            <Card className="text-center">
                                <CardContent className="pt-6 space-y-2">
                                    <Award className="w-8 h-8 text-primary mx-auto" />
                                    <p className="font-bold text-2xl text-primary">3</p>
                                    <p className="text-sm text-muted-foreground">Países</p>
                                </CardContent>
                            </Card>
                            <Card className="text-center">
                                <CardContent className="pt-6 space-y-2">
                                    <GraduationCap className="w-8 h-8 text-primary mx-auto" />
                                    <p className="font-bold text-2xl text-primary">10+</p>
                                    <p className="text-sm text-muted-foreground">Años</p>
                                </CardContent>
                            </Card>
                            <Card className="text-center">
                                <CardContent className="pt-6 space-y-2">
                                    <Target className="w-8 h-8 text-primary mx-auto" />
                                    <p className="font-bold text-2xl text-primary">2</p>
                                    <p className="text-sm text-muted-foreground">Libros</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;