import React from 'react';
import clsx from 'clsx';

import Link from 'next/link';

import styles from './HamburgerMenu.module.scss';
import THamburgerMenu from './HamburgerMenu.types';

import HamburgerExtendedButton from '../HamburgerExtendedButton';

import Button from 'components/Button';

const HamburgerMenu = ({
  links,
  handleFormChange,
  hamburgerActive,
  handleHamburgerChange,
}: THamburgerMenu) => {
  const handleContactUsPressed = () => {
    handleHamburgerChange();
    handleFormChange();
  };

  return (
    <div className={clsx(styles.popup, { [styles.visible]: hamburgerActive })}>
      <ul className={styles.text}>
        {links.map((obj) => {
          return obj.links ? (
            <HamburgerExtendedButton
              key={obj.title}
              links={obj.links ? obj.links : []}
              onClick={handleHamburgerChange}>
              {obj.title}
            </HamburgerExtendedButton>
          ) : (
            <li className={styles.item}>
              <Link key={obj.id} href={obj.href} onClick={handleHamburgerChange}>
                <h4 className={styles.title}>{obj.title}</h4>
              </Link>
            </li>
          );
        })}
      </ul>
      {/* <Button type="nav" onClick={handleContactUsPressed}>
        Contact us
      </Button> */}
    </div>
  );
};

export default React.memo(HamburgerMenu);
