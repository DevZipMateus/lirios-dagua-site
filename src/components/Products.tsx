import { Flame, Image, Shirt, Sparkles, Music, Book } from "lucide-react";

const Products = () => {
  const categories = [
    {
      icon: Flame,
      title: "Velas e defumações",
      items: ["Velas rituais", "Defumações", "Pólvora", "Pembas"],
    },
    {
      icon: Image,
      title: "Imagens sagradas",
      items: ["Imagens de santos", "Imagens de exus", "Imagens de pomba giras"],
    },
    {
      icon: Book,
      title: "Baralhos e guias",
      items: ["Baralhos ciganos", "Baralhos para pomba giras", "Baralhos para exus", "Guias"],
    },
    {
      icon: Shirt,
      title: "Roupas litúrgicas",
      items: ["Roupas para umbanda", "Roupas para pomba gira", "Roupas para exu"],
    },
    {
      icon: Sparkles,
      title: "Acessórios",
      items: ["Perfumes", "Sinetas", "Chapéus para pomba gira", "Chapéus para exu"],
    },
    {
      icon: Music,
      title: "Instrumentos",
      items: ["Tambores", "Agês", "Charutos"],
    },
  ];

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

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-elegant transition-smooth border border-border/50 hover:border-primary/30 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-muted-foreground flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
