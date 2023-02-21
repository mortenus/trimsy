import HeaderButton from 'components/HeaderButton';
import Link from 'next/link';
import React from 'react';

const linkRows = [
  {
    id: 0,
    title: 'Services',
    links: [
      {
        title: 'Web Development',
        description: 'Discover all the ways to get your presence in Web',
        href: '/',
      },
      {
        title: 'Get Hired',
        description: 'Get a professional to help you in your IT journey',
        href: '/careers',
      },
    ],
  },
  //   {
  //     id: 1,
  //     title: 'Portfolio',
  //     href: '/#portfolio',
  //   },
  {
    id: 1,
    title: 'Blog',
    href: '/blog',
  },
];

const HeaderLinks = () => {
  return (
    <>
      {linkRows.map((obj) => {
        return obj.links ? (
          <HeaderButton key={obj.id} links={obj.links ? obj.links : []}>
            {obj.title}
          </HeaderButton>
        ) : (
          <Link key={obj.id} href={obj.href ? obj.href : ''}>
            <li>{obj.title}</li>
          </Link>
        );
      })}
    </>
  );
};

export default React.memo(HeaderLinks);
