import { Wifi, Zap, Tv, Film, Headphones, Play } from "lucide-react";

const benefits = [
  {
    icon: Wifi,
    title: "Funciona com Internet Fraca",
    description: "Optimizado para funcionar bem mesmo com dados móveis ou internet limitada."
  },
  {
    icon: Zap,
    title: "Estável e Rápido",
    description: "Servidores de alta qualidade garantem transmissão fluída sem interrupções."
  },
  {
    icon: Tv,
    title: "Milhares de Canais",
    description: "Canais de Angola, Moçambique, Portugal, Brasil e do mundo inteiro."
  },
  {
    icon: Film,
    title: "Filmes e Séries",
    description: "Biblioteca completa com lançamentos, clássicos e conteúdo exclusivo."
  },
  {
    icon: Play,
    title: "Desporto ao Vivo",
    description: "Futebol, basquetebol e todos os eventos desportivos em direto."
  },
  {
    icon: Headphones,
    title: "Suporte em Português",
    description: "Assistência rápida e eficiente na tua língua, sempre disponível."
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl text-gradient-fire mb-4">
            PORQUÊ ESCOLHER O BALTIGOFLIX?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mais do que um serviço de IPTV, é a solução completa de entretenimento para ti e a tua família.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-gradient-card p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-fire group"
            >
              <div className="w-14 h-14 rounded-lg bg-gradient-fire flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
