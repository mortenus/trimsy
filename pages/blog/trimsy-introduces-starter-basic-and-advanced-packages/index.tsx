import React from 'react';
import Image from 'next/image';

import BlogWrapper from 'features/Blog/BlogWrapper/enhanced';

import styles from '../Post.module.scss';
import Link from 'next/link';

const info = {
  title: 'Trimsy introduces Web packages at a great value',
  headerImg: '/uploads/1666542894626.png',
  date: 'May 15, 2023',
  createdAt: '2023-04-15T12:00:00+0000',
  modifiedAt: '2023-04-15T12:00:00+0000',
  minToRead: 6,
  slug: '/blog/trimsy-introduces-starter-basic-and-advanced-packages',
  description:
    'Trimsy announced today launch of cutting-edge web development packages. With each package, we harness the power of the most advanced technologies to deliver exceptional results in the digital realm.',
  author: {
    fullname: 'Oleksii Pylypenko',
    position: 'CEO',
    description: `I'm a CEO and a Co-Founder of Trimsy. I deeply appreciate the encouragment and
    mutual benefit from the associates I am given a chance to have a journey with. We are
    thinkers and doers, difficulties could be challanging, but that is the beauty of it.
    Doing things with speed does not mean doing them imperfectly, the only way to not fall
    back - is to go forward.`,
    avatarUrl:
      'https://media.licdn.com/dms/image/D4D03AQHHuaDY4z8V7A/profile-displayphoto-shrink_200_200/0/1677288102806?e=1721865600&v=beta&t=DGDiOOXgFgO7g4beK29p9Kn-6tFk2g7WOTgqOvqCI9Q',
    profileUrl: 'https://www.linkedin.com/in/alexey-pylypenko/',
  },
};

const nextToReadArr = [
  {
    date: 'March 2, 2023',
    title: 'How To Improve SEO of your Website in 5 Steps',
    description: `When SEO is set up and used correctly – it could bring lots of new traffic to the web page. It is not complex to accomplish, while optimizing your website could play important part in boosting your search presence. Google receives 90% of all online searches. That’s why we’re going to talk about setting up SEO for Googling and connect to Google Search Console for detailed analysis.`,
    imgUrl: 'https://trimsy.org/uploads/1666542894623.jpg',
    slug: '/blog/how-to-improve-seo-of-your-website-in-5-steps',
  },
  {
    date: 'March 14, 2023',
    title: 'Why Website Security is Important for Your Business',
    description: `Website security is crucial for any business that operates online, regardless of its size or industry. Secure website creates strong connection between the users/audience because trust is one of the main ingredients of successful entity, whether online or offline.`,
    imgUrl: 'https://trimsy.org/uploads/1556542894631.jpg',
    slug: '/blog/website-security-how-to-protect-your-website-and-gain-a-comptetive-edge',
  },
  {
    date: 'March 9, 2023',
    title: 'Setting Up Google Analytics Fast and Easy',
    description: `Tracking website could give a valuable information on how it is used, how well website keeps visitors on different pages, amd even more. The importance of resource about visitors' actions while interacting with a page could play very important part for any future analysis of website's perfomance or improvements of UI/UX features.`,
    imgUrl: 'https://trimsy.org/uploads/google_analytics_logo.webp',
    slug: '/blog/setting-up-google-analytics-fast-and-easy',
  },
];

Post.title = info.title;
Post.description = info.description;

export default function Post() {
  return (
    <BlogWrapper info={info} nextToReadArr={nextToReadArr}>
      <section className={styles.section}>
        <p>
          Today, Trimsy announced launch of cutting-edge web development packages: Starter, Basic,
          Advanced. With each package harnesses the power of unique technologies to deliver
          exceptional results.
        </p>

        <p>
          <span>Trimsy Development</span> has always kept a customer's view and visiom about the
          desired outcome, considering as many detail as possible. The introduction of{' '}
          <span>Trimsy Development</span> packages, combines everything customers wants to get the
          desired attention, easy checkout or intuitive design to establish best experience to
          viewers. <Link href="/development/services">Trimsy Web Plans in detail</Link>
        </p>

        <h3>Starter</h3>
        <p>
          The Web Starter package is designed to get your online presence off the ground. It
          includes the essential features needed to establish a professional website.
        </p>

        <h3>Basic</h3>
        <p>
          The Web Basic package builds upon the foundation laid by the Web Starter package. It
          includes additional features to enhance your online presence for more opportunities.
        </p>

        <div className={styles.img}>
          <Image
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            src={'/uploads/1666542894628.jpg'}
            alt={'Image'}
            loading={'lazy'}
          />
        </div>

        <h3>Advanced</h3>
        <p>
          The Web Advanced package takes your online presence to the next level, providing advanced
          features and functionalities.
        </p>

        <div className={styles.img}>
          <Image
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            src={'/uploads/1666542894627.jpg'}
            alt={'Image'}
            loading={'lazy'}
          />
        </div>
      </section>
    </BlogWrapper>
  );
}
