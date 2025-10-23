import { MapPin, Phone, Mail, Instagram, Clock } from "lucide-react";

const Footer = () => {
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
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div>
            <img
              src="/logo.png"
              alt="Lírios D'agua"
              className="h-16 w-auto mb-4"
            />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Sua loja completa de artigos religiosos em Imperatriz-MA. 
              Tudo para o seu axé.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("#hero")}
                  className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#about")}
                  className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#products")}
                  className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                >
                  Produtos
                </button>
              </li>
              <li>
                <a
                  href="/vitrine"
                  className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                >
                  Vitrine
                </a>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Av Presidente Vargas, 501<br />
                  Imperatriz - MA
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a
                  href="tel:5599726-0544"
                  className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                >
                  (55) 99726-0544
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:floraliriosdagua@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-smooth text-sm break-all"
                >
                  floraliriosdagua@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Horário e Redes Sociais */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Horário de Funcionamento</h3>
            <div className="flex items-start gap-2 mb-4">
              <Clock className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
              <div className="text-muted-foreground text-sm">
                <p>Seg-Sex: 09:00-12:00</p>
                <p className="mb-1">14:00-18:30</p>
                <p>Sáb: 09:00-12:00</p>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-foreground font-semibold mb-3 text-sm">Redes Sociais</h4>
              <a
                href="https://www.instagram.com/liriosdagua_artigosreligiosos?igsh=MWtmN2R0OG5wOHFvaQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth"
              >
                <Instagram className="h-5 w-5" />
                <span className="text-sm">@liriosdagua_artigosreligiosos</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <p className="text-center text-muted-foreground text-sm">
            © {new Date().getFullYear()} Lírios D'agua Artigos Religiosos. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
