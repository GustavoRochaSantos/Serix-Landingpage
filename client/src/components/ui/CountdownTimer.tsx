import { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="grid grid-cols-4 gap-4 mb-10">
      <div className="countdown-item">
        <div className="text-3xl md:text-5xl font-bold text-primary">
          {String(timeLeft.days).padStart(2, '0')}
        </div>
        <div className="text-sm uppercase text-neutral-500 dark:text-neutral-400 mt-2">
          Dias
        </div>
      </div>
      
      <div className="countdown-item">
        <div className="text-3xl md:text-5xl font-bold text-primary">
          {String(timeLeft.hours).padStart(2, '0')}
        </div>
        <div className="text-sm uppercase text-neutral-500 dark:text-neutral-400 mt-2">
          Horas
        </div>
      </div>
      
      <div className="countdown-item">
        <div className="text-3xl md:text-5xl font-bold text-primary">
          {String(timeLeft.minutes).padStart(2, '0')}
        </div>
        <div className="text-sm uppercase text-neutral-500 dark:text-neutral-400 mt-2">
          Minutos
        </div>
      </div>
      
      <div className="countdown-item">
        <div className="text-3xl md:text-5xl font-bold text-primary">
          {String(timeLeft.seconds).padStart(2, '0')}
        </div>
        <div className="text-sm uppercase text-neutral-500 dark:text-neutral-400 mt-2">
          Segundos
        </div>
      </div>
    </div>
  );
}
