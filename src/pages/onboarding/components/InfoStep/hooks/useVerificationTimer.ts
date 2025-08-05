import { useEffect, useState } from 'react';

export const useVerificationTimer = (initialSeconds: number = 300) => {
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(initialSeconds);

  const startTimer = () => {
    setSeconds(initialSeconds);
    setIsRunning(true);
  };

  useEffect(() => {
    if (!isRunning) return;

    const countdown = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(countdown);
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [isRunning, initialSeconds]);

  const formatTime = (s: number) => {
    const m = String(Math.floor(s / 60)).padStart(2, '0');
    const sec = String(s % 60).padStart(2, '0');
    return `${m}:${sec}`;
  };

  return {
    isRunning,
    seconds,
    formattedTime: formatTime(seconds),
    startTimer,
  };
};
