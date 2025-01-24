import { Button } from '@/components/ui/button';
import { For } from '@/components/utils/for';
import { Show } from '@/components/utils/show';
import { useTimerLogsStore } from '@/store/use-timer-logs-store';

export const Logs = () => {
  const { clearLogs, logs } = useTimerLogsStore();

  return (
    <div className="container flex flex-col items-center justify-center gap-y-6 place-self-start">
      <h5 className="text-xl font-bold">Logged Times:</h5>
      <Show when={logs.length > 0}>
        <Button onClick={clearLogs} variant="destructive">
          Delete Logs
        </Button>
      </Show>
      <ul className="w-full">
        <For each={logs}>
          {(log, index) => (
            <li
              className="text-center text-lg text-muted-foreground"
              key={index}
            >
              {log}
            </li>
          )}
        </For>
      </ul>
    </div>
  );
};
