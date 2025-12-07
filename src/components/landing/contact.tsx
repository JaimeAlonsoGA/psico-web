import { Mail, MessageCircle } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

export const Contact: React.FC = () => {
    return (
        <section className="py-24 px-4 bg-linear-to-br from-primary via-primary/95 to-secondary text-primary-foreground relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-grid-white/5 bg-position-[32px_32px]" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />

            <div className="max-w-5xl mx-auto relative z-10">
                <div className="text-center mb-16 space-y-4 animate-fade-in-up">
                    <Badge className="bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30 text-base px-4 py-2">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Contacto directo
                    </Badge>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
                        Da el primer paso hoy
                    </h2>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto text-pretty">
                        Estoy aquí para acompañarte en tu proceso de transformación
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* WhatsApp */}
                    <Card className="border-2 border-primary-foreground/20 bg-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/15 transition-all group">
                        <CardHeader className="text-center space-y-4">
                            <div className="mx-auto w-20 h-20 bg-linear-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                <MessageCircle className="w-10 h-10 text-white" />
                            </div>
                            <CardTitle className="text-3xl text-primary-foreground">WhatsApp</CardTitle>
                            <CardDescription className="text-primary-foreground/80 text-base">
                                Respuesta rápida y directa
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="text-center space-y-4">
                            <p className="text-primary-foreground/90">
                                Escríbeme un mensaje y te responderé lo antes posible
                            </p>
                            <Button
                                size="lg"
                                className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                                asChild
                            >
                                <a href="https://wa.me/message/S2DJOUOQBHVKA1">
                                    Escribir mensaje
                                </a>
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Email */}
                    <Card className="border-2 border-primary-foreground/20 bg-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/15 transition-all group">
                        <CardHeader className="text-center space-y-4">
                            <div className="mx-auto w-20 h-20 bg-linear-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                <Mail className="w-10 h-10 text-white" />
                            </div>
                            <CardTitle className="text-3xl text-primary-foreground">Correo</CardTitle>
                            <CardDescription className="text-primary-foreground/80 text-base">
                                Consultas más detalladas
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="text-center space-y-4">
                            <p className="text-primary-foreground/90 break-all">
                                asmentepsicologia@gmail.com
                            </p>
                            <Button
                                size="lg"
                                variant="outline"
                                className="w-full bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                                asChild
                            >
                                <a href="mailto:asmentepsicologia@gmail.com">
                                    Escribir correo
                                </a>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default Contact;