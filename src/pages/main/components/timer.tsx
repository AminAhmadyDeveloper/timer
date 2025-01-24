import { type FC } from 'react';

import { Button } from '@/components/ui/button';
import { Switcher } from '@/components/utils/switcher';
import { useTimer } from '@/hooks/use-timer';
import { useTimerInteractionController } from '@/pages/main/hooks/use-timer-interaction-controller';
import { useTimerLogsStore } from '@/store/use-timer-logs-store';

export const Timer: FC = () => {
  const timer = useTimer();
  const { addLog } = useTimerLogsStore();
  useTimerInteractionController(timer);

  return (
    <div className="container flex flex-col items-center justify-center gap-y-6 place-self-end">
      <h1 className="text-5xl font-bold xl:text-7xl">{timer.elapsedTime}</h1>
      <div className="grid w-full max-w-xl grid-cols-1 gap-3 md:grid-cols-3">
        <Switcher selectSecondChild={timer.isRunning}>
          <Button size="lg" onClick={timer.handleStart}>
            Start
          </Button>
          <Button size="lg" onClick={timer.handlePause}>
            Pause
          </Button>
        </Switcher>
        <Button size="lg" onClick={timer.handleReset}>
          Reset
        </Button>
        <Button size="lg" onClick={() => addLog(timer.elapsedTime)}>
          LogTime
        </Button>
      </div>
    </div>
  );
};
