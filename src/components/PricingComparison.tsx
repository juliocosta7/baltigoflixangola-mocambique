import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const services = [
  { logo: "https://fireplaytv.com/wp-content/uploads/2025/06/NETFLIX.webp", name: "Netflix", price: "KZ 9024,88 | MZ " },
  { logo: "https://fireplaytv.com/wp-content/uploads/2025/06/PRIME-VIDEO.webp", name: "Prime Video", price: "4625 KZ | MZ " },
  { logo: "https://fireplaytv.com/wp-content/uploads/2025/06/DISNEY.webp", name: "Disney+", price: "KZ 10730,91 | MZ " },
  { logo: "https://fireplaytv.com/wp-content/uploads/2025/06/MAX.webp", name: "Max", price: "KZ 6807,05 | MZ " },
  { logo: "https://fireplaytv.com/wp-content/uploads/2025/06/image-2127.webp", name: "Paramount+", price: "KZ 3736,20 | MZ " },
  { logo: "https://fireplaytv.com/wp-content/uploads/2025/06/GLOBOPLAY.webp", name: "Globoplay", price: "KZ 6807,05 | MZ " },
  { logo: "https://fireplaytv.com/wp-content/uploads/2025/06/SKY.webp", name: "Sky", price: "KZ 7668,59 | MZ " },
  { logo: "https://fireplaytv.com/wp-content/uploads/2025/06/COMBATE.webp", name: "Combate", price: "KZ 5954,03 | MZ " },
  { logo: "https://fireplaytv.com/wp-content/uploads/2025/06/TELECINE.webp", name: "Telecine", price: "KZ 5101,02 | MZ " },
  { logo: "https://fireplaytv.com/wp-content/uploads/2025/06/CLARO-TV.webp", name: "Claro TV", price: "KZ 15337,18 | MZ " },
  { logo: "https://fireplaytv.com/wp-content/uploads/2025/06/CRUNCHROLL.webp", name: "Crunchyroll", price: "KZ 4418,61 | MZ " },
];

const PricingComparison = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-4xl md:text-5xl text-center mb-4">
          Quanto gastaria com outros aplicativos?
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Compare o custo mensal do BaltigoFlix com a soma de todas as outras plataformas de streaming.
        </p>

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="grid grid-cols-3 gap-4 mb-4 px-4">
            <span className="text-muted-foreground text-sm">Serviço</span>
            <span className="text-muted-foreground text-sm text-center">Preço</span>
            <span className="text-muted-foreground text-sm text-right">Incluído na BaltigoFlix</span>
          </div>

          {/* Services */}
          <div className="space-y-2">
            {services.map((service, index) => (
              <div 
                key={index}
                className="grid grid-cols-3 gap-4 items-center bg-gradient-card p-4 rounded-lg border border-border/30"
              >
                <div className="flex items-center gap-3">
                  <img src={service.logo} alt={service.name} className="h-6 w-auto" />
                </div>
                <span className="text-center text-muted-foreground">{service.price}</span>
                <div className="flex justify-end">
                  <Check className="w-5 h-5 text-green-500" />
                </div>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="grid grid-cols-3 gap-4 items-center bg-primary/10 p-4 rounded-lg border border-primary/30 mt-4">
            <span className="font-bold">Total Mensal</span>
            <span className="text-center font-bold text-red-500">KZ 79151,13 | </span>
            <span className="text-right font-bold text-green-500">KZ 1929,52</span>
          </div>
        </div>

        {/* Comparison highlight */}
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <h3 className="font-display text-3xl md:text-4xl mb-4">
            Ao todo você pagaria <span className="text-red-500">R$ 463,95</span> por mês
          </h3>
          <h3 className="font-display text-3xl md:text-4xl text-primary mb-8">
            Já com o BaltigoFlix você pagará apenas R$ 129,90 para o ano inteiro!!
          </h3>
          <a href="#planos">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-10 py-6">
              ECONOMIZE AGORA COM A BALTIGOFLIX
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingComparison;
