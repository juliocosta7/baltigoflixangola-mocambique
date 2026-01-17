import { Button } from "@/components/ui/button";
import { Server, Zap, MonitorPlay, Headphones, RefreshCw, Ban } from "lucide-react";

const reasons = [
  {
    icon: Server,
    title: "Servidor privado e exclusivo",
    description: "Usamos servidores próprios, otimizados pra garantir acesso rápido, estável e com máxima qualidade, até nos horários de pico."
  },
  {
    icon: Zap,
    title: "Instalação Rápida e Descomplicada",
    description: "Compatível com Smart TV, TV Box, celular e computador. Em menos de 5 minutos você tá assistindo tudo."
  },
  {
    icon: MonitorPlay,
    title: "Qualidade Full HD e 4K",
    description: "Assista com nitidez máxima, sem engasgos ou perda de definição. Do futebol ao filme, é só apertar o play."
  },
  {
    icon: Headphones,
    title: "Suporte Ágil e Especializado",
    description: "Equipe disponível nos melhores canais de atendimento, pronta pra te ajudar com agilidade e respeito."
  },
  {
    icon: RefreshCw,
    title: "Catálogo Atualizado Todos os Dias",
    description: "Séries, filmes, canais ao vivo, infantis, esportes, realities, documentários e muito mais — sempre atualizados."
  },
  {
    icon: Ban,
    title: "Sem Propagandas ou Interrupções",
    description: "Nada de anúncios irritantes. É dar o play e curtir do início ao fim, sem distrações e sem enrolação."
  }
];

const ReasonsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-4xl md:text-5xl text-center mb-12">
          Veja os motivos pra adquirir sua <span className="text-primary">BaltigoFlix</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-gradient-card p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl mb-2">{reason.title}</h3>
              <p className="text-muted-foreground text-sm">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#planos">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-10 py-6">
              Quero adquirir agora!
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;
