import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useCountry, prices } from "@/contexts/CountryContext";
import transferenciaImg from "@/assets/transferencia-bancaria.png";

const planKeys = ['mensal', 'trimestral', 'semestral', 'anual'] as const;

const planDetails = {
  mensal: {
    name: "Básico",
    duration: "1 mês de acesso",
    screens: "2 ecrãs",
    link: "https://pay.kambafy.com/checkout/e3df920e-4e56-4c77-baa4-9f08ca03e3fb",
    popular: false
  },
  trimestral: {
    name: "Padrão",
    duration: "3 meses de acesso",
    screens: "3 ecrãs",
    link: "https://pay.kambafy.com/checkout/e3df920e-4e56-4c77-baa4-9f08ca03e3fb",
    popular: true
  },
  semestral: {
    name: "Premium",
    duration: "6 meses de acesso",
    screens: "3 ecrãs",
    link: "https://pay.kambafy.com/checkout/e3df920e-4e56-4c77-baa4-9f08ca03e3fb",
    popular: false
  },
  anual: {
    name: "Ultra",
    duration: "12 meses de acesso",
    screens: "4 ecrãs",
    link: "https://pay.kambafy.com/checkout/e3df920e-4e56-4c77-baa4-9f08ca03e3fb",
    popular: false
  }
};

const features = [
  "Mais de 40 mil títulos",
  "Canais adultos (opcional)",
  "Qualidade até 4K Ultra HD",
  "Assista em qualquer dispositivo"
];

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

const PricingPlans = () => {
  const { country, currencySymbol } = useCountry();
  const countryPrices = prices[country];
  const methods = paymentMethods[country];

  return (
    <section id="planos" className="py-12 sm:py-20 bg-gradient-hero scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-center mb-4">
          Escolha o plano ideal para si
        </h2>
        <p className="text-muted-foreground text-center text-base sm:text-lg max-w-2xl mx-auto mb-8">
          Assista onde quiser. Cancele quando quiser.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto mt-8 sm:mt-12">
          {planKeys.map((key) => {
            const plan = planDetails[key];
            const pricing = countryPrices.plans[key];
            
            return (
              <div 
                key={key}
                className={`relative bg-gradient-card rounded-2xl border overflow-hidden ${
                  plan.popular 
                    ? 'border-primary shadow-fire' 
                    : 'border-border/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-1 text-sm font-bold">
                    MAIS POPULAR
                  </div>
                )}
                
                <div className={`p-4 sm:p-6 ${plan.popular ? 'pt-10' : ''}`}>
                  <div className="text-center mb-4 sm:mb-6">
                    <span className="text-muted-foreground text-xs sm:text-sm uppercase tracking-wider">PLANO</span>
                    <h3 className="font-display text-2xl sm:text-3xl mt-1">{plan.name}</h3>
                  </div>

                  <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    <li className="flex items-center gap-2 text-xs sm:text-sm">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {plan.duration}
                    </li>
                    <li className="flex items-center gap-2 text-xs sm:text-sm">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      Assista em {plan.screens}
                    </li>
                    {features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs sm:text-sm">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="text-center mb-4 sm:mb-6">
                    <span className="text-muted-foreground text-xs sm:text-sm">A partir de</span>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-muted-foreground text-sm">{currencySymbol}</span>
                      <span className="font-display text-3xl sm:text-5xl text-primary">{pricing.price}</span>
                    </div>
                  </div>

                  <a href={plan.link} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm sm:text-base">
                      COMEÇAR
                    </Button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Payment Methods */}
        <div className="mt-12 sm:mt-16 text-center">
          <h3 className="text-xl sm:text-2xl font-display mb-6">Formas de Pagamento Aceites</h3>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
            {methods.map((method, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <div className="bg-white rounded-xl p-3 sm:p-4 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
                  <img 
                    src={method.image} 
                    alt={method.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <span className="text-xs sm:text-sm text-muted-foreground">{method.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;