import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
          
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            Experimente sem riscos por <span className="text-primary">7 dias</span> e só então decida se quer continuar
          </h2>
          
          <p className="text-muted-foreground text-lg mb-4">
            Sem letras miúdas no contrato: você pode experimentar a BaltigoFlix e todos os conteúdos dela <strong className="text-foreground">durante 7 dias.</strong>
          </p>
          
          <p className="text-muted-foreground text-lg mb-4">
            Se dentro desse período você decidir não continuar com a <strong className="text-foreground">BaltigoFlix</strong>, basta entrar em contato que cuidaremos de tudo para você, em situações de falha do sistema, o valor é devolvido integralmente.
          </p>
          
          <p className="text-xl text-primary font-medium mb-8">
            A partir de agora, você não tem nada a perder.
          </p>

          <a href="#planos">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-10 py-6">
              ADQUIRA O SEU AGORA
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
