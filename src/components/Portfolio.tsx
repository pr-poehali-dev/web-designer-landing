
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "SPA-салон",
    category: "Веб-сайт",
    image: "https://cdn.poehali.dev/files/8c2d548e-b028-46e3-8c40-da09b6ea757d.jpg"
  },
  {
    id: 2,
    title: "Air Force 1",
    category: "Лендинг страница",
    image: "https://cdn.poehali.dev/files/2a485544-c019-4201-865e-7b80c34c2d39.jpg"
  },
  {
    id: 3,
    title: "Книжный магазин",
    category: "Интернет-магазин",
    image: "https://cdn.poehali.dev/files/e14d094a-590a-4331-930a-7e982d816a97.jpeg"
  },
  {
    id: 4,
    title: "Креативная студия",
    category: "Корпоративный сайт",
    image: "https://cdn.poehali.dev/files/placeholder.svg"
  },
  {
    id: 5,
    title: "Ресторан 'Вкусно'",
    category: "Лендинг страница",
    image: "https://cdn.poehali.dev/files/placeholder.svg"
  },
  {
    id: 6,
    title: "Фитнес клуб",
    category: "Веб-сайт",
    image: "https://cdn.poehali.dev/files/placeholder.svg"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Мои работы</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Взгляните на некоторые из моих последних проектов, которые демонстрируют мой подход к дизайну
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {portfolioItems.map((item, index) => (
            <Card key={item.id} className="portfolio-item group overflow-hidden border-none">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-white">
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-sm mb-4">{item.category}</p>
                    <Button variant="outline" size="sm" className="text-white border-white hover:bg-white/20">
                      Подробнее <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="https://pin.it/6Ew5eP29Z" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg">
              Смотреть все работы
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
