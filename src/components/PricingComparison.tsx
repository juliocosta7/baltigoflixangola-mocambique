import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useCountry, prices } from "@/contexts/CountryContext";

const serviceNames = [
  { logo: "https://fireplaytv.com/wp-content/uploads/2025/06/NETFLIX.webp", name: "Netflix" },
  { logo: "https://fireplaytv.com/wp-content/uploads/2025/06/PRIME-VIDEO.webp", name: "Prime Video" },
  { logo: "https://fireplaytv.com/wp-content/uploads/2025/06/DISNEY.webp", name: "Disney+" },
  { logo: "https://fireplaytv.com/wp-content/uploads/2025/06/MAX.webp", name: "Max" },
  { logo: "https://fireplaytv.com/wp-content/uploads/2025/06/image-2127.webp", name: "Paramount+" },
  { logo: "https://fireplaytv.com/wp-content/uploads/2025/06/GLOBOPLAY.webp", name: "Globoplay" },
  { logo: "https://fireplaytv.com/wp-content/uploads/2025/06/SKY.webp", name: "Sky" },
  { logo: "https://fireplaytv.com/wp-content/uploads/2025/06/COMBATE.webp", name: "Combate" },
  { logo: "https://fireplaytv.com/wp-content/uploads/2025/06/TELECINE.webp", name: "Telecine" },
  { logo: "https://fireplaytv.com/wp-content/uploads/2025/06/CLARO-TV.webp", name: "Claro TV" },
  { logo: "https://fireplaytv.com/wp-content/uploads/2025/06/CRUNCHROLL.webp", name: "Crunchyroll" },
];

const PricingComparison = () => {
  const { country, currencySymbol } = useCountry();
  const countryPrices = prices[country];

  return (
    <section className="py-12 sm:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-center mb-4">
          Quanto gastaria com outros aplicativos?
        </h2>
        <p className="text-center text-muted-foreground mb-8 sm:mb-12 text-sm sm:text-base px-4">
          Compare o custo mensal do BaltigoFlix com a soma de todas as outras plataformas de streaming.
        </p>

        <div className="max-w-4xl mx-auto">
          {/* Header - Hidden on mobile */}
          <div className="hidden sm:grid grid-cols-3 gap-4 mb-4 px-4">
            <span className="text-muted-foreground text-sm">Serviço</span>
            <span className="text-muted-foreground text-sm text-center">Preço</span>
            <span className="text-muted-foreground text-sm text-right">Incluído na BaltigoFlix</span>
          </div>

          {/* Services */}
          <div className="space-y-2">
            {serviceNames.map((service, index) => (
              <div 
                key={index}
                className="grid grid-cols-3 gap-2 sm:gap-4 items-center bg-gradient-card p-3 sm:p-4 rounded-lg border border-border/30"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <img src={service.logo} alt={service.name} className="h-4 sm:h-6 w-auto" />
                </div>
                <span className="text-center text-muted-foreground text-xs sm:text-base">
                  {currencySymbol} {countryPrices.services[index].price}
                </span>
                <div className="flex justify-end">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                </div>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 items-center bg-primary/10 p-3 sm:p-4 rounded-lg border border-primary/30 mt-4">
            <span className="font-bold text-xs sm:text-base">Total Mensal</span>
            <span className="text-center font-bold text-red-500 text-xs sm:text-base">
              {currencySymbol} {countryPrices.totalOthers}
            </span>
            <span className="text-right font-bold text-green-500 text-xs sm:text-base">
              {currencySymbol} {countryPrices.totalBaltigoflix}
            </span>
          </div>
        </div>

        {/* Comparison highlight */}
        <div className="max-w-3xl mx-auto mt-8 sm:mt-12 text-center px-4">
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl mb-4">
            Ao todo pagaria <span className="text-red-500">{countryPrices.comparison.othersTotal}</span> por mês
          </h3>
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-primary mb-6 sm:mb-8">
            Com o BaltigoFlix paga apenas {countryPrices.comparison.baltigoflixTotal} para o ano inteiro!
          </h3>
          <a href="#planos">
            <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base sm:text-lg px-8 sm:px-10 py-5 sm:py-6">
              COMPRAR AGORA
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingComparison;
