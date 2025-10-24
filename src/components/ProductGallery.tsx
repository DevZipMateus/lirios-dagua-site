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
import product11 from "@/assets/product-11.jpg";
import product12 from "@/assets/product-12.jpg";
import product13 from "@/assets/product-13.jpg";
import product14 from "@/assets/product-14.jpg";
import product15 from "@/assets/product-15.jpg";
import product16 from "@/assets/product-16.jpg";
import product17 from "@/assets/product-17.jpg";
import product18 from "@/assets/product-18.jpg";
import product19 from "@/assets/product-19.jpg";
import product20 from "@/assets/product-20.jpg";
import product21 from "@/assets/product-21.jpg";
import product22 from "@/assets/product-22.jpg";
import product23 from "@/assets/product-23.jpg";
import product24 from "@/assets/product-24.jpg";
import product25 from "@/assets/product-25.jpg";
import product26 from "@/assets/product-26.jpg";
import product27 from "@/assets/product-27.jpg";

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
  { id: 11, image: product11, alt: "Imagem decorativa espiritual com tridente" },
  { id: 12, image: product12, alt: "Imagem decorativa espiritual com capa vermelha" },
  { id: 13, image: product13, alt: "Imagem decorativa espiritual Exu Veludo" },
  { id: 14, image: product14, alt: "Imagem decorativa espiritual em branco" },
  { id: 15, image: product15, alt: "Imagem decorativa espiritual com elementos verdes" },
  { id: 16, image: product16, alt: "Imagem decorativa espiritual Obaluaê" },
  { id: 17, image: product17, alt: "Imagem decorativa espiritual Obaluaê em dourado" },
  { id: 18, image: product18, alt: "Imagem decorativa espiritual Xangô" },
  { id: 19, image: product19, alt: "Imagem decorativa espiritual com tridente e base rosa" },
  { id: 20, image: product20, alt: "Imagem decorativa espiritual com capa vermelha e preta" },
  { id: 21, image: product21, alt: "Imagem decorativa espiritual Exu Veludo com capa vermelha" },
  { id: 22, image: product22, alt: "Imagem decorativa espiritual em túnica branca" },
  { id: 23, image: product23, alt: "Imagem decorativa espiritual com adornos verdes e dourados" },
  { id: 24, image: product24, alt: "Imagem decorativa espiritual Obaluaê com palha" },
  { id: 25, image: product25, alt: "Imagem decorativa espiritual Xangô com vestido vermelho" },
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
