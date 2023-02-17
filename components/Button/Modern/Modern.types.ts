interface TButtonBase {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

interface TButtonOnClick extends TButtonBase {
  onClick: Function;
}

interface TButtonLink extends TButtonBase {
  to: string;
}

type TModern = TButtonOnClick | TButtonLink;

export default TModern;
