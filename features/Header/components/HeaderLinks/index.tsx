import HeaderButton from '../HeaderButton';
import Link from 'next/link';
import React from 'react';

import styles from './HeaderLinks.module.scss';

const linkRows = [
  //   {
  //     id: 0,
  //     title: 'About',
  //     href: '/about',
  //   },
  {
    id: 0,
    title: 'Services',
    links: [
      {
        title: 'Web Development',
        description: 'Discover all the ways to get your presence in Web',
        href: '/services',
      },
      {
        title: 'Marketplace',
        description: 'Get a professional to help you in your IT journey',
        href: '/careers',
        target: '_blank',
      },
    ],
  },
  {
    id: 1,
    title: 'More',
    links: [
      {
        title: 'About Us',
        description: 'Get to know who we are and what we stand for.',
        href: '/about',
      },
      {
        title: 'Blog',
        description: 'Read new releases, get updates and latest news.',
        href: '/blog',
      },
    ],
  },

  //   {
  //     id: 1,
  //     title: 'Portfolio',
  //     href: '/#portfolio',
  //   },
  //   {
  //     id: 2,
  //     title: 'Blog',
  //     href: '/blog',
  //   },
];

const HeaderLinks = () => {
  return (
    <>
      {linkRows.map((obj) => {
        return (
          <div key={obj.id} className={styles.temp}>
            {/* {obj.links ? ( */}
            <HeaderButton links={obj.links ? obj.links : []}>{obj.title}</HeaderButton>
            {/* ) : (
              <Link href={obj.href ? obj.href : ''}>
                <li>{obj.title}</li>
              </Link>
            )} */}
          </div>
        );
      })}
    </>
  );
};

export default React.memo(HeaderLinks);
