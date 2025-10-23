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

    // Cleanup
    return () => {
      window.removeEventListener('resize', calculateHeight);
    };
  }, []);

  return (
    <div className="flex flex-col" style={{ height: 'calc(100vh - 63px)' }}>
      <Header />
      <main className="overflow-hidden" style={{ marginTop: '80px', height: `${iframeHeight}px` }}>
        <iframe 
          src="https://v4.egestor.com.br/vitrine/?s=liriosdagua" 
          style={{ width: '100%', height: '100%', border: 'none' }}
          title="Vitrine de Produtos Lírios D'agua"
        />
      </main>
    </div>
  );
};

export default Vitrine;
