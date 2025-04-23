
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Send, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Свяжитесь со мной</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Буду рада обсудить детали вашего проекта и ответить на все вопросы
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-5xl mt-12">
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Контактная информация</CardTitle>
                <CardDescription>
                  Выберите удобный для вас способ связи
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Телефон</p>
                    <p className="font-medium">+7 920 271 56 33</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Send className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Telegram</p>
                    <p className="font-medium">@afnelena</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">elena@designhub.ru</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Отправьте сообщение</CardTitle>
                <CardDescription>
                  Заполните форму, и я свяжусь с вами в ближайшее время
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div className="space-y-2">
                    <Input placeholder="Ваш email" type="email" />
                  </div>
                  <div className="space-y-2">
                    <Textarea placeholder="Ваше сообщение" className="min-h-32" />
                  </div>
                  <Button className="w-full">Отправить сообщение</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
