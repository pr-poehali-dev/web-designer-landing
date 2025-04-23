
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  tags: string[];
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "SPA-салон",
    category: "Веб-сайт",
    image: "https://cdn.poehali.dev/files/8c2d548e-b028-46e3-8c40-da09b6ea757d.jpg",
    tags: ["Лендинг", "UI/UX", "Брендинг"]
  },
  {
    id: 2,
    title: "Air Force 1",
    category: "Лендинг страница",
    image: "https://cdn.poehali.dev/files/2a485544-c019-4201-865e-7b80c34c2d39.jpg",
    tags: ["Лендинг", "Анимации", "Продукт"]
  },
  {
    id: 3,
    title: "Книжный магазин",
    category: "Интернет-магазин",
    image: "https://cdn.poehali.dev/files/e14d094a-590a-4331-930a-7e982d816a97.jpeg",
    tags: ["Магазин", "UI/UX", "Коммерция"]
  },
  {
    id: 4,
    title: "Креативная студия",
    category: "Корпоративный сайт",
    image: "https://cdn.poehali.dev/files/placeholder.svg",
    tags: ["Корпоративный", "Брендинг", "Креатив"]
  },
  {
    id: 5,
    title: "Ресторан 'Вкусно'",
    category: "Лендинг страница",
    image: "https://cdn.poehali.dev/files/placeholder.svg",
    tags: ["Лендинг", "Ресторан", "UI/UX"]
  },
  {
    id: 6,
    title: "Фитнес клуб",
    category: "Веб-сайт",
    image: "https://cdn.poehali.dev/files/placeholder.svg",
    tags: ["Веб-сайт", "Фитнес", "UI/UX"]
  }
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const filteredItems = activeTab === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.tags.includes(activeTab));

  return (
    <section id="portfolio" className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">Мои проекты</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Выдающиеся работы</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Взгляните на некоторые из моих последних проектов, которые демонстрируют мой подход к дизайну
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full mb-8">
          <div className="flex justify-center">
            <TabsList className="grid grid-cols-3 md:grid-cols-5 gap-2">
              <TabsTrigger 
                value="all" 
                onClick={() => setActiveTab("all")}
                className="data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Все
              </TabsTrigger>
              <TabsTrigger 
                value="Лендинг" 
                onClick={() => setActiveTab("Лендинг")}
                className="data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Лендинги
              </TabsTrigger>
              <TabsTrigger 
                value="UI/UX" 
                onClick={() => setActiveTab("UI/UX")}
                className="data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                UI/UX
              </TabsTrigger>
              <TabsTrigger 
                value="Брендинг" 
                onClick={() => setActiveTab("Брендинг")}
                className="data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Брендинг
              </TabsTrigger>
              <TabsTrigger 
                value="Магазин" 
                onClick={() => setActiveTab("Магазин")}
                className="data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Магазины
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="portfolio-item group overflow-hidden border-none shadow-lg hover:shadow-xl">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-primary text-sm font-medium mb-1">{item.category}</p>
                            <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                            <div className="flex flex-wrap gap-2 mb-3">
                              {item.tags.map((tag, i) => (
                                <span key={i} className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <Button variant="outline" size="sm" className="text-white border-white hover:bg-white/20 group">
                              Подробнее 
                              <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {["Лендинг", "UI/UX", "Брендинг", "Магазин"].map(tab => (
            <TabsContent key={tab} value={tab}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filteredItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="portfolio-item group overflow-hidden border-none shadow-lg hover:shadow-xl">
                      <CardContent className="p-0">
                        <div className="relative overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                              <p className="text-primary text-sm font-medium mb-1">{item.category}</p>
                              <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                              <div className="flex flex-wrap gap-2 mb-3">
                                {item.tags.map((tag, i) => (
                                  <span key={i} className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                              <Button variant="outline" size="sm" className="text-white border-white hover:bg-white/20 group">
                                Подробнее 
                                <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12 text-center">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="https://pin.it/6Ew5eP29Z" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <Button variant="secondary" size="lg">
                Pinterest портфолио
                <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </a>
            <a 
              href="https://www.behance.net/d9af5" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <Button variant="outline" size="lg">
                Behance портфолио
                <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
