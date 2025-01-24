import type {
  DetailedHTMLProps,
  Dispatch,
  HTMLAttributes,
  SVGProps,
  SetStateAction,
} from 'react';
import type React from 'react';

import type { IconProps } from '@/components/ui/icon';

declare global {
  export type ReactDivElement = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;

  export type ReactTableElement = DetailedHTMLProps<
    HTMLAttributes<HTMLTableElement>,
    HTMLTableElement
  >;

  export type ReactHeaderElement = DetailedHTMLProps<
    HTMLAttributes<HTMLElement>,
    HTMLElement
  >;

  export type ReactHtmlElement = DetailedHTMLProps<
    HTMLAttributes<HTMLElement>,
    HTMLElement
  >;

  export type ReactInputElement = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > &
    React.JSX.IntrinsicAttributes & { icon?: IconProps['icon'] };

  export type DispatchState<GType> = Dispatch<SetStateAction<GType>>;

  export type ReactSVGElement = SVGProps<SVGSVGElement>;
}
