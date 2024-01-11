import Link from 'next/link';
import React from 'react';

import clsx from 'clsx';
import { useRouter } from 'next/router';

import styles from '../LocalNav.module.scss';
import Button from 'components/Button';

const routes = [
  {
    title: 'Profile',
    pathname: 'https://admin.trimsy.ca/auth/signin',
  },
  {
    title: 'FAQ',
    pathname: '/partners/faq',
  },
];

const MarketplaceLocalNav = () => {
  const [searchVisible, setSearchVisible] = React.useState(false);

  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (searchVisible) {
      inputRef.current && inputRef.current.focus();
    }
  }, [searchVisible]);

  const handleSearchVisible = () => {
    setSearchVisible(!searchVisible);
  };

  const [searchQuery, setSearchQuery] = React.useState('');
  const router = useRouter();

  const handleSearch = (event: any) => {
    event.preventDefault();
    router.push(`/blog/search?q=${searchQuery}`);
  };

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      handleSearch(event);
    }
  };

  React.useEffect(() => {
    console.log(router.pathname, router.query.q);
    if (router.pathname === '/blog/search' && router.query.q) {
      setSearchQuery(router.query.q.toString());
    } else {
      setSearchQuery('');
      setSearchVisible(false);
    }
  }, [router.pathname, router.query.q]);

  return (
    <div className={styles[`intro-alternative`]}>
      <div className="global-wrapper--small">
        <div className={styles.content}>
          <span className={styles.headline}>
            <Link href="/partners">Partners</Link>
          </span>
          <ul className={styles[`menu-items`]}>
            {routes.map((item) => (
              <li className={styles.items}>
                <Link
                  className={clsx(styles[`menu-link`], {
                    [styles.active]: item.pathname === router.pathname,
                  })}
                  href={item.pathname}>
                  {item.title}
                </Link>
              </li>
            ))}
            <Button size="supersmall" to={'/partners/signup'}>
              Sign Up
            </Button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceLocalNav;
