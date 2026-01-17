import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const services = [
  { logo: "https://fireplaytv.com/wp-content/uploads/2025/06/NETFLIX.webp", name: "Netflix", price: "R$ 59,90" },
  { logo: "https://fireplaytv.com/wp-content/uploads/2025/06/PRIME-VIDEO.webp", name: "Prime Video", price: "R$ 25,90" },
  { logo: "https://fireplaytv.com/wp-content/uploads/2025/06/DISNEY.webp", name: "Disney+", price: "R$ 62,90" },
  { logo: "https://fireplaytv.com/wp-content/uploads/2025/06/MAX.webp", name: "Max", price: "R$ 39,90" },
  { logo: "https://fireplaytv.com/wp-content/uploads/2025/06/image-2127.webp", name: "Paramount+", price: "R$ 21,90" },
  { logo: "https://fireplaytv.com/wp-content/uploads/2025/06/GLOBOPLAY.webp", name: "Globoplay", price: "R$ 39,90" },
  { logo: "https://fireplaytv.com/wp-content/uploads/2025/06/SKY.webp", name: "Sky", price: "R$ 44,95" },
  { logo: "https://fireplaytv.com/wp-content/uploads/2025/06/COMBATE.webp", name: "Combate", price: "R$ 34,90" },
  { logo: "https://fireplaytv.com/wp-content/uploads/2025/06/TELECINE.webp", name: "Telecine", price: "R$ 29,90" },
  { logo: "https://fireplaytv.com/wp-content/uploads/2025/06/CLARO-TV.webp", name: "Claro TV", price: "R$ 89,90" },
  { logo: "https://fireplaytv.com/wp-content/uploads/2025/06/CRUNCHROLL.webp", name: "Crunchyroll", price: "R$ 25,90" },
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
            <span className="text-center font-bold text-red-500">R$ 463,95</span>
            <span className="text-right font-bold text-green-500">R$ 11,31</span>
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
