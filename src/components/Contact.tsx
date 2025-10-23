import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      content: "Av Presidente Vargas, 501",
      subContent: "Santa Maria - RS",
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "(55) 99726-0544",
      link: "tel:5599726-0544",
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "floraliriosdagua@gmail.com",
      link: "mailto:floraliriosdagua@gmail.com",
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Seg-Sex: 09:00-12:00 e 14:00-18:30",
      subContent: "Sáb: 09:00-12:00",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Entre em contato
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Estamos prontos para atendê-lo. Visite nossa loja ou entre em contato conosco.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-elegant transition-smooth border border-border/50 text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                  <info.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {info.title}
                </h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-muted-foreground hover:text-primary transition-smooth block"
                  >
                    {info.content}
                  </a>
                ) : (
                  <>
                    <p className="text-muted-foreground">{info.content}</p>
                    {info.subContent && (
                      <p className="text-muted-foreground text-sm mt-1">
                        {info.subContent}
                      </p>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Instagram CTA */}
          <div className="rounded-2xl p-8 md:p-10 text-center shadow-elegant animate-fade-in" style={{ background: 'var(--gradient-primary)' }}>
            <div className="flex justify-center mb-4">
              <Instagram className="h-12 w-12 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Siga-nos no Instagram
            </h3>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Acompanhe nossas novidades, produtos e promoções especiais.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="shadow-soft hover:shadow-elegant transition-smooth"
            >
              <a
                href="https://www.instagram.com/liriosdagua_artigosreligiosos?igsh=MWtmN2R0OG5wOHFvaQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
              >
                @liriosdagua_artigosreligiosos
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
