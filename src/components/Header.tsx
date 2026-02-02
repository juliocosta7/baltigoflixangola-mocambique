import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import CountrySwitcher from "./CountrySwitcher";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/30 shadow-lg"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-2 sm:px-4 py-3 sm:py-4 flex items-center justify-between gap-2">
        <div className="font-display text-lg sm:text-2xl md:text-3xl flex-shrink-0">
          <span className="text-foreground">BALTIGO</span>
          <span className="text-primary">FLIX</span>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <CountrySwitcher />
          <a
            href="https://wa.me/244954668786?text=Olá!%20Quero%20testar%20o%20BaltigoFlix"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className={`bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xs sm:text-sm px-3 sm:px-4 py-2 transition-all duration-300 ${
                isScrolled ? "scale-100" : "scale-95 sm:scale-100"
              }`}
            >
              <span className="hidden sm:inline">TESTE GRÁTIS</span>
              <span className="sm:hidden">TESTAR</span>
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
