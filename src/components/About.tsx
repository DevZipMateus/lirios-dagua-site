const About = () => {
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

          {/* Video Centered */}
          <div className="max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-elegant animate-fade-in">
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
      </div>
    </section>
  );
};

export default About;
