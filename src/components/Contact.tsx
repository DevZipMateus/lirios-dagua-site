import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      content: "Av Presidente Vargas, 501",
      subContent: "Imperatriz - MA",
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

          {/* Map */}
          <div className="bg-card rounded-2xl p-2 shadow-soft border border-border/50 mb-12 animate-fade-in">
            <div className="rounded-xl overflow-hidden h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.123456789!2d-47.491234!3d-5.526789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzEnMzYuNCJTIDQ3wrAyOSczMC40Ilc!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Lírios D'agua"
              />
            </div>
          </div>

          {/* Instagram CTA */}
          <div className="bg-gradient-primary rounded-2xl p-8 md:p-10 text-center shadow-elegant animate-fade-in">
            <div className="flex justify-center mb-4">
              <Instagram className="h-12 w-12 text-primary-foreground" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Siga-nos no Instagram
            </h3>
            <p className="text-lg text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
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
