import { Button } from "@/components/ui/button";
import { MessageCircle, Send } from "lucide-react";

const CTASection = () => {
  const whatsappLink = "https://wa.me/244999999999?text=Olá!%20Quero%20testar%20o%20BaltigoFlix";
  const messengerLink = "https://m.me/baltigoflix";

  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Fire glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Flags */}
          <div className="flex justify-center gap-4 mb-6">
            <span className="text-4xl animate-float">🇦🇴</span>
            <span className="text-4xl animate-float" style={{ animationDelay: '0.3s' }}>🇲🇿</span>
          </div>

          <h2 className="font-display text-5xl md:text-7xl text-foreground mb-4">
            PRONTO PARA COMEÇAR?
          </h2>
          
          <p className="text-xl md:text-2xl text-gradient-fire font-display mb-6">
            PEDE O TEU TESTE GRÁTIS AGORA!
          </p>

          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Fala connosco pelo WhatsApp ou Messenger e começa a assistir hoje mesmo. 
            Suporte rápido e em português.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-lg px-10 py-6 shadow-lg transition-all hover:scale-105">
                <MessageCircle className="mr-2 h-6 w-6" />
                WhatsApp
              </Button>
            </a>
            <a href={messengerLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full sm:w-auto bg-[#0084FF] hover:bg-[#0073e6] text-white font-bold text-lg px-10 py-6 shadow-lg transition-all hover:scale-105">
                <Send className="mr-2 h-6 w-6" />
                Messenger
              </Button>
            </a>
          </div>

          <p className="mt-8 text-muted-foreground">
            ⚡ Resposta em menos de 5 minutos durante o horário de atendimento
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
