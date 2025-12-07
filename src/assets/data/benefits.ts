import { Clock, Heart, Shield, Users } from "lucide-react";

export const benefits: Benefit[] = [
    {
        icon: Heart,
        title: "Terapia de máxima calidad",
        description: "Desarrollarás las habilidades necesarias para tener la vida que quieres y mereces."
    },
    {
        icon: Shield,
        title: "Pago 100% seguro",
        description: "A través de Bizum, Revolut, Wise o transferencia bancaria."
    },
    {
        icon: Users,
        title: "Contacto directo conmigo",
        description: "¡Sin intermediarios! Todas las sesiones se harán directamente conmigo. Estoy aquí para ti."
    },
    {
        icon: Clock,
        title: "Trato cómodo y cuidadoso",
        description: "Este será tu espacio seguro desde donde trabajar para mejorar tu vida."
    }
];

interface Benefit {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
}