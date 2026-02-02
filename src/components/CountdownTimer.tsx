import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 2, hours: 15, minutes: 30, seconds: 0 });

  useEffect(() => {
    // Set end date to 3 days from now (stored in localStorage to persist)
    const getEndDate = () => {
      const stored = localStorage.getItem("baltigoflix-promo-end");
      if (stored) {
        return new Date(stored);
      }
      const endDate = new Date();
      endDate.setDate(endDate.getDate() + 3);
      localStorage.setItem("baltigoflix-promo-end", endDate.toISOString());
      return endDate;
    };

    const endDate = getEndDate();

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = endDate.getTime() - now.getTime();

      if (difference <= 0) {
        // Reset the timer when it expires
        localStorage.removeItem("baltigoflix-promo-end");
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-background/80 backdrop-blur-sm border border-primary/30 rounded-lg px-2 sm:px-3 py-1 sm:py-2 min-w-[40px] sm:min-w-[50px]">
        <span className="font-display text-xl sm:text-2xl md:text-3xl text-primary">
          {value.toString().padStart(2, "0")}
        </span>
      </div>
      <span className="text-[10px] sm:text-xs text-muted-foreground mt-1 uppercase tracking-wider">
        {label}
      </span>
    </div>
  );

  return (
    <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border border-primary/30 rounded-2xl p-4 sm:p-6 mb-8 sm:mb-12">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
        <div className="flex items-center gap-2 text-primary">
          <Clock className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
          <span className="font-display text-lg sm:text-xl md:text-2xl uppercase">
            Oferta por tempo limitado!
          </span>
        </div>
        
        <div className="flex items-center gap-2 sm:gap-3">
          <TimeBlock value={timeLeft.days} label="Dias" />
          <span className="text-primary text-xl font-bold mt-[-16px]">:</span>
          <TimeBlock value={timeLeft.hours} label="Horas" />
          <span className="text-primary text-xl font-bold mt-[-16px]">:</span>
          <TimeBlock value={timeLeft.minutes} label="Min" />
          <span className="text-primary text-xl font-bold mt-[-16px]">:</span>
          <TimeBlock value={timeLeft.seconds} label="Seg" />
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
