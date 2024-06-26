import HeaderButton from '../HeaderButton';
import Link from 'next/link';
import React from 'react';

import styles from './HeaderLinks.module.scss';

const linkRows = [
  {
    id: 0,
    title: 'Products',
    links: [
      {
        title: 'Web Development',
        description: 'Discover your presence in Web the way you want.',
        href: '/development',
      },
      {
        title: 'Marketplace',
        description:
          'Unique resume. Inspiring Cover Letter. Careers opportunities, and more, all powered by AI.',
        href: '/marketplace',
      },
      {
        title: 'AI Assistant',
        description: 'Precision is power, and power begets progress.',
        href: '/ai-assistant',
      },
    ],
    additional: [
      {
        header: 'More from Trimsy',
        links: [
          //   {
          //     title: 'Choose the Website',
          //     href: '/development/services',
          //   },
          {
            title: 'Blog',
            href: '/blog',
          },
          {
            title: 'Partners Program',
            href: '/partners',
          },
        ],
      },
    ],
  },
  {
    id: 1,
    title: 'Discover',
    links: [
      {
        title: 'About',
        description: 'Learn more about our company and our mission to redefine the industry',
        href: '/about',
      },
      {
        title: 'Careers',
        description:
          'Explore exciting opportunities to join our team and grow your career with us.',
        href: '/careers',
      },
      {
        title: 'Partners Program',
        description:
          'Discover how you can become a valued partner and collaborate with us for mutual success.',
        href: '/partners',
      },
    ],
    additional: [
      {
        header: 'More from Trimsy',
        links: [
          //   {
          //     title: 'Choose the Website',
          //     href: '/development/services',
          //   },
          {
            title: 'Blog',
            href: '/blog',
          },
        ],
      },
    ],
  },

  //   {
  //     id: 1,
  //     title: 'News',
  //     href: '/blog',
  //   },
  //   {
  //     id: 1,
  //     title: 'Careers',
  //     links: [
  //       {
  //         title: 'Career Development',
  //         description:
  //           'Unique resume. Inspiring Cover Letter. Careers opportunities. Quality Personal Branding.',
  //         href: '/careers',
  //       },
  //     ],
  //     additional: [
  //       {
  //         header: 'More from Careers',
  //         links: [
  //           {
  //             title: 'Blog',
  //             href: '/blog',
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     id: 0,
  //     title: 'Services',
  //     links: [
  //       {
  //         title: 'Web Development',
  //         description: 'Discover all the ways to get your presence in Web',
  //         href: '/development',
  //       },
  //       {
  //         title: 'Marketplace',
  //         description: 'Get a professional to help you in your IT journey',
  //         href: '/careers',
  //         // target: '_blank',
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     title: 'More',
  //     links: [
  //       {
  //         title: 'About Us',
  //         description: 'Get to know who we are and what we stand for.',
  //         href: '/about',
  //       },
  //       {
  //         title: 'Blog',
  //         description: 'Read new releases, get updates and latest news.',
  //         href: '/blog',
  //       },
  //     ],
  //   },

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
            <HeaderButton
              links={obj.links ? obj.links : []}
              additional={obj.additional ? obj.additional : []}>
              {obj.title}
            </HeaderButton>
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
