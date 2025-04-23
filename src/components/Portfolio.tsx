
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Корпоративный сайт",
      category: "website",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Дизайн мобильного приложения",
      category: "mobile",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Лендинг для продукта",
      category: "landing",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Интернет-магазин",
      category: "ecommerce",
      image: "/placeholder.svg"
    },
    {
      id: 5,
      title: "Дизайн личного кабинета",
      category: "website",
      image: "/placeholder.svg"
    },
    {
      id: 6,
      title: "Промо-страница",
      category: "landing",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section id="portfolio" className="py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Мои работы</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Познакомьтесь с моими последними проектами
            </p>
          </div>
        </div>

        <Tabs defaultValue="all" className="mt-12">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all">Все работы</TabsTrigger>
              <TabsTrigger value="website">Сайты</TabsTrigger>
              <TabsTrigger value="landing">Лендинги</TabsTrigger>
              <TabsTrigger value="mobile">Мобильные</TabsTrigger>
              <TabsTrigger value="ecommerce">Магазины</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioItems.map((item) => (
                <Card key={item.id} className="overflow-hidden hover-scale">
                  <CardContent className="p-0">
                    <div className="relative aspect-video">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                        <h3 className="text-white text-xl font-medium">{item.title}</h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          {["website", "landing", "mobile", "ecommerce"].map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioItems
                  .filter((item) => item.category === category)
                  .map((item) => (
                    <Card key={item.id} className="overflow-hidden hover-scale">
                      <CardContent className="p-0">
                        <div className="relative aspect-video">
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="object-cover w-full h-full"
                          />
                          <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                            <h3 className="text-white text-xl font-medium">{item.title}</h3>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            Больше работ можно посмотреть здесь:{" "}
            <a 
              href="https://pin.it/6Ew5eP29Z" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              https://pin.it/6Ew5eP29Z
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
