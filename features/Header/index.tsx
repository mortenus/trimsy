import React from 'react';
import { useRouter } from 'next/router';

import styles from './Header.module.scss';

import { Button } from 'components';
import Logo from 'components/Logo';

import { Hamburger, HeaderLinks } from './components';
import { useInnerHeightResize } from 'hooks/useInnerHeightResize';
import clsx from 'clsx';
import { useCheckCurrentDepartment } from 'hooks/useCheckCurrentDepartment';
import {
  AssistantLocalNav,
  BlogLocalNav,
  CareersLocalNav,
  MarketplaceLocalNav,
  PartnersLocalNav,
} from 'components/LocalNav';

// type THeaderBase = {};

// interface THeaderWithForm extends THeaderBase {
//   handleFormChange: Function;
// }

// interface THeaderClean extends THeaderBase {
//   clean: boolean;
// }

// type THeader = THeaderWithForm | THeaderClean;

const possibleDepartments = [
  {
    name: undefined,
    link: '/',
  },
  {
    name: 'blog',
    link: '/blog',
  },
  {
    name: 'marketplace',
    link: '/marketplace',
  },
  {
    name: 'partners',
    link: '/partners',
  },
  {
    name: 'careers',
    link: '/careers',
  },
  {
    name: 'ai-assistant',
    link: '/ai-assistant',
  },
];

type THeader = {
  handleFormChange: () => void;
  handleKeyDownOverflowChange: (e: any) => void;
};

const Header = ({ handleFormChange, handleKeyDownOverflowChange }: THeader) => {
  const router = useRouter();

  const handleCleanNav = () => router.pathname === '/stands-with-ukraine';
  const handleOverflowForm = () => router.pathname === '/';

  useInnerHeightResize();

  const { currentVisibleDepartment } = useCheckCurrentDepartment({ possibleDepartments });

  return (
    <>
      <header
        className={clsx(styles.wrapper, {
          [styles.disablePosition]: currentVisibleDepartment.name,
          [styles.disableBorder]: currentVisibleDepartment.name,
        })}>
        <div className={styles.container}>
          <nav className={styles.nav}>
            <Logo />

            <div className={styles.wrap}>
              {handleCleanNav() ? (
                <></>
              ) : (
                <>
                  <ul className={styles.items}>
                    <HeaderLinks />
                  </ul>
                  {handleOverflowForm()
                    ? ''
                    : // <Button
                      //   type="nav"
                      //   onClick={handleFormChange}
                      //   onKeyDown={handleKeyDownOverflowChange}>
                      //   Contact us
                      // </Button>
                      ''}
                </>
              )}
            </div>
            <Hamburger handleFormChange={handleFormChange} />
          </nav>
        </div>
      </header>
      {currentVisibleDepartment.name === 'blog' && <BlogLocalNav />}
      {currentVisibleDepartment.name === 'marketplace' && <MarketplaceLocalNav />}
      {currentVisibleDepartment.name === 'careers' && <CareersLocalNav />}
      {currentVisibleDepartment.name === 'partners' && <PartnersLocalNav />}
      {currentVisibleDepartment.name === 'ai-assistant' && <AssistantLocalNav />}
    </>
  );
};

export default React.memo(Header);
