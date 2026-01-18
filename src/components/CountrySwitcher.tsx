import { useCountry } from "@/contexts/CountryContext";

const CountrySwitcher = () => {
  const { country, setCountry } = useCountry();

  return (
    <div className="flex items-center gap-2 bg-background/50 backdrop-blur-sm rounded-full p-1 border border-border/50">
      <button
        onClick={() => setCountry('angola')}
        className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 ${
          country === 'angola' 
            ? 'bg-primary text-primary-foreground' 
            : 'hover:bg-muted/50 text-muted-foreground'
        }`}
      >
        <span className="text-lg">🇦🇴</span>
        <span className="text-sm font-medium hidden sm:inline">Angola</span>
      </button>
      <button
        onClick={() => setCountry('mozambique')}
        className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 ${
          country === 'mozambique' 
            ? 'bg-primary text-primary-foreground' 
            : 'hover:bg-muted/50 text-muted-foreground'
        }`}
      >
        <span className="text-lg">🇲🇿</span>
        <span className="text-sm font-medium hidden sm:inline">Moçambique</span>
      </button>
    </div>
  );
};

export default CountrySwitcher;
