import Header from "@/components/Header";
import { useEffect } from "react";

const Vitrine = () => {
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
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        <div className="w-full">
          <iframe 
            src="https://v4.egestor.com.br/vitrine/?s=liriosdagua" 
            style={{ width: '100%', height: '800px', border: 'none' }}
            title="Vitrine de Produtos Lírios D'agua"
          />
        </div>
      </main>
    </div>
  );
};

export default Vitrine;
