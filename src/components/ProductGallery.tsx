import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";
import product7 from "@/assets/product-7.jpg";
import product8 from "@/assets/product-8.jpg";
import product9 from "@/assets/product-9.jpg";
import product10 from "@/assets/product-10.jpg";

const products = [
  { id: 1, image: product1, alt: "Caveira decorativa bege com olhos vermelhos" },
  { id: 2, image: product2, alt: "Caveiras decorativas bege duplas" },
  { id: 3, image: product3, alt: "Caveiras decorativas vermelhas duplas" },
  { id: 4, image: product4, alt: "Caveiras decorativas pretas duplas" },
  { id: 5, image: product5, alt: "Caveira decorativa preta com olhos vermelhos" },
  { id: 6, image: product6, alt: "Caveira decorativa vermelha com olhos espelhados" },
  { id: 7, image: product7, alt: "Caveira decorativa preta texturizada" },
  { id: 8, image: product8, alt: "Dado branco decorativo com pontos vermelhos" },
  { id: 9, image: product9, alt: "Dado vermelho decorativo" },
  { id: 10, image: product10, alt: "Bola 8 decorativa de sinuca" },
];

const ProductGallery = () => {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  const plugin = React.useRef(
    Autoplay({ 
      delay: 3000, 
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    })
  );

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Galeria de Produtos
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns dos nossos produtos exclusivos para suas práticas espirituais
          </p>
        </div>

        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-5xl mx-auto"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {products.map((product) => (
              <CarouselItem key={product.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Card className="cursor-pointer hover:shadow-elegant transition-smooth overflow-hidden group">
                        <CardContent className="p-0">
                          <div className="aspect-[3/4] overflow-hidden">
                            <img
                              src={product.image}
                              alt={product.alt}
                              className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                              loading="lazy"
                            />
                          </div>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-0">
                      <div className="relative w-full h-[80vh] flex items-center justify-center">
                        <img
                          src={product.image}
                          alt={product.alt}
                          className="max-w-full max-h-full object-contain rounded-lg"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default ProductGallery;
