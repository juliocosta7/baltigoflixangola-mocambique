import { Monitor, Smartphone, Tablet, Tv, Box } from "lucide-react";

const devices = [
  { icon: Tv, name: "Smart TV", description: "Samsung, LG, Sony e outras" },
  { icon: Box, name: "TV Box", description: "Android TV, Mi Box, Fire TV" },
  { icon: Smartphone, name: "Telemóvel", description: "Android e iPhone" },
  { icon: Monitor, name: "Computador", description: "Windows e Mac" },
  { icon: Tablet, name: "Tablet", description: "iPad e Android" },
];

const DevicesSection = () => {
  return (
    <section className="py-20 bg-muted/30 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl text-gradient-fire mb-4">
            FUNCIONA EM TODOS OS DISPOSITIVOS
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Assiste onde quiseres, quando quiseres. Compatível com os aparelhos que já tens em casa.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {devices.map((device, index) => (
            <div 
              key={index}
              className="flex flex-col items-center group"
            >
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-gradient-card border border-border/50 flex items-center justify-center mb-4 group-hover:border-primary/50 group-hover:shadow-fire transition-all duration-300">
                <device.icon className="w-12 h-12 md:w-14 md:h-14 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-1">{device.name}</h3>
              <p className="text-sm text-muted-foreground text-center">{device.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-primary font-medium text-lg">
            📱 Instalação simples e rápida • Suporte completo incluído
          </p>
        </div>
      </div>
    </section>
  );
};

export default DevicesSection;
