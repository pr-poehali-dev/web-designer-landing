
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Process = () => {
  return (
    <section id="process" className="py-16 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Процесс работы</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Прозрачный и понятный процесс от первого звонка до финального результата
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Card className="hover-scale">
            <CardHeader>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground mb-2">
                1
              </div>
              <CardTitle>Индивидуальный подход</CardTitle>
              <CardDescription>
                Первый шаг нашего сотрудничества
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Проведем личный созвон, на котором детально обсудим ваш запрос и ожидаемый результат.
                Это поможет мне лучше понять ваши потребности и предложить оптимальное решение.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground mb-2">
                2
              </div>
              <CardTitle>Понятный процесс работы</CardTitle>
              <CardDescription>
                Ясность и прозрачность на каждом этапе
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Составлю коммерческое предложение, в котором будут закреплены все этапы работы вместе со сроками и стоимостью.
                Вы всегда будете знать, на каком этапе находится проект.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground mb-2">
                3
              </div>
              <CardTitle>Безопасность</CardTitle>
              <CardDescription>
                Юридическая защита для обеих сторон
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Заключим договор, который обезопасит обе стороны. В нем будут прописаны все условия сотрудничества,
                включая сроки, стоимость и ответственность сторон.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Process;
