import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import portrait from "@/assets/images/portrait_1_bg.png";

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen flex w-full items-center justify-center bg-linear-to-br from-secondary/20 to-primary/20 overflow-hidden px-4">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-700" />
            </div>

            <div className="max-w-7xl flex flex-row items-center justify-between relative z-10 w-full">
                <div className="space-y-8 animate-fade-in-up">
                    {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        <Sparkles className="w-4 h-4" />
                        <span>Psicología con enfoque moderno</span>
                    </div> */}

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground">
                        Pedir ayuda no es un{" "}
                        <span className="">fracaso</span>
                        <br />
                        es un acto de
                        <br />
                        <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                            amor propio
                        </span>
                    </h1>

                    {/* <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground">Pedir ayuda no es un fracaso, es un acto de amor propio</h1> */}

                    <p className="text-xl text-muted-foreground max-w-2xl text-pretty leading-relaxed">
                        Desarrolla las habilidades necesarias para vivir la vida que mereces.
                        Un espacio seguro donde crecer y transformarte.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                            size="lg"
                            className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                            asChild
                        >
                            <a href="https://wa.me/message/S2DJOUOQBHVKA1">
                                Empecemos
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </Button>

                        <Button
                            size="lg"
                            variant="outline"
                            className="text-lg px-8 py-6 border-2"
                            asChild
                        >
                            <a href="#about">
                                Conoce más
                            </a>
                        </Button>
                    </div>

                    {/* <div className="flex items-center gap-8 pt-4">
                        <div>
                            <p className="text-3xl font-bold text-primary">+200</p>
                            <p className="text-sm text-muted-foreground">Pacientes atendidos</p>
                        </div>
                        <div className="h-12 w-px bg-border" />
                        <div>
                            <p className="text-3xl font-bold text-primary">+1000</p>
                            <p className="text-sm text-muted-foreground">Sesiones realizadas</p>
                        </div>
                    </div> */}
                </div>

                <div className="relative animate-fade-in delay-300 hidden lg:block w-2/3">
                    <img
                        src={portrait}
                        alt="Alberto Sainz - Psicólogo"
                        className="relative rounded-3xl h-auto object-cover"
                    />
                </div>
            </div>

            {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
                    <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
                </div>
            </div> */}
        </section>
    );
};

export default Hero;