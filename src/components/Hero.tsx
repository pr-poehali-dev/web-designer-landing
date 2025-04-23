
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-accent/40 to-background">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
      
      {/* Sparkles */}
      <div className="absolute top-40 right-32 animate-pulse opacity-75">
        <Sparkles className="text-primary w-6 h-6" />
      </div>
      <div className="absolute bottom-32 left-1/4 animate-pulse opacity-75 animation-delay-300">
        <Sparkles className="text-secondary w-8 h-8" />
      </div>
      
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <div className={`transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Веб-дизайнер • UI/UX • Разработка
              </span>
            </div>
            
            <h1 className={`transition-all duration-700 delay-100 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
              Создаю уникальные <span className="text-gradient">веб-сайты</span> для вашего бизнеса
            </h1>
            <p className={`transition-all duration-700 delay-200 text-lg md:text-xl text-muted-foreground max-w-lg ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
              Привет! Я Елена, опытный веб-дизайнер. Помогу привлечь новых клиентов и повысить узнаваемость вашего бренда через современный дизайн.
            </p>
            <div className={`transition-all duration-700 delay-300 flex flex-col sm:flex-row gap-4 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
              <Button size="lg" className="rounded-full group">
                Обсудить проект
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full"
                onClick={scrollToServices}
              >
                Узнать больше
                <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className={`relative z-10 rounded-lg overflow-hidden shadow-2xl transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              <img 
                src="https://cdn.poehali.dev/files/e14d094a-590a-4331-930a-7e982d816a97.jpeg" 
                alt="Дизайн сайта" 
                className="w-full h-auto object-cover"
              />
              
              {/* Floating highlights */}
              <div className="absolute -right-5 -top-5 bg-primary/80 text-white text-sm font-medium py-2 px-4 rounded-lg shadow-lg floating">
                <Sparkles className="inline-block w-4 h-4 mr-1" />
                UI/UX Дизайн
              </div>
              <div className="absolute -left-5 -bottom-5 bg-secondary/80 text-white text-sm font-medium py-2 px-4 rounded-lg shadow-lg floating animation-delay-200">
                <Sparkles className="inline-block w-4 h-4 mr-1" />
                Креативные решения
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[80%] max-h-[80%] rounded-full bg-primary/20 blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
