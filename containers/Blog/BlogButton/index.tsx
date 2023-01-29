import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

import styles from './BlogButton.module.scss';

interface TButton {
  children: React.ReactNode;
  type?: string;
  style?: React.CSSProperties;
  selected?: boolean;
  onClick?: Function;
}

const Button = ({ children, type, onClick, style, selected }: TButton) => {
  const stylying = clsx(
    styles.wrapper,
    { [styles.nav]: type === 'nav' },
    { [styles.number]: type === 'number' },
    { [styles.selected]: selected },
  );

  return (
    <>
      <div style={style && style} className={stylying}>
        {children}
      </div>
    </>
  );
};

export default React.memo(Button);
