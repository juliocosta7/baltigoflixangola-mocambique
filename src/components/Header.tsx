import { Button } from "@/components/ui/button";
import CountrySwitcher from "./CountrySwitcher";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/30">
      <div className="container mx-auto px-2 sm:px-4 py-3 sm:py-4 flex items-center justify-between gap-2">
        <div className="font-display text-lg sm:text-2xl md:text-3xl flex-shrink-0">
          <span className="text-foreground">BALTIGO</span>
          <span className="text-primary">FLIX</span>
        </div>
        
        <div className="flex items-center gap-2 sm:gap-4">
          <CountrySwitcher />
          <a href="#planos" className="hidden sm:block">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm sm:text-base">
              TESTE GRÁTIS
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
