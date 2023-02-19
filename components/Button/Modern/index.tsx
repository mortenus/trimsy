import Link from 'next/link';
import React from 'react';

import styles from './Modern.module.scss';

import TModern from './Modern.types';

const ModernButton = ({ children, style, to }: TModern) => {
  return (
    <Link href={to ? to : ''}>
      <div className={styles.wrapper}>
        <div className={styles.button} style={style}>
          {children}
        </div>
        <svg
          className={styles.arrow}
          width="40"
          height="30"
          viewBox="0 0 40 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M25 30L21.5 26.375L30.375 17.5H0V12.5H30.375L21.5 3.625L25 0L40 15L25 30Z"
            fill="white"
          />
        </svg>
      </div>
    </Link>
  );
};

export default React.memo(ModernButton);
