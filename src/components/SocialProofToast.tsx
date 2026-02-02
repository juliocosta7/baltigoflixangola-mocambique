import { useEffect, useState } from "react";
import { useCountry } from "@/contexts/CountryContext";
import { Check } from "lucide-react";

const namesAngola = [
  "João", "Maria", "Pedro", "Ana", "Carlos", "Fernanda", 
  "Miguel", "Sofia", "António", "Catarina", "Manuel", "Teresa"
];

const namesMozambique = [
  "Samuel", "Graça", "Eduardo", "Márcia", "Nelson", "Fátima",
  "Paulo", "Amélia", "José", "Celina", "Ricardo", "Helena"
];

const citiesAngola = [
  "Luanda", "Benguela", "Huambo", "Lobito", "Cabinda", "Lubango"
];

const citiesMozambique = [
  "Maputo", "Beira", "Nampula", "Matola", "Quelimane", "Chimoio"
];

const plans = ["Mensal", "Trimestral", "Semestral", "Anual"];

const SocialProofToast = () => {
  const { country } = useCountry();
  const [isVisible, setIsVisible] = useState(false);
  const [isHiding, setIsHiding] = useState(false);
  const [notification, setNotification] = useState({ name: "", city: "", plan: "" });

  const names = country === "angola" ? namesAngola : namesMozambique;
  const cities = country === "angola" ? citiesAngola : citiesMozambique;

  const generateNotification = () => {
    const name = names[Math.floor(Math.random() * names.length)];
    const city = cities[Math.floor(Math.random() * cities.length)];
    const plan = plans[Math.floor(Math.random() * plans.length)];
    return { name, city, plan };
  };

  useEffect(() => {
    const showNotification = () => {
      setNotification(generateNotification());
      setIsHiding(false);
      setIsVisible(true);

      // Hide after 4 seconds
      setTimeout(() => {
        setIsHiding(true);
        setTimeout(() => {
          setIsVisible(false);
        }, 500);
      }, 4000);
    };

    // Initial delay before first notification
    const initialTimeout = setTimeout(() => {
      showNotification();
    }, 8000);

    // Show notification every 15-25 seconds
    const interval = setInterval(() => {
      showNotification();
    }, 15000 + Math.random() * 10000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [country]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-24 left-1/2 z-40 transform -translate-x-1/2 sm:left-6 sm:translate-x-0 ${
        isHiding ? "social-proof-toast hiding" : "social-proof-toast"
      }`}
    >
      <div className="flex items-center gap-3 bg-card/95 backdrop-blur-md border border-border/50 rounded-xl px-4 py-3 shadow-xl max-w-sm">
        <div className="flex-shrink-0 w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
          <Check className="w-5 h-5 text-green-500" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-foreground truncate">
            {notification.name} de {notification.city}
          </p>
          <p className="text-xs text-muted-foreground">
            acabou de adquirir o plano <span className="text-primary font-semibold">{notification.plan}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SocialProofToast;
