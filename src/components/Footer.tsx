
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 py-6 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold">Елена Афанасьева</h3>
            <p className="text-sm text-muted-foreground">Веб-дизайнер</p>
          </div>

          <nav className="flex gap-4 md:gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Главная
            </a>
            <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Услуги
            </a>
            <a href="#portfolio" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Портфолио
            </a>
            <a href="#process" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Процесс
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Контакты
            </a>
          </nav>
        </div>

        <Separator className="my-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {currentYear} Елена Афанасьева. Все права защищены.
          </p>
          <div className="flex gap-4">
            <a href="https://pin.it/6Ew5eP29Z" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
              Pinterest
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
