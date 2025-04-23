
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Создаю уникальные <span className="text-primary">веб-дизайны</span>, которые привлекают клиентов
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Опытный веб-дизайнер с индивидуальным подходом к каждому клиенту. 
                Я помогу вам создать сайт, который будет работать на ваш бизнес.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="hover-scale">
                Заказать дизайн
              </Button>
              <Button size="lg" variant="outline" className="hover-scale">
                Посмотреть работы
              </Button>
            </div>
          </div>
          <div className="mx-auto flex w-full max-w-[500px] items-center justify-center lg:justify-end">
            <div className="aspect-square overflow-hidden rounded-full bg-muted">
              <img
                src="/placeholder.svg"
                alt="Елена Афанасьева"
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
