import { Film, Tv2, Trophy, Baby, Music, Clapperboard } from "lucide-react";

const contentTypes = [
  { icon: Film, label: "Filmes de Cinema", emoji: "🎬" },
  { icon: Tv2, label: "Séries Completas", emoji: "📺" },
  { icon: Trophy, label: "Desporto ao Vivo", emoji: "⚽" },
  { icon: Baby, label: "Conteúdo Infantil", emoji: "👶" },
  { icon: Clapperboard, label: "Animes Dublados", emoji: "🍥" },
  { icon: Music, label: "Canais de Música", emoji: "🎵" },
];

const ContentSection = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-6xl">📺</div>
        <div className="absolute top-20 right-20 text-6xl">🎬</div>
        <div className="absolute bottom-10 left-1/4 text-6xl">⚽</div>
        <div className="absolute bottom-20 right-1/3 text-6xl">🍿</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl text-gradient-fire mb-4">
            TUDO O QUE PRECISAS VER
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma biblioteca gigante de conteúdo para toda a família, actualizada semanalmente.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {contentTypes.map((content, index) => (
            <div 
              key={index}
              className="bg-gradient-card p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 text-center group hover:shadow-fire"
            >
              <span className="text-4xl mb-3 block group-hover:scale-125 transition-transform">
                {content.emoji}
              </span>
              <h3 className="font-display text-lg md:text-xl text-foreground">
                {content.label}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-primary text-lg font-medium">
            + de 5000 canais • + de 10000 filmes • Séries completas
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
