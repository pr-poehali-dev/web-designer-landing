
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container flex h-16 items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="font-semibold text-xl text-gradient"
        >
          Елена Афанасьева
        </motion.div>
        
        {/* Desktop navigation */}
        <motion.nav 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center gap-6"
        >
          <button 
            onClick={() => scrollToSection('services')} 
            className="text-muted-foreground hover:text-primary transition-colors relative group"
          >
            Услуги
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button 
            onClick={() => scrollToSection('portfolio')} 
            className="text-muted-foreground hover:text-primary transition-colors relative group"
          >
            Портфолио
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button 
            onClick={() => scrollToSection('process')} 
            className="text-muted-foreground hover:text-primary transition-colors relative group"
          >
            Процесс
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button 
            onClick={() => scrollToSection('testimonials')} 
            className="text-muted-foreground hover:text-primary transition-colors relative group"
          >
            Отзывы
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-muted-foreground hover:text-primary transition-colors relative group"
          >
            Контакты
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </button>
          <Button 
            onClick={() => scrollToSection('contact')}
            size="sm" 
            className="rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
          >
            Связаться
          </Button>
        </motion.nav>

        {/* Mobile menu button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </motion.div>
      </div>

      {/* Mobile navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden border-b"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="container py-4 flex flex-col gap-2">
              <button 
                onClick={() => scrollToSection('services')}
                className="py-2 text-muted-foreground hover:text-primary transition-colors flex justify-between items-center"
              >
                Услуги <ChevronDown size={16} />
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="py-2 text-muted-foreground hover:text-primary transition-colors flex justify-between items-center"
              >
                Портфолио <ChevronDown size={16} />
              </button>
              <button 
                onClick={() => scrollToSection('process')}
                className="py-2 text-muted-foreground hover:text-primary transition-colors flex justify-between items-center"
              >
                Процесс <ChevronDown size={16} />
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="py-2 text-muted-foreground hover:text-primary transition-colors flex justify-between items-center"
              >
                Отзывы <ChevronDown size={16} />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="py-2 text-muted-foreground hover:text-primary transition-colors flex justify-between items-center"
              >
                Контакты <ChevronDown size={16} />
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                size="sm" 
                className="mt-2 w-full"
              >
                Связаться
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
