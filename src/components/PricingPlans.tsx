import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "mensal",
    duration: "Acesso de 1 mês",
    screens: "3 telas simultâneas",
    price: "25,90",
    installments: null,
    link: "https://pay.kambafy.com/checkout/e3df920e-4e56-4c77-baa4-9f08ca03e3fb",
    popular: false
  },
  {
    name: "trimestral",
    duration: "Acesso de 3 meses",
    screens: "3 telas simultâneas",
    price: "59,90",
    installments: "Ou 3x de R$19,66 no cartão",
    link: "https://pay.kambafy.com/checkout/e3df920e-4e56-4c77-baa4-9f08ca03e3fb",
    popular: false
  },
  {
    name: "semestral",
    duration: "Acesso de 6 meses",
    screens: "3 telas simultâneas",
    price: "89,90",
    installments: "Ou 6x de R$14,37 no cartão",
    link: "https://pay.kambafy.com/checkout/e3df920e-4e56-4c77-baa4-9f08ca03e3fb",
    popular: false
  },
  {
    name: "anual",
    duration: "Acesso de 1 ano",
    screens: "4 telas simultâneas",
    price: "129,90",
    installments: "Ou 12x de R$10,82 no cartão",
    link: "https://pay.kambafy.com/checkout/e3df920e-4e56-4c77-baa4-9f08ca03e3fb",
    popular: true
  }
];

const features = [
  "+ de 40 mil conteúdos",
  "Canais Adultos (opcional)",
  "Qualidade SD/HD/FHD/4K",
  "Assista na Smart Tv, Tablet, Smartphone, TV Box ou Computador."
];

const PricingPlans = () => {
  return (
    <section id="planos" className="py-20 bg-gradient-hero scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-4xl md:text-5xl text-center mb-4">
          Aproveite essa <span className="text-primary">oportunidade única!</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mt-12">
          {plans.map((plan, index) => (
            <div 
              key={index}
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
              
              <div className={`p-6 ${plan.popular ? 'pt-10' : ''}`}>
                <div className="text-center mb-6">
                  <span className="text-muted-foreground text-sm uppercase">PLANO</span>
                  <h3 className="font-display text-3xl mt-1">{plan.name}</h3>
                </div>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {plan.duration}
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Assista em {plan.screens}
                  </li>
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="text-center mb-6">
                  <span className="text-muted-foreground text-sm">Por</span>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-muted-foreground">R$</span>
                    <span className="font-display text-5xl text-primary">{plan.price}</span>
                  </div>
                  {plan.installments && (
                    <p className="text-xs text-muted-foreground mt-2">{plan.installments}</p>
                  )}
                </div>

                <a href={plan.link} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
                    COMPRAR AGORA
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
