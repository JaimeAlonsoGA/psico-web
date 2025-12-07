import { HelpCircle } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import faqs from "@/assets/data/faqs.json";

export const FAQ: React.FC = () => {
    return (
        <section className="py-24 px-4 bg-linear-to-b from-accent/20 to-background">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16 space-y-4 animate-fade-in-up">
                    <Badge variant="secondary" className="text-base px-4 py-2">
                        <HelpCircle className="w-4 h-4 mr-2" />
                        ¿Tienes dudas?
                    </Badge>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
                        Preguntas frecuentes
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                        Resolvemos las dudas más comunes sobre las sesiones
                    </p>
                </div>

                <Card className="border-2 animate-fade-in-up">
                    <CardContent className="pt-6">
                        <Accordion type="single" collapsible className="w-full">
                            {faqs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`}>
                                    <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-base text-muted-foreground leading-relaxed pt-2">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

export default FAQ;