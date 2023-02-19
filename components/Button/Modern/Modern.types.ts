interface TButtonBase {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

interface TButtonOnClick extends TButtonBase {
  onClick: Function;
  to?: never;
}

interface TButtonLink extends TButtonBase {
  to: string;
  onClick?: never;
}

type TModern = TButtonOnClick | TButtonLink;

export default TModern;
