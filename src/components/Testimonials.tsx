import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Star } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import testimonial4 from "@/assets/testimonial-4.jpg";
import testimonial5 from "@/assets/testimonial-5.jpg";
import testimonial6 from "@/assets/testimonial-6.jpg";
import testimonial7 from "@/assets/testimonial-7.jpg";
import testimonial8 from "@/assets/testimonial-8.jpg";

const testimonials = [
  {
    name: "Mariane Scott",
    text: "Excelente qualidade e muitas variedades de produtos. A melhor loja, os melhores preços e um ótimo atendimento. Super recomendo!",
    image: testimonial1,
  },
  {
    name: "Fernando Venturini",
    text: "Muito joia a loja com muitas ofertas recomendo",
    image: testimonial2,
  },
  {
    name: "Patricia Franco",
    text: "Melhor lugar para encontrar os artigos mais variados, atendimento maravilhoso! Recomendo 100%.",
    image: testimonial3,
  },
  {
    name: "Thais Cremonese",
    text: "Ótimo atendimento. Preços super em conta.",
    image: testimonial4,
  },
  {
    name: "Ledi Rosa",
    text: "Loja sempre tem o que eu preciso, preço justo e um excelente atendimento! Recomendo.",
    image: testimonial5,
  },
  {
    name: "Otávio Silveira",
    text: "Loja com ótimos produtos e com preços excelentes.",
    image: testimonial6,
  },
  {
    name: "Cezar Augusto",
    text: "Ótima, muito bom, excelente atendimento.",
    image: testimonial7,
  },
  {
    name: "Lisi",
    text: "Excelente local e atendimento maravilhoso",
    image: testimonial8,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça a experiência de quem já comprou conosco
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="p-8 bg-card shadow-elegant">
                    <div className="flex flex-col items-center text-center space-y-6">
                      <img
                        src={testimonial.image}
                        alt={`Depoimento de ${testimonial.name}`}
                        className="w-full max-w-2xl rounded-lg shadow-lg"
                      />
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <blockquote className="text-lg text-muted-foreground italic">
                        "{testimonial.text}"
                      </blockquote>
                      <p className="font-semibold text-xl">
                        {testimonial.name}
                      </p>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
