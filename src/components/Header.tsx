
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="font-semibold text-xl">Елена Афанасьева</div>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
            Услуги
          </a>
          <a href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors">
            Портфолио
          </a>
          <a href="#process" className="text-muted-foreground hover:text-primary transition-colors">
            Процесс
          </a>
          <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">
            Отзывы
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
            Контакты
          </a>
          <Button size="sm">Связаться</Button>
        </nav>

        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-b">
          <nav className="container py-4 flex flex-col gap-2">
            <a 
              href="#services" 
              className="py-2 text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Услуги
            </a>
            <a 
              href="#portfolio" 
              className="py-2 text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Портфолио
            </a>
            <a 
              href="#process" 
              className="py-2 text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Процесс
            </a>
            <a 
              href="#testimonials" 
              className="py-2 text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Отзывы
            </a>
            <a 
              href="#contact" 
              className="py-2 text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Контакты
            </a>
            <Button size="sm" className="mt-2 w-full">Связаться</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
