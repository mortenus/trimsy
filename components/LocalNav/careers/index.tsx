import Link from 'next/link';
import React from 'react';

import clsx from 'clsx';
import { useRouter } from 'next/router';

import styles from '../LocalNav.module.scss';

const CareersLocalNav = () => {
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
            <Link href="/careers">Careers</Link>
          </span>
          <ul className={styles[`menu-items`]}>
            <li className={styles.items}>
              <Link href="https://admin.trimsy.ca">Sign In</Link>
            </li>
            <li className={styles.items}>
              <Link href="/careers/#roles">Apply</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CareersLocalNav;
