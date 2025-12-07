import { Cookie, FileText, Shield } from "lucide-react";
import { Button } from "../ui/button";

export const Footer: React.FC = () => {
    return (
        <footer className="bg-linear-to-b from-background to-muted border-t">
            {/* CTA Section */}
            <div className="max-w-7xl mx-auto px-4 py-16 text-center">
                <div className="space-y-6 max-w-3xl mx-auto">
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                        ¿Listo para transformar tu vida?
                    </h3>
                    <p className="text-xl text-muted-foreground">
                        El primer paso es siempre el más importante
                    </p>
                    <Button
                        size="lg"
                        className="text-lg px-8 py-6"
                        asChild
                    >
                        <a href="https://wa.me/message/S2DJOUOQBHVKA1">
                            Reserva tu cita ahora
                        </a>
                    </Button>
                </div>
            </div>

            {/* Links Section */}
            <div className="border-t border-border">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        {/* Legal Links */}
                        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                            <a
                                href="#"
                                className="hover:text-primary transition-colors flex items-center gap-2"
                            >
                                <Shield className="w-4 h-4" />
                                Políticas de Privacidad
                            </a>
                            <span className="hidden md:inline">•</span>
                            <a
                                href="#"
                                className="hover:text-primary transition-colors flex items-center gap-2"
                            >
                                <FileText className="w-4 h-4" />
                                Aviso Legal
                            </a>
                            <span className="hidden md:inline">•</span>
                            <a
                                href="#"
                                className="hover:text-primary transition-colors flex items-center gap-2"
                            >
                                <Cookie className="w-4 h-4" />
                                Política de Cookies
                            </a>
                        </div>

                        {/* Copyright */}
                        <p className="text-sm text-muted-foreground">
                            © 2024 Alberto Sainz Rico. Todos los derechos reservados.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;