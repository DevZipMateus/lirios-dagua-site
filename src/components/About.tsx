import { Heart, Star, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Dedicação espiritual",
      description: "Atendimento com respeito e conhecimento das tradições religiosas afro-brasileiras",
    },
    {
      icon: Star,
      title: "Produtos de qualidade",
      description: "Seleção cuidadosa de artigos autênticos para sua prática espiritual",
    },
    {
      icon: Users,
      title: "Comunidade acolhedora",
      description: "Um espaço de respeito e acolhimento para todos os praticantes",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Sobre nós
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full" />
          </div>

          {/* Content with Video */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content - Left */}
            <div className="space-y-6 animate-fade-in">
              <p className="text-lg text-muted-foreground leading-relaxed">
                A Lírios D'agua é referência em artigos religiosos em Imperatriz-MA, 
                oferecendo produtos de qualidade para umbanda, candomblé e outras práticas espirituais.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Com anos de experiência e dedicação, nos orgulhamos de servir nossa comunidade 
                com respeito às tradições religiosas afro-brasileiras, oferecendo um espaço 
                acolhedor e produtos autênticos para sua jornada espiritual.
              </p>
            </div>

            {/* Video - Right */}
            <div className="max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-elegant animate-fade-in">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
              >
                <source src="/1761057893801_0_copy_8a399606_3e98_4c53_b5f1_e701c8e3ca38.mp4" type="video/mp4" />
                Seu navegador não suporta a reprodução de vídeos.
              </video>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-secondary/30 hover:bg-secondary/50 transition-smooth shadow-soft hover:shadow-elegant animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="rounded-2xl p-8 md:p-12 shadow-elegant animate-fade-in" style={{ background: 'var(--gradient-primary)' }}>
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Nossa missão
              </h3>
              <p className="text-lg leading-relaxed text-white/95">
                Proporcionar aos nossos clientes acesso a produtos autênticos e de qualidade 
                para suas práticas espirituais, sempre com respeito às tradições religiosas 
                afro-brasileiras e com atendimento acolhedor e especializado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
