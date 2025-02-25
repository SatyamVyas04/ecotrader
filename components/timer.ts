import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const useCountdownTimer = (endDate: string) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isTimerExpired, setIsTimerExpired] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = (): TimeLeft => {
      const targetDate = new Date(endDate);
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        setIsTimerExpired(true);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    // Set up interval to update countdown
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const newTimeLeft = { ...prev };

        if (newTimeLeft.seconds > 0) {
          newTimeLeft.seconds -= 1;
        } else if (newTimeLeft.minutes > 0) {
          newTimeLeft.minutes -= 1;
          newTimeLeft.seconds = 59;
        } else if (newTimeLeft.hours > 0) {
          newTimeLeft.hours -= 1;
          newTimeLeft.minutes = 59;
          newTimeLeft.seconds = 59;
        } else if (newTimeLeft.days > 0) {
          newTimeLeft.days -= 1;
          newTimeLeft.hours = 23;
          newTimeLeft.minutes = 59;
          newTimeLeft.seconds = 59;
        } else {
          setIsTimerExpired(true);
        }

        return newTimeLeft;
      });
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, [endDate]);

  return {
    timeLeft,
    isTimerExpired,
  };
};
