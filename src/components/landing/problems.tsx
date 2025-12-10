import { AlertCircle } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import problems from "@/assets/data/problems.json";

export const Problems: React.FC = () => {
    return (
        <section className="space-y-10">
            <div className="text-center space-y-4 animate-fade-in-up">
                {/* <Badge variant="secondary" className="text-base px-6 py-2">
                        <AlertCircle className="w-4 h-4 mr-2" />
                        ¿Te identificas?
                    </Badge> */}
                <h2 className="text-4xl md:text-5xl font-bold text-balance text-primary">
                    ¿Te sientes así?
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                    Puedo ayudarte
                </p>
            </div>

            <div className="space-y-8 max-w-5xl mx-auto">
                {problems.map((problem, index) => (
                    <Card
                        key={index}
                        className="group transition-all duration-300 bg-linear-to-r from-accent/30 to-background border-2 border-border hover:border-secondary/50 animate-fade-in-up"
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <CardContent className="p-8 md:p-10">
                            <div className="flex items-start gap-6">
                                <div className="shrink-0 w-16 h-16 bg-linear-to-br from-secondary/20 to-secondary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <AlertCircle className="w-8 h-8 text-secondary" />
                                </div>
                                <div className="space-y-3 flex-1">
                                    <h3 className="text-2xl font-bold text-foreground leading-tight">
                                        {problem.title}
                                    </h3>
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        {problem.description}
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default Problems;