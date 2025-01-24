import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface UseTimerLogsStore {
  logs: string[];
  addLog: (log: string) => void;
  clearLogs: () => void;
}

export const useTimerLogsStore = create(
  persist<UseTimerLogsStore>(
    (set) => {
      return {
        logs: [],
        addLog: (log) => set((state) => ({ logs: [...state.logs, log] })),
        clearLogs: () => set({ logs: [] }),
      };
    },
    { name: 'timer-logs' },
  ),
);
