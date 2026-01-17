import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a12] pt-20">
      {/* Background with mascot image */}
      <div className="absolute inset-0">
        <div 
          className="absolute right-0 top-0 bottom-0 w-full md:w-2/3 bg-cover bg-right bg-no-repeat opacity-80"
          style={{ backgroundImage: `url(${heroBanner})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a12] via-[#0a0a12]/90 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-2xl">
          {/* Headline */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-2">
            Conheça a <span className="text-primary">BaltigoFlix</span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            A liberdade que sua TV merece. Sem mensalidade abusiva. Sem limites.
          </p>

          {/* Benefits list */}
          <ul className="space-y-3 mb-10">
            <li className="flex items-center gap-3">
              <Check className="w-5 h-5 text-green-500" />
              <span>+10.000 canais abertos e fechados</span>
            </li>
            <li className="flex items-center gap-3">
              <Check className="w-5 h-5 text-green-500" />
              <span>+40.000 filmes e séries</span>
            </li>
            <li className="flex items-center gap-3">
              <Check className="w-5 h-5 text-green-500" />
              <span>Jogos ao vivo, sem atraso</span>
            </li>
            <li className="flex items-center gap-3">
              <Check className="w-5 h-5 text-green-500" />
              <span>Instalação fácil e rápida</span>
            </li>
          </ul>

          {/* CTA Button */}
          <a href="#planos">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-10 py-6">
              ADQUIRA O SEU ACESSO
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
