import { Button } from "@/components/ui/button";
const Header = () => {
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/30">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="font-display text-2xl md:text-3xl">
          <span className="text-foreground">BALTIGOFLIX </span>
          <span className="text-primary">
| Angola  - Moçambique          </span>
        </div>
        <a href="#planos">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
            ADQUIRIR ACESSO
          </Button>
        </a>
      </div>
    </header>;
};
export default Header;