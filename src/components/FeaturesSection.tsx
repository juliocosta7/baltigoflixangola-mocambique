import { Lock, Film, Trophy } from "lucide-react";

const features = [
  {
    icon: Lock,
    title: "O melhor do conteúdo Adulto",
    description: "Só aqui na BaltigoFlix você vai encontrar os melhores conteúdos adultos em um só lugar. Filmes, canais e séries, tudo que há de mais quente neste universo. Além disso o acesso a este conteúdo pode ser protegido por senha.",
    color: "text-red-500"
  },
  {
    icon: Film,
    title: "Filmes e séries em HD",
    description: "BaltigoFlix conta com um catálogo completo que reúne mais de 40.000 mil filmes e séries dos principais serviços de streaming da atualidade, tudo em FULL HD.",
    color: "text-primary"
  },
  {
    icon: Trophy,
    title: "Brasileirão, Champions, UFC e muito mais...",
    description: "Tenha acesso a todos os canais ESPORTIVOS e assista os jogos do seu time do coração no conforto da sua casa. Na BaltigoFlix você conta com todos os canais esportivos, podendo assistir também, Basquete, Formula 1, UFC e muito mais…",
    color: "text-green-500"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-12 sm:py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-center mb-8 sm:mb-12">
          Confira o que você vai encontrar na <span className="text-primary">BaltigoFlix</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-card p-6 sm:p-8 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-fire text-center group hover:scale-105"
            >
              <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
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