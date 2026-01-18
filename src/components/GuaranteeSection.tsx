import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="py-12 sm:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Shield className="w-12 h-12 sm:w-16 sm:h-16 text-primary mx-auto mb-4 sm:mb-6" />
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6">
            Experimente sem riscos por <span className="text-primary">7 dias</span> e só então decida se quer continuar
          </h2>
          
          <p className="text-muted-foreground text-base sm:text-lg mb-4">
            Sem letras miúdas no contrato: pode experimentar a BaltigoFlix e todos os conteúdos dela <strong className="text-foreground">durante 7 dias.</strong>
          </p>
          
          <p className="text-muted-foreground text-base sm:text-lg mb-4">
            Se dentro desse período decidir não continuar com a <strong className="text-foreground">BaltigoFlix</strong>, basta entrar em contacto que cuidaremos de tudo para si. Em situações de falha do sistema, o valor é devolvido integralmente.
          </p>
          
          <p className="text-lg sm:text-xl text-primary font-medium mb-6 sm:mb-8">
            A partir de agora, não tem nada a perder.
          </p>

          <a href="#planos">
            <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base sm:text-lg px-8 sm:px-10 py-5 sm:py-6">
              TESTE GRÁTIS
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
