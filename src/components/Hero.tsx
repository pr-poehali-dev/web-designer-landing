
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-accent/20 to-background">
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Создаю уникальные <span className="text-gradient">веб-сайты</span> для вашего бизнеса
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
              Привет! Я Елена, опытный веб-дизайнер. Помогу привлечь новых клиентов и повысить узнаваемость вашего бренда через современный дизайн.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full">
                Обсудить проект
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full"
                onClick={scrollToServices}
              >
                Узнать больше
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
              <img 
                src="https://cdn.poehali.dev/files/e14d094a-590a-4331-930a-7e982d816a97.jpeg" 
                alt="Дизайн сайта" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[80%] max-h-[80%] rounded-full bg-primary/20 blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
