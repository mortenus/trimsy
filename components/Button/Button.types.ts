type TButtonBase = {
  children: React.ReactNode;
  type?: string;
  disabled?: boolean;
  status?: 'success' | 'fail';
  style?: React.CSSProperties;
  size?: 'small' | 'medium' | 'large';
  color?: 'black' | 'white';
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
