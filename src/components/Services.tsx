
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Layout, Monitor, Smartphone, PenTool } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-16 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Мои услуги</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Помогу вам создать уникальный дизайн, который выделит ваш бренд среди конкурентов
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          <Card className="hover-scale">
            <CardHeader>
              <PenTool className="h-10 w-10 text-primary mb-4" />
              <CardTitle>Веб-дизайн</CardTitle>
              <CardDescription>
                Создание уникального дизайна для вашего сайта, который привлечет внимание посетителей
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Разработка концепции дизайна, прототипирование, создание макетов и подготовка для верстки.
              </p>
            </CardContent>
          </Card>
          <Card className="hover-scale">
            <CardHeader>
              <Layout className="h-10 w-10 text-primary mb-4" />
              <CardTitle>UI/UX дизайн</CardTitle>
              <CardDescription>
                Проектирование удобных и интуитивно понятных интерфейсов, которые упростят взаимодействие с вашим продуктом
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Анализ аудитории, разработка пользовательских сценариев, создание прототипов и тестирование.
              </p>
            </CardContent>
          </Card>
          <Card className="hover-scale">
            <CardHeader>
              <Smartphone className="h-10 w-10 text-primary mb-4" />
              <CardTitle>Адаптивный дизайн</CardTitle>
              <CardDescription>
                Создание дизайна, который будет одинаково хорошо выглядеть на любых устройствах
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Разработка макетов для десктопных и мобильных устройств, учет особенностей различных платформ.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
