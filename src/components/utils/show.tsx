import type { FC, PropsWithChildren } from 'react';

interface ShowProps extends PropsWithChildren {
  when: boolean;
}

export const Show: FC<ShowProps> = ({ when, children }) => {
  return when ? children : null;
};
