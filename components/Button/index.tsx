import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

import styles from './Button.module.scss';

interface TButtonBase {
  children: React.ReactNode;
  type?: string;
  //   className?: string;
  disabled?: boolean;
  status?: 'success' | 'fail';
  style?: React.CSSProperties;
  size?: 'small' | 'medium' | 'large';
  color?: 'black' | 'white';
}

interface TButtonOnClick extends TButtonBase {
  onClick: Function;
}

interface TButtonLink extends TButtonBase {
  to: string;
}

type TButton = TButtonOnClick | TButtonLink;

const Button = ({
  children,
  type,
  status,
  //   className = '',
  // @ts-ignore
  to,
  // @ts-ignore
  onClick,
  disabled,
  style,
  size,
  color,
}: TButton) => {
  const stylying = clsx(
    styles.wrapper,
    { [styles.disabled]: disabled },
    // { [styles[className]]: className },
    { [styles.black]: color === 'black' },
    { [styles.white]: color === 'white' },
    { [styles.nav]: type === 'nav' },
    { [styles.search]: type === 'search' },
    { [styles.modern]: type === 'modern' },
    { [styles.submit]: type === 'submit' },
    { [styles.success]: status === 'success' },
    { [styles.fail]: status === 'fail' },
    { [styles.small]: size === 'small' },
    { [styles.medium]: size === 'medium' },
    { [styles.large]: size === 'large' },
  );

  return (
    <>
      {onClick !== undefined ? (
        <div style={style && style} onClick={onClick} className={stylying}>
          {children}
        </div>
      ) : (
        <Link href={to ? to : '#'}>
          <div style={style && style} className={stylying}>
            {children}
          </div>
        </Link>
      )}
    </>
  );
};

export default React.memo(Button);
