import { Lock, Film, Trophy } from "lucide-react";

const features = [
  {
    icon: Lock,
    title: "Conteúdo Exclusivo para Adultos",
    description: "Aceda aos melhores conteúdos adultos num só lugar. Filmes, canais e séries, com acesso protegido por senha para a sua privacidade.",
    color: "text-red-500"
  },
  {
    icon: Film,
    title: "Filmes e Séries em HD e 4K",
    description: "Um catálogo completo com mais de 40.000 títulos dos principais serviços de streaming, tudo em alta definição.",
    color: "text-primary"
  },
  {
    icon: Trophy,
    title: "Todo o Desporto em Direto",
    description: "Futebol, Champions League, UFC, Fórmula 1 e muito mais. Assista aos jogos do seu clube favorito no conforto de casa.",
    color: "text-green-500"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-12 sm:py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-center mb-4">
          Tudo o que vai encontrar
        </h2>
        <p className="text-muted-foreground text-center text-base sm:text-lg max-w-2xl mx-auto mb-8 sm:mb-12">
          Um mundo de entretenimento à distância de um clique
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-card p-6 sm:p-8 rounded-xl border border-border/50 hover:border-primary/50 transition-all hover:shadow-fire text-center group"
            >
              <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-7 h-7 sm:w-8 sm:h-8 ${feature.color}`} />
              </div>
              <h3 className="font-display text-xl sm:text-2xl mb-3 sm:mb-4">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;