import Header from "@/components/Header";
import { useEffect, useState } from "react";

const Vitrine = () => {
  const [iframeHeight, setIframeHeight] = useState(0);

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

    // Calcular altura do iframe
    const calculateHeight = () => {
      const headerHeight = 80; // Altura do Header (h-20 = 80px)
      const monteSiteFooterHeight = 63; // Altura do rodapé MonteSite
      const availableHeight = window.innerHeight - headerHeight - monteSiteFooterHeight;
      setIframeHeight(availableHeight);
    };

    // Calcular na montagem
    calculateHeight();

    // Recalcular ao redimensionar
    window.addEventListener('resize', calculateHeight);

    // Prevenir scroll na página
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    // Cleanup
    return () => {
      window.removeEventListener('resize', calculateHeight);
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, []);

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Header />
      <main className="flex-1 pt-20 overflow-hidden">
        <div className="w-full h-full">
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
