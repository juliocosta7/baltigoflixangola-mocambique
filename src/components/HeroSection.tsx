import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import heroBanner from "@/assets/hero-banner-angola-mozambique.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a12] pt-16 sm:pt-20">
      {/* Background with banner image */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 w-full h-full bg-contain sm:bg-cover bg-top sm:bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBanner})` }}
        />
        {/* Mobile: gradient from bottom to show flags at top */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a12] via-[#0a0a12]/80 to-transparent sm:hidden" />
        {/* Desktop: gradient from left */}
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-[#0a0a12] via-[#0a0a12]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a12] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 sm:py-20">
        <div className="max-w-2xl">
          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4">
            <span className="text-primary">Entretenimento</span> <span className="text-foreground">ilimitado</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8">
            Filmes, séries, desporto e muito mais. Assista onde quiser. Cancele quando quiser.
          </p>

          {/* Benefits list */}
          <ul className="space-y-2 sm:space-y-3 mb-8 sm:mb-10">
            <li className="flex items-center gap-3">
              <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-sm sm:text-base">Mais de 10.000 canais em direto</span>
            </li>
            <li className="flex items-center gap-3">
              <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-sm sm:text-base">Mais de 40.000 filmes e séries</span>
            </li>
            <li className="flex items-center gap-3">
              <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-sm sm:text-base">Desporto em direto sem atraso</span>
            </li>
            <li className="flex items-center gap-3">
              <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-sm sm:text-base">Funciona com internet lenta</span>
            </li>
            <li className="flex items-center gap-3">
              <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-sm sm:text-base">Configuração rápida e simples</span>
            </li>
          </ul>

          {/* CTA Button */}
          <a href="https://wa.me/244954668786?text=Olá!%20Quero%20testar%20o%20BaltigoFlix" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base sm:text-lg px-8 sm:px-10 py-5 sm:py-6">
              COMEÇAR
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;