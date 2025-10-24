import whatsappIcon from "@/assets/whatsapp.png";

const WhatsAppButton = () => {
  const phoneNumber = "5555999999999"; // Número do WhatsApp (substitua pelo número real)
  const message = "Olá! Gostaria de saber mais sobre os produtos.";
  
  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-lg hover:scale-110 transition-transform animate-pulse"
      aria-label="Fale conosco no WhatsApp"
    >
      <img 
        src={whatsappIcon} 
        alt="WhatsApp" 
        className="w-full h-full"
      />
    </button>
  );
};

export default WhatsAppButton;
