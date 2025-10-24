import { useState, useEffect } from "react";
import { Menu, X, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Handle scroll after navigation to home with hash
    if (location.pathname === "/" && location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  }, [location]);

  const navItems = [
    { label: "Início", href: "#hero", isHash: true },
    { label: "Sobre", href: "#about", isHash: true },
    { label: "Produtos", href: "#products", isHash: true },
    { label: "Vitrine", href: "/vitrine", isHash: false },
    { label: "Contato", href: "#contact", isHash: true },
  ];

  const scrollToSection = (href: string, isHash: boolean) => {
    setIsMobileMenuOpen(false);
    
    if (!isHash) {
      navigate(href);
      return;
    }
    
    // If we're not on the home page, navigate there first with the hash
    if (location.pathname !== "/") {
      navigate("/" + href);
      return;
    }
    
    // We're on the home page, so scroll to the section
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const isHomePage = location.pathname === "/";

  return (
    <>
      {/* Top Bar - Only on home page */}
      {isHomePage && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground px-4 py-2">
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
                <span className="hidden sm:inline">Seg-Sex: 09:00-18:30 | Sáb: 09:00-12:00</span>
                <span className="sm:hidden">Seg-Sex: 09:00-18:30</span>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <header
        className={`fixed left-0 right-0 z-40 transition-smooth ${
          isHomePage ? 'top-[56px]' : 'top-0'
        } ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-soft"
            : "bg-transparent"
        }`}
      >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-3 transition-smooth hover:opacity-80"
          >
            <img
              src="/logo.png"
              alt="Lírios D'agua - Artigos Religiosos"
              className="h-12 w-auto"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href, item.isHash)}
                className="text-foreground/80 hover:text-primary transition-smooth font-medium relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href, item.isHash)}
                  className="text-foreground/80 hover:text-primary transition-smooth font-medium text-left py-2"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
    </>
  );
};

export default Header;
