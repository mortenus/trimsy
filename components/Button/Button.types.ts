import { HTMLAttributes } from 'react';

type TButtonBase = {
  children: React.ReactNode;
  type?: string;
  disabled?: boolean | 'black' | 'white' | 'black-loading' | 'white-loading';
  status?: 'success' | 'fail';
  style?: React.CSSProperties;
  size?: 'small' | 'medium' | 'large' | 'supersmall';
  color?: 'black' | 'white' | 'black-inverse' | 'transparent';
  tabIndex?: number;
  onKeyDown?: React.KeyboardEventHandler;
  className?: HTMLAttributes<HTMLDivElement> | string;
  target?: '_blank';
};

interface TButtonOnClick extends TButtonBase {
  onClick: () => void | Function;
  to?: never;
}

interface TButtonLink extends TButtonBase {
  to: string;
  onClick?: never;
}

type TButton = TButtonOnClick | TButtonLink;

export default TButton;
