import clsx from 'clsx';
import useHideOnOutsideClick from 'hooks/useHideOnOutsideClick';
import Link from 'next/link';
import React from 'react';

import styles from './Button.module.scss';

type THeaderButton = {
  children: React.ReactNode;
  links: {
    title: string;
    description: string;
    href: string;
  }[];
};

const HeaderButton = ({ children, links }: THeaderButton) => {
  const [open, setOpen] = React.useState(false);

  const handleOpenChange = () => setOpen(!open);

  const ref = React.useRef(null);
  const toNotCloseRef = React.useRef(null);

  useHideOnOutsideClick(open, handleOpenChange, ref, toNotCloseRef);

  return (
    <>
      <a className={styles.iten} ref={toNotCloseRef}>
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
        <div className={styles.text} ref={ref}>
          {links.map((obj) => (
            <Link key={obj.href} className={styles.item} href={obj.href} onClick={handleOpenChange}>
              <h4>{obj.title}</h4>
              <p>{obj.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default HeaderButton;
