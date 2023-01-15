import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

import styles from './Button.module.scss';

interface TButtonBase {
  children: React.ReactNode;
  black?: boolean;
  type?: string;
  //   className?: string;
  disabled?: boolean;
  status?: 'success' | 'fail';
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
  black,
  //   className = '',
  // @ts-ignore
  to,
  // @ts-ignore
  onClick,
  disabled,
}: TButton) => {
  const stylying = clsx(
    styles.wrapper,
    { [styles.disabled]: disabled },
    // { [styles[className]]: className },
    { [styles.black]: black },
    { [styles.nav]: type === 'nav' },
    { [styles.submit]: type === 'submit' },
    { [styles.success]: status === 'success' },
    { [styles.fail]: status === 'fail' },
  );

  return (
    <>
      {onClick !== undefined ? (
        <div onClick={onClick} className={stylying}>
          {children}
        </div>
      ) : (
        <Link href={to ? to : '#'}>
          <div className={stylying}>{children}</div>
        </Link>
      )}
    </>
  );
};

export default React.memo(Button);
