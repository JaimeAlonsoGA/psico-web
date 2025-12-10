import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Target, Mail, MessageCircle } from "lucide-react";
import portrait from "@/assets/images/portrait_3.webp";

const About: React.FC = () => {
    return (
        <section id="about" className="space-y-10 pb-6">
            <div className="text-center space-y-4 animate-fade-in-up">
                <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">
                    Puedo acompañarte en este proceso
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                    Juntos desarrollaremos las habilidades que necesitas para vivir plenamente
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-10 md:items-stretch">
                {/* Image */}
                <div className="relative group animate-fade-in md:w-4/5">
                    {/* <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all" /> */}
                    <img
                        src={portrait}
                        alt="Álvaro Jimenez"
                        className="rounded-3xl h-full w-full object-cover mx-auto"
                    />
                    <Badge variant="default" className="absolute top-5 left-5 text-base px-6 py-2">
                        <GraduationCap className="w-4 h-4 mr-2" />
                        Psicólogo Sanitario
                    </Badge>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-6 md:justify-between animate-fade-in-up">
                    <div className="space-y-4">
                        <h3 className="text-3xl md:text-4xl text-center md:text-start font-bold text-foreground">
                            Soy Álvaro Jimenez
                        </h3>

                        <div className="space-y-4">
                            <p className="text-lg text-muted-foreground leading-relaxed text-justify">
                                Soy psicólogo sanitario especializado en ansiedad a través de enfoques modernos.
                                Estudié en <strong className="text-foreground">España, Estados Unidos y Países Bajos</strong> gracias
                                a diferentes becas.
                            </p>

                            <p className="text-lg text-muted-foreground leading-relaxed text-justify">
                                Tras observar el modelo común de psicoterapia que solo aplica soluciones a corto plazo,
                                decidí especializarme en enfoques más modernos con garantías a largo plazo.
                            </p>
                        </div>
                        <p className="text-lg text-foreground/80 leading-relaxed text-justify">
                            ❝ Su dedicación y experiencia me ayudaron a desarrollar habilidades prácticas para manejar mi ansiedad
                            de manera efectiva. Recomiendo encarecidamente a Álvaro a cualquiera que busque un enfoque fresco y efectivo para superar la ansiedad. ❞
                        </p>
                    </div>
                    <div className="space-y-6">
                        <Card className="bg-primary/5 border-primary/20">
                            <CardContent className="pt-6">
                                <div className="flex items-start gap-3">
                                    <Target className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <p className="text-lg font-semibold text-foreground leading-relaxed">
                                        La idea de ir al psicólogo es que desarrolles una serie de habilidades
                                        y aprendizajes para no tener que volver nunca.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* <div className="grid grid-cols-3">
                            <div className="mx-auto w-20 h-20 bg-linear-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                <Mail className="w-10 h-10 text-white" />
                            </div>
                            <div className="mx-auto w-20 h-20 bg-linear-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                <MessageCircle className="w-10 h-10 text-white" />
                            </div>
                            <div className="mx-auto w-20 h-20 bg-linear-to-br from-pink-500 to-yellow-500 rounded-3xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                <Mail className="w-10 h-10 text-white" />
                            </div>
                        </div> */}

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
        </section >
    );
};

export default About;