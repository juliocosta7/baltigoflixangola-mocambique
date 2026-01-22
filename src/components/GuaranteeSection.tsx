import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import { useCountry } from "@/contexts/CountryContext";
import transferenciaImg from "@/assets/transferencia-bancaria.png";

// Placeholder images - will be replaced when user uploads actual images
const paymentMethods = {
  angola: [
    { name: "Multicaixa Express", image: "https://play-lh.googleusercontent.com/bHK3-NthxC6JYI3wV9eDq1f1LHJDxz5P-lnqjHAKJD4sU1QpR0rTuF9KVqg9JKq4rQ=w240-h480-rw" },
    { name: "Pagamento por Referência", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Multicaixa_logo.svg/1200px-Multicaixa_logo.svg.png" },
    { name: "Transferência Bancária", image: transferenciaImg }
  ],
  mozambique: [
    { name: "Cartão Visa/Mastercard", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" },
    { name: "e-Mola", image: "https://play-lh.googleusercontent.com/wqwKGhfMxCvX1Aw9g8sLJNv2L8f6x-NyQqQfEE8FFnJKZrZvTZvvFnCBYGEpVKhMKQ=w240-h480-rw" },
    { name: "M-Pesa", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/M-PESA_LOGO-01.svg/2560px-M-PESA_LOGO-01.svg.png" }
  ]
};

const GuaranteeSection = () => {
  const { country } = useCountry();
  const methods = paymentMethods[country];

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

          {/* Payment Methods */}
          <div className="mb-8 sm:mb-10">
            <h3 className="text-lg sm:text-xl font-display mb-4">Formas de Pagamento</h3>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
              {methods.map((method, index) => (
                <div key={index} className="flex flex-col items-center gap-2 transition-transform duration-300 hover:scale-110">
                  <div className="bg-white rounded-xl p-2 sm:p-3 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center shadow-md">
                    <img 
                      src={method.image} 
                      alt={method.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <span className="text-xs text-muted-foreground">{method.name}</span>
                </div>
              ))}
            </div>
          </div>

          <a href="#planos">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base sm:text-lg px-8 sm:px-10 py-5 sm:py-6
                transition-all duration-300 
                hover:scale-105 hover:shadow-xl hover:shadow-primary/40 
                active:scale-95"
            >
              QUERO ADQUIRIR AGORA!
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;