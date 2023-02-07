import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

import styles from './Button.module.scss';

type THeaderButton = {
  children: React.ReactNode;
  href: string;
};

const HeaderButton = ({ children, href }: THeaderButton) => {
  const [open, setOpen] = React.useState(false);

  const handleOpenChange = () => setOpen(!open);

  return (
    <>
      <a className={styles.iten}>
        <li onClick={handleOpenChange}>
          {children}
          {open ? (
            <svg
              style={{ rotate: '180deg' }}
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              viewBox="6 6 12 12">
              <path d="M7 9.79a.5.5 0 0 1 .854-.353L12 13.584l4.146-4.147a.5.5 0 1 1 .708.708L12 14.998l-4.854-4.853A.5.5 0 0 1 7 9.79Z"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="12" viewBox="6 6 12 12">
              <path d="M7 9.79a.5.5 0 0 1 .854-.353L12 13.584l4.146-4.147a.5.5 0 1 1 .708.708L12 14.998l-4.854-4.853A.5.5 0 0 1 7 9.79Z"></path>
            </svg>
          )}
        </li>
      </a>

      <div className={clsx(styles.popup, { [styles.visible]: open })}>
        <div className={styles.text}>
          <Link className={styles.item} href="/#contact" onClick={handleOpenChange}>
            <h4>Web Development</h4>
            <p>Discover all the ways to get your presence in Web</p>
          </Link>
          <Link className={styles.item} href="/careers" onClick={handleOpenChange}>
            <h4>Get Hired</h4>
            <p>Get a professional to help you in your IT journey</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeaderButton;
