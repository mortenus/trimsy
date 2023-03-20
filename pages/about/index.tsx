import { Button, ImageUnoptimized } from 'components';
import CommunityItem from 'features/About/community/Item';
import IntroItem from 'features/About/Intro/Item';
import Head from 'next/head';
import React from 'react';

import styles from './about.module.scss';

const itemArr = [
  {
    number: 18,
    title: 'Successful fulfillment of orders',
  },
  {
    number: 1,
    title: 'years of experience',
  },
  {
    number: 5,
    title: 'collaborations a week',
  },
];

About.title = 'About us';

export default function About() {
  return (
    <>
      <h1 className={'hidden'}>About Us | Trimsy</h1>
      <section className={styles.introWrap}>
        <div className="global-wrapper ">
          <div className={styles.intro}>
            <h2>About us</h2>
          </div>
          <div className={styles.platform}>
            <div className={styles.platform_text}>
              <h4>
                Trimsy is a platform for people to bring their professional ideas into reality.
              </h4>
              <h4>
                We understand that every business is unique, which is why we work closely with our
                clients to discover their specific goals and vision for their web presence or get
                help from experts on careers.
              </h4>
              <h4>
                Whether you're looking to build a new website from scratch, optimize an existing
                site for better performance, or establish new careers opportunities, we can help.
              </h4>
            </div>
          </div>

          <div className={styles.blocks}>
            {itemArr.map((item) => (
              <IntroItem key={item.title} {...item} />
            ))}
          </div>
        </div>

        <div className={styles.background}>
          <ImageUnoptimized
            src={'/static/img/about/background.jpg'}
            fill
            priority
            alt={'Intro Image'}
          />
        </div>
        <div className={styles.vision}>
          <div className={'global-wrapper'}>
            <h3>Vision</h3>
            <h5>
              We provide web design, development, analytics and finding place for new talents.
            </h5>
            <h5>Our team will take your ideas and make it happen.</h5>
          </div>
        </div>
      </section>
      <section className={styles.community}>
        <div className={styles.text}>
          <h2>Community Involvement</h2>
          <p>We’re committed to making a difference in the communities where we operate.</p>
          <p>
            We believe that being actively involved in our community is an important part of who we
            are as a business, and we will continue to seek out ways to give back and make a
            positive impact.
          </p>
        </div>
        <div className={styles.items}>
          <CommunityItem />
        </div>
      </section>
      <Head>
        <meta content={'https://trimsy.org/images/mini-logo.png'} property="og:image" />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          async
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LocalBusinessSchema) }}
        />
      </Head>
    </>
  );
}

const LocalBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Trimsy',
  description: 'Discover your presence in Web the way you want.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Tanner Close',
    addressLocality: 'Airdrie',
    postalCode: 'T4A 2L4',
    addressCountry: 'Canada',
  },
  image: 'https://trimsy.org/images/mini-logo.png',
};
