import { ImageUnoptimized } from 'components';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from '../Post.module.scss';

const info = {
  title: 'Why Website Security is Important for Your Business',
  headerImg: '/uploads/1556542894631.jpg',
  date: 'March 14, 2023',
  createdAt: '2023-03-14T12:00:00+0000',
  modifiedAt: '2023-03-14T12:00:00+0000',
  minToRead: 6,
  slug: '/blog/why-website-security-is-important-for-your-business',
  author: {
    fullname: 'Oleksii Pylypenko',
    position: 'CEO',
    description: `I'm a CEO and a Co-Founder of Trimsy. I deeply appreciate the encouragment and
  mutual benefit from the associates I am given a chance to have a journey with. We are
  thinkers and doers, difficulties could be challanging, but that is the beauty of it.
  Doing things with speed does not mean doing them imperfectly, the only way to not fall
  back - is to go forward.`,
    avatarUrl:
      'https://media.licdn.com/dms/image/D4D03AQHHuaDY4z8V7A/profile-displayphoto-shrink_800_800/0/1677288099829?e=1683158400&v=beta&t=_4dL6mKljguP7Bijl5_7Qk60bYUqaOGLI1NvaWdiYJg',
  },
  description:
    'When SEO is set up and used correctly – it could bring lots of new traffic to the web page. It is not complex to accomplish, while optimizing your website could play important part in boosting your search presence. Google receives 90% of all online searches. That’s why we’re going to talk about setting up SEO for Googling and connect to Google Search Console for detailed analysis.',
};

const ArticleSchema = {
  '@context': 'https://schema.org',
  '@id': `https://trimsy.org${info.slug}#article`,
  '@type': 'NewsArticle',
  headline: info.title,
  image: [info.headerImg],
  datePublished: info.createdAt,
  dateModified: info.modifiedAt,
  author: { '@type': 'Person', name: info.author.fullname },
  speakable: {
    '@type': 'SpeakableSpecification',
    xPath: ['//title', "/html/head/meta[@name='description']/@content"],
  },
  publisher: {
    '@type': 'Organization',
    name: 'Trimsy',
    url: 'https://trimsy.org',
    logo: {
      '@type': 'ImageObject',
      url: 'https://trimsy.org/images/logo.svg',
      width: 112,
      height: 112,
    },
    sameAs: ['https://www.linkedin.com/company/trimsy'],
  },
};

Post.title = info.title;
Post.description = info.description;

export default function Post() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <Link href="/blog#search" className={styles.return}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              viewBox="6 6 12 12"
              style={{ rotate: '90deg' }}>
              <path d="M7 9.79a.5.5 0 0 1 .854-.353L12 13.584l4.146-4.147a.5.5 0 1 1 .708.708L12 14.998l-4.854-4.853A.5.5 0 0 1 7 9.79Z"></path>
            </svg>{' '}
            <span>Return</span>
          </Link>
          <h1 className={styles.title}>{info.title}</h1>
          <div className={styles.headerImg}>
            <ImageUnoptimized
              src={info.headerImg}
              width="0"
              height="0"
              //   sizes="100vw"
              priority
              style={{ width: '100%', height: 'auto', maxHeight: '600px', objectFit: 'cover' }}
              alt={'Header Blog Image'}
            />
          </div>

          <div className={styles.date}>
            <span>{info.date}</span>
            <div className={styles.line} />
            <span>{info.minToRead} mins read</span>
          </div>

          <section>
            <p>
              Website security is crucial for any business that operates online, regardless of its
              size or industry.
            </p>

            <p>
              Secure website creates strong connection between the users/audience because trust is
              one of the main ingredients of successful entity, whether online or offline.
            </p>

            <h3>Protecting confidential data</h3>
            <p>
              Your website may store sensitive information such as customer data, financial
              information, and business secrets.
            </p>
            <p>
              If that information falls into the wrong hands, it not only going to damage your
              customers, but can have severe consequences for your business as well.
            </p>

            <h3>Building trust</h3>
            <p>
              Customers expect your website to be secure when they share their personal information
              with you.
            </p>
            <p>
              A secure website helps build trust with your customers, which is crucial for customer
              retention and business growth.
            </p>

            <h3>Maintaining brand reputation</h3>
            <p>A security breach can have severe consequences for your business reputation.</p>
            <p>
              If your website is hacked, it can result in a loss of trust, negative publicity, and
              even legal actions.
            </p>

            <h3>Protecting against downtime</h3>
            <p>A website breach can result in downtime, which can be costly for your business</p>
            <p>
              Downtime can lead to lost revenue, decreased productivity, and damage to your brand
              reputation.
            </p>

            <h3>Conclusion</h3>
            <p>{`Website security is essential for your business' success and longevity. `}</p>
            <p>
              It protects your sensitive and valuable information, builds important trust with
              customers that can be damaged forever, maintains your brand reputation and protects
              against downtime.
            </p>
          </section>

          <div className={styles.author}>
            <div className={styles.img}>
              <Image fill src={info.author.avatarUrl} alt={'Author image'} />
            </div>
            <div className={styles.info}>
              <span>Written by</span>
              <h4 className={styles.name}>{info.author.fullname}</h4>
              <span className={styles.position}>{info.author.position}</span>
              <p className={styles.description}>{info.author.description}</p>
            </div>
          </div>

          {/* <div className={styles.further}>
          <h3>Next to Read</h3>

          <div className={styles.items}>
            <div className={styles.item}>
              <div className={styles.img}>
                <Image fill src={'/static/img/blog/info/1.jpg'} alt={'Next to Read IMG'} />
              </div>
              <div className={styles.content}>
                <span className={styles.nextDate}>Apr 26, 2022</span>
                <h4>How to get more client to get to your business</h4>
                <p>
                  I&apos;m a CEO and a Co-Founder of Whimsy Games. Before that, I advanced my
                  expertise in engineering, management, traffic marketing, and analytics working for
                  large game development studios with a $1M+ monthly income. With a clear vision of
                  how game development should work, I run Whimsy Games, being responsible for the
                  marketing and sales of our products and services.
                </p>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.img}>
                <Image fill src={'/static/img/blog/info/2.jpg'} alt={'Next to Read IMG'} />
              </div>
              <div className={styles.content}>
                <span className={styles.nextDate}>Apr 26, 2022</span>
                <h4>How to get more client to get to your business</h4>
                <p>
                  I&apos;m a CEO and a Co-Founder of Trimsy. I deeply appreciate the encouragment
                  and mutual benefit from the associates I am given a chance to have a journey with.
                  Before that, I advanced my expertise in engineering, management, traffic
                  marketing, and analytics working for large game development studios with a $1M+
                  monthly income. With a clear vision of how game development should work, I run
                  Whimsy Games, being responsible for the marketing and sales of our products and
                  services.
                </p>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.img}>
                <Image fill src={'/static/img/blog/info/3.jpg'} alt={'Next to Read IMG'} />
              </div>
              <div className={styles.content}>
                <span className={styles.nextDate}>Apr 26, 2022</span>
                <h4>How to get more client to get to your business</h4>
                <p>
                  I&apos;m a CEO and a Co-Founder of Whimsy Games. Before that, I advanced my
                  expertise in engineering, management, traffic marketing, and analytics working for
                  large game development studios with a $1M+ monthly income. With a clear vision of
                  how game development should work, I run Whimsy Games, being responsible for the
                  marketing and sales of our products and services.
                </p>
              </div>
            </div>
          </div>
        </div> */}
        </div>
      </div>
      <Head>
        <meta property="og:type" content="article" />
        <meta property="og:title" content={info.title} />
        <meta
          property="og:description"
          content="Creating a marketing strategy for social media doesn't have to be painful. Here's an eight-step guide to build a successful social media strategy."
        />
        <meta
          property="og:url"
          content="https://simplyirfan.com/blog/how-to-create-a-social-media-marketing-plan/"
        />
        <meta property="og:site_name" content="Social Media Blog" />
        <meta property="og:image" content={info.headerImg} />
        <meta property="og:image:secure_url" content={info.headerImg} />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1080" />
        <meta property="og:image:alt" content="Easy Steps Create a Social Media Strategy" />
        <meta property="article:section" content="Social Media" />
        <script
          type="application/ld+json"
          async
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ArticleSchema) }}
        />
      </Head>
    </>
  );
}
