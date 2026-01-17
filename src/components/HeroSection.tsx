import { Button } from "@/components/ui/button";
import { Play, MessageCircle } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  const whatsappLink = "https://wa.me/244999999999?text=Olá!%20Quero%20testar%20o%20BaltigoFlix";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${heroBanner})` }}
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      
      {/* Fire glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-fire" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse-fire" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {/* Flags */}
        <div className="flex justify-center gap-6 mb-8">
          <span className="text-5xl animate-float">🇦🇴</span>
          <span className="text-5xl animate-float" style={{ animationDelay: '0.5s' }}>🇲🇿</span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl tracking-wide mb-4">
          <span className="text-foreground">ANGOLA E MOÇAMBIQUE</span>
          <br />
          <span className="text-gradient-fire">JÁ TÊM O MELHOR IPTV</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Entretenimento completo que funciona mesmo com internet fraca. 
          Milhares de canais, filmes e séries ao teu alcance.
        </p>

        {/* Quick benefits */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <span className="bg-muted/50 backdrop-blur px-4 py-2 rounded-full text-sm font-medium border border-primary/30">
            ✓ Sem travamentos
          </span>
          <span className="bg-muted/50 backdrop-blur px-4 py-2 rounded-full text-sm font-medium border border-primary/30">
            ✓ Suporte em Português
          </span>
          <span className="bg-muted/50 backdrop-blur px-4 py-2 rounded-full text-sm font-medium border border-primary/30">
            ✓ Teste disponível
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-gradient-fire hover:opacity-90 text-primary-foreground font-bold text-lg px-8 py-6 shadow-fire transition-all hover:scale-105">
              <MessageCircle className="mr-2 h-5 w-5" />
              Pedir Teste Grátis
            </Button>
          </a>
          <Button size="lg" variant="outline" className="border-primary/50 text-foreground hover:bg-primary/10 font-semibold text-lg px-8 py-6">
            <Play className="mr-2 h-5 w-5" />
            Ver Como Funciona
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
