import { useEffect } from 'react';

import type { useTimer } from '@/hooks/use-timer';

export const useTimerInteractionController = ({
  handleStart,
  handlePause,
}: ReturnType<typeof useTimer>) => {
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        handleStart();
      } else {
        handlePause();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    handleStart();

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      handlePause();
    };
  }, [handlePause, handleStart]);
};
