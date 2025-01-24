import { useRef, useState } from 'react';

export const useTimer = (initialState = 0) => {
  const [elapsedTime, setElapsedTime] = useState(initialState);
  const [isRunning, setIsRunning] = useState(false);
  const countRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const handleStart = () => {
    const startTime = Date.now() - elapsedTime;
    countRef.current = setInterval(() => {
      setElapsedTime(Date.now() - startTime);
    }, 10);
    setIsRunning(true);
  };

  const handlePause = () => {
    if (countRef.current) {
      clearInterval(countRef.current);
      setIsRunning(false);
    }
  };

  const handleReset = () => {
    if (countRef.current) {
      clearInterval(countRef.current);
      setIsRunning(false);
      setElapsedTime(0);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}:${milliseconds < 10 ? '0' : ''}${milliseconds}`;
  };

  return {
    elapsedTime: formatTime(elapsedTime),
    isRunning,
    handleStart,
    handlePause,
    handleReset,
  };
};
