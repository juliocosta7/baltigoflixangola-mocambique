import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useCountry, prices } from "@/contexts/CountryContext";
import transferenciaImg from "@/assets/transferencia-bancaria.png";

const planKeys = ['mensal', 'trimestral', 'semestral', 'anual'] as const;

const planDetails = {
  mensal: {
    name: "mensal",
    duration: "Acesso de 1 mês",
    screens: "2 telas simultâneas",
    link: "https://pay.kambafy.com/checkout/e3df920e-4e56-4c77-baa4-9f08ca03e3fb",
    popular: false
  },
  trimestral: {
    name: "trimestral",
    duration: "Acesso de 3 meses",
    screens: "3 telas simultâneas",
    link: "https://pay.kambafy.com/checkout/e3df920e-4e56-4c77-baa4-9f08ca03e3fb",
    popular: true
  },
  semestral: {
    name: "semestral",
    duration: "Acesso de 6 meses",
    screens: "3 telas simultâneas",
    link: "https://pay.kambafy.com/checkout/e3df920e-4e56-4c77-baa4-9f08ca03e3fb",
    popular: false
  },
  anual: {
    name: "anual",
    duration: "Acesso de 1 ano",
    screens: "4 telas simultâneas",
    link: "https://pay.kambafy.com/checkout/e3df920e-4e56-4c77-baa4-9f08ca03e3fb",
    popular: false
  }
};

const features = [
  "+ de 40 mil conteúdos",
  "Canais Adultos (opcional)",
  "Qualidade SD/HD/FHD/4K",
  "Assista na Smart Tv, Tablet, Smartphone, TV Box ou Computador."
];

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

const PricingPlans = () => {
  const { country, currencySymbol } = useCountry();
  const countryPrices = prices[country];
  const methods = paymentMethods[country];

  return (
    <section id="planos" className="py-12 sm:py-20 bg-gradient-hero scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-center mb-4">
          Aproveite esta <span className="text-primary">oportunidade única!</span>
        </h2>

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
                    <span className="text-muted-foreground text-xs sm:text-sm uppercase">PLANO</span>
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
                    <span className="text-muted-foreground text-xs sm:text-sm">Por</span>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-muted-foreground text-sm">{currencySymbol}</span>
                      <span className="font-display text-3xl sm:text-5xl text-primary">{pricing.price}</span>
                    </div>
                  </div>

                  <a href={plan.link} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 active:scale-95">
                      COMPRAR AGORA
                    </Button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Payment Methods */}
        <div className="mt-12 sm:mt-16 text-center">
          <h3 className="text-xl sm:text-2xl font-display mb-6">Formas de Pagamento</h3>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
            {methods.map((method, index) => (
              <div key={index} className="flex flex-col items-center gap-2 transition-transform duration-300 hover:scale-110">
                <div className="bg-white rounded-xl p-3 sm:p-4 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center shadow-md">
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