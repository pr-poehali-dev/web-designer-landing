
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Андрей Смирнов",
    company: "Основатель Synergy Studio",
    avatar: "АС",
    rating: 5,
    content: "Елена помогла мне создать уникальный сайт, который отражает ценности нашей компании. Результат превзошел все ожидания — сайт не только красивый, но и удобный в использовании. Клиенты отмечают высокий уровень проработки дизайна."
  },
  {
    id: 2,
    name: "Марина Иванова",
    company: "Владелец Beauty Spa",
    avatar: "МИ",
    rating: 5,
    content: "Я искала дизайнера, который сможет создать сайт для спа-салона с особой атмосферой. Елена идеально поняла мою концепцию и воплотила её в дизайне. Сайт получился элегантным и полностью соответствует стилю нашего бизнеса."
  },
  {
    id: 3,
    name: "Дмитрий Козлов",
    company: "Директор IT-компании TechFlow",
    avatar: "ДК",
    rating: 5,
    content: "Профессиональный подход и внимание к деталям — это то, что отличает Елену. Она не просто создала дизайн сайта, а помогла разработать целостную концепцию, которая усиливает наш бренд. Все было выполнено точно в срок."
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
  return (
    <section id="testimonials" className="py-16 bg-accent/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы клиентов</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Что говорят мои клиенты о сотрудничестве и результатах работы
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 md:px-0">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <Card className="border-none shadow-md">
                    <CardContent className="p-6 md:p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <Avatar>
                          <AvatarFallback className="bg-primary/20 text-primary font-medium">
                            {testimonial.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                        </div>
                        <div className="ml-auto">
                          <StarRating rating={testimonial.rating} />
                        </div>
                      </div>
                      <p className="italic text-muted-foreground leading-relaxed">
                        "{testimonial.content}"
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="-left-12" />
              <CarouselNext className="-right-12" />
            </div>
          </Carousel>
          
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            <CarouselPrevious className="static translate-y-0 transform-none" />
            <CarouselNext className="static translate-y-0 transform-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
