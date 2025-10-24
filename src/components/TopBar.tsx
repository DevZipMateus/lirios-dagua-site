import { Phone, MapPin, Clock } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-sm">
          <a 
            href="tel:5599950-4984" 
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Phone className="w-4 h-4" />
            <span>(55) 99950-4984</span>
          </a>
          
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Santa Maria - Rio Grande do Sul</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>Seg-Sex: 09:00-18:30 | Sáb: 09:00-12:00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
