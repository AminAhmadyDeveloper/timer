import { Logs } from '@/pages/main/components/logs';
import { Timer } from '@/pages/main/components/timer';

export const MainPage = () => {
  return (
    <main className="grid min-h-screen grid-cols-1 gap-6">
      <Timer />
      <Logs />
    </main>
  );
};
