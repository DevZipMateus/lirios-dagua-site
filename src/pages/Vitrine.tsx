import Header from "@/components/Header";
import { useEffect, useState } from "react";

const Vitrine = () => {
  const [iframeHeight, setIframeHeight] = useState(800);

  useEffect(() => {
    // Atualizar título da página
    document.title = "Demonstração de Vitrine - Lírios D'agua";
    
    // Atualizar meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Demonstração de Vitrine - Confira nossos produtos disponíveis na loja Lírios D'agua"
      );
    }

    // Calcular altura do iframe: 100vh - altura do header (80px) - rodapé MonteSite (63px)
    const calculateHeight = () => {
      const headerHeight = 80; // h-20 do Header
      const monteSiteFooterHeight = 63;
      const availableHeight = window.innerHeight - headerHeight - monteSiteFooterHeight;
      setIframeHeight(availableHeight);
    };

    // Calcular inicialmente
    calculateHeight();

    // Recalcular quando a janela for redimensionada
    window.addEventListener('resize', calculateHeight);

    // Remover scroll da página
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('resize', calculateHeight);
      // Restaurar scroll ao sair da página
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, []);

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Header />
      <main className="flex-1 overflow-hidden mt-20">
        <div className="w-full h-full pb-[63px]">
          <iframe 
            src="https://v4.egestor.com.br/vitrine/?s=liriosdagua" 
            style={{ width: '100%', height: `${iframeHeight}px`, border: 'none' }}
            title="Vitrine de Produtos Lírios D'agua"
          />
        </div>
      </main>
    </div>
  );
};

export default Vitrine;
