import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center gradient-hero pt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          {/* Logo Grande */}
          <div className="mb-8 flex justify-center">
            <img
              src="/logo.png"
              alt="Lírios D'agua Logo"
              className="h-32 w-auto animate-scale-in"
            />
          </div>

          {/* H1 - Nome da Empresa */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
            Lírios D'agua
          </h1>

          {/* H2 - Descrição da Empresa */}
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
            Sua loja completa de artigos religiosos em Imperatriz
          </h2>

          {/* Slogan */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <Sparkles className="h-5 w-5 text-primary" />
            <p className="text-lg md:text-xl text-primary font-medium">
              Tudo para o seu axé. ✨
            </p>
            <Sparkles className="h-5 w-5 text-primary" />
          </div>

          {/* Descrição Adicional */}
          <p className="text-base md:text-lg text-foreground/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Oferecemos uma ampla variedade de produtos para sua prática espiritual, 
            desde velas e imagens sagradas até roupas litúrgicas e acessórios para umbanda e candomblé.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("#products")}
              className="shadow-elegant hover:shadow-lg transition-smooth px-8 text-white"
              style={{ background: 'var(--gradient-primary)' }}
            >
              Nossos produtos
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#contact")}
              className="border-primary/60 text-primary hover:bg-primary hover:text-white transition-smooth px-8"
            >
              Entre em contato
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>
    </section>
  );
};

export default Hero;
