import { useNavigate } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Import product images
import velasRituais from "@/assets/velas-rituais.jpg";
import defumacoes from "@/assets/defumacoes.jpg";
import polvora from "@/assets/polvora.jpg";
import pembas from "@/assets/pembas.jpg";
import imagensSantos from "@/assets/imagens-santos.jpg";
import imagensExus from "@/assets/imagens-exus.jpg";
import imagensPombaGiras from "@/assets/imagens-pomba-giras.jpg";
import baralhosCiganos from "@/assets/baralhos-ciganos.jpg";
import baralhosPombaGira from "@/assets/baralhos-pomba-gira.jpg";
import baralhosExu from "@/assets/baralhos-exu.jpg";
import guias from "@/assets/guias.jpg";
import roupasUmbanda from "@/assets/roupas-umbanda.jpg";
import roupasPombaGira from "@/assets/roupas-pomba-gira.jpg";
import roupasExu from "@/assets/roupas-exu.jpg";
import perfumes from "@/assets/perfumes.jpg";
import sinetas from "@/assets/sinetas.jpg";
import chapeusPombaGira from "@/assets/chapeus-pomba-gira.jpg";
import chapeusExu from "@/assets/chapeus-exu.jpg";
import tambores from "@/assets/tambores.jpg";
import ages from "@/assets/ages.jpg";
import charutos from "@/assets/charutos.jpg";

const Products = () => {
  const navigate = useNavigate();

  const products = [
    { name: "Velas rituais", image: velasRituais },
    { name: "Defumações", image: defumacoes },
    { name: "Pólvora", image: polvora },
    { name: "Pembas", image: pembas },
    { name: "Imagens de santos", image: imagensSantos },
    { name: "Imagens de exus", image: imagensExus },
    { name: "Imagens de pomba giras", image: imagensPombaGiras },
    { name: "Baralhos ciganos", image: baralhosCiganos },
    { name: "Baralhos para pomba giras", image: baralhosPombaGira },
    { name: "Baralhos para exus", image: baralhosExu },
    { name: "Guias", image: guias },
    { name: "Roupas para umbanda", image: roupasUmbanda },
    { name: "Roupas para pomba gira", image: roupasPombaGira },
    { name: "Roupas para exu", image: roupasExu },
    { name: "Perfumes", image: perfumes },
    { name: "Sinetas", image: sinetas },
    { name: "Chapéus para pomba gira", image: chapeusPombaGira },
    { name: "Chapéus para exu", image: chapeusExu },
    { name: "Tambores", image: tambores },
    { name: "Agês", image: ages },
    { name: "Charutos", image: charutos },
  ];

  const handleProductClick = () => {
    navigate("/vitrine");
  };

  return (
    <section id="products" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Nossos produtos
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Oferecemos uma ampla variedade de artigos religiosos para atender 
              todas as suas necessidades espirituais.
            </p>
          </div>

          {/* Products Carousel */}
          <div className="relative px-12 mb-16">
            <Carousel
              opts={{
                align: "start",
                loop: true,
                slidesToScroll: 1,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                  stopOnInteraction: false,
                  stopOnMouseEnter: false,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {products.map((product, index) => (
                  <CarouselItem key={index} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
                    <div
                      onClick={handleProductClick}
                      className="flex flex-col items-center gap-4 cursor-pointer group animate-fade-in-up"
                    >
                      <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 shadow-soft hover:shadow-elegant hover:border-primary/40 transition-smooth hover:scale-105">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-center text-sm font-medium text-foreground group-hover:text-primary transition-smooth">
                        {product.name}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="rounded-2xl p-8 md:p-10 shadow-elegant animate-fade-in" style={{ background: 'var(--gradient-primary)' }}>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Visite nossa loja
              </h3>
              <p className="text-lg leading-relaxed mb-6 max-w-2xl mx-auto text-white/95">
                Venha conhecer nossa loja física e confira pessoalmente toda a variedade 
                de produtos que temos disponíveis para você.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-white/90">
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Seg-Sex:</span>
                  <span>09:00-12:00 e 14:00-18:30</span>
                </div>
                <div className="hidden sm:block w-px h-6 bg-white/30" />
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Sáb:</span>
                  <span>09:00-12:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
