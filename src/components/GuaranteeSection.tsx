import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import { useCountry } from "@/contexts/CountryContext";
import transferenciaImg from "@/assets/transferencia-bancaria.png";

const paymentMethods = {
  angola: [
    { name: "Multicaixa Express", image: "https://i.imgur.com/QwYBW9k.png" },
    { name: "Pagamento por Referência", image: "https://i.imgur.com/8rGBdYt.png" },
    { name: "Transferência Bancária", image: transferenciaImg }
  ],
  mozambique: [
    { name: "Cartão Visa/Mastercard", image: "https://i.imgur.com/4CkTl5x.png" },
    { name: "e-Mola", image: "https://i.imgur.com/5xvF8vR.png" },
    { name: "M-Pesa", image: "https://i.imgur.com/KpVq9ZI.png" }
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
            Experimente <span className="text-primary">7 dias grátis</span>
          </h2>
          
          <p className="text-muted-foreground text-base sm:text-lg mb-4">
            Sem compromisso. Experimente a BaltigoFlix com acesso total a todo o catálogo <strong className="text-foreground">durante 7 dias.</strong>
          </p>
          
          <p className="text-muted-foreground text-base sm:text-lg mb-4">
            Se não ficar satisfeito, basta cancelar. Em situações de falha técnica, garantimos o reembolso integral.
          </p>
          
          <p className="text-lg sm:text-xl text-primary font-medium mb-6 sm:mb-8">
            Zero riscos. Entretenimento ilimitado.
          </p>

          {/* Payment Methods */}
          <div className="mb-8 sm:mb-10">
            <h3 className="text-lg sm:text-xl font-display mb-4">Pagamentos Seguros</h3>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
              {methods.map((method, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                  <div className="bg-white rounded-xl p-2 sm:p-3 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
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
            <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base sm:text-lg px-8 sm:px-10 py-5 sm:py-6">
              COMEÇAR AGORA
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;