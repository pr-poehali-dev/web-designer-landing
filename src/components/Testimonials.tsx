
import { useState, useEffect } from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  company: string;
  avatar: string;
  avatarUrl?: string;
  rating: number;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Андрей Смирнов",
    company: "Основатель Synergy Studio",
    avatar: "АС",
    avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    content: "Елена помогла мне создать уникальный сайт, который отражает ценности нашей компании. Результат превзошел все ожидания — сайт не только красивый, но и удобный в использовании. Клиенты отмечают высокий уровень проработки дизайна."
  },
  {
    id: 2,
    name: "Марина Иванова",
    company: "Владелец Beauty Spa",
    avatar: "МИ",
    avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    content: "Я искала дизайнера, который сможет создать сайт для спа-салона с особой атмосферой. Елена идеально поняла мою концепцию и воплотила её в дизайне. Сайт получился элегантным и полностью соответствует стилю нашего бизнеса."
  },
  {
    id: 3,
    name: "Дмитрий Козлов",
    company: "Директор IT-компании TechFlow",
    avatar: "ДК",
    avatarUrl: "https://randomuser.me/api/portraits/men/62.jpg",
    rating: 5,
    content: "Профессиональный подход и внимание к деталям — это то, что отличает Елену. Она не просто создала дизайн сайта, а помогла разработать целостную концепцию, которая усиливает наш бренд. Все было выполнено точно в срок."
  },
  {
    id: 4,
    name: "Ольга Петрова",
    company: "Маркетолог, FreshStyle",
    avatar: "ОП",
    avatarUrl: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    content: "Работа с Еленой — это всегда приятный и продуктивный процесс. Она внимательно слушает пожелания, предлагает интересные решения и всегда укладывается в сроки. Наш новый корпоративный сайт получил множество положительных отзывов от клиентов."
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          size={16} 
          className={i < rating ? "text-primary fill-primary" : "text-gray-300"} 
        />
      ))}
    </div>
  );
};

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('testimonials');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight) {
          setIsVisible(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on initial render
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="testimonials" className="py-16 bg-gradient-to-b from-background to-accent/20">
      <div className="container">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-medium mb-2">Отзывы</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Что говорят мои клиенты</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Не только мои слова имеют значение. Вот что говорят клиенты о сотрудничестве со мной
          </p>
        </motion.div>
        
        <div className="relative max-w-5xl mx-auto px-4 md:px-0">
          {/* Background decorative elements */}
          <div className="absolute -left-10 top-1/4 text-primary/20 w-20 h-20">
            <Quote size={80} className="opacity-20" />
          </div>
          <div className="absolute -right-10 bottom-1/4 text-primary/20 w-20 h-20 transform rotate-180">
            <Quote size={80} className="opacity-20" />
          </div>
          
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={testimonial.id}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <Card className="border-none shadow-md overflow-hidden">
                      <CardContent className="p-0">
                        <div className="grid md:grid-cols-5 h-full">
                          {/* Left color column */}
                          <div className="hidden md:block bg-primary/10 p-6">
                            <div className="flex justify-center items-center h-full">
                              <Quote className="text-primary w-12 h-12 opacity-50" />
                            </div>
                          </div>
                          
                          {/* Content */}
                          <div className="md:col-span-4 p-6 md:p-8">
                            <div className="flex items-center gap-4 mb-4">
                              <Avatar className="h-12 w-12 border-2 border-primary/20">
                                {testimonial.avatarUrl ? (
                                  <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} />
                                ) : null}
                                <AvatarFallback className="bg-primary/20 text-primary font-medium">
                                  {testimonial.avatar}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                              </div>
                              <div className="ml-auto">
                                <StarRating rating={testimonial.rating} />
                              </div>
                            </div>
                            <div className="md:hidden mb-4">
                              <Quote className="text-primary w-8 h-8 opacity-50" />
                            </div>
                            <p className="italic text-muted-foreground leading-relaxed text-lg">
                              "{testimonial.content}"
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="-left-12 border-primary bg-background/80 hover:bg-primary hover:text-white" />
              <CarouselNext className="-right-12 border-primary bg-background/80 hover:bg-primary hover:text-white" />
            </div>
          </Carousel>
          
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            <CarouselPrevious className="static transform-none border-primary bg-background hover:bg-primary hover:text-white" />
            <CarouselNext className="static transform-none border-primary bg-background hover:bg-primary hover:text-white" />
          </div>
        </div>
        
        {/* Testimonial stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="text-center p-6 bg-white rounded-lg shadow-md card-hover-effect">
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</h3>
            <p className="text-muted-foreground">Довольных клиентов</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md card-hover-effect">
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">85+</h3>
            <p className="text-muted-foreground">Завершенных проектов</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md card-hover-effect">
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">5.0</h3>
            <p className="text-muted-foreground">Рейтинг работы</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md card-hover-effect">
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">6+</h3>
            <p className="text-muted-foreground">Лет опыта</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
