import Head from 'next/head';

import styles from './partners.module.scss';
import { Button } from 'components';
import Link from 'next/link';

Landing.description = `Our affiliate program, called Partners Program, provides a unique way for you to earn commissions on each sale.`;

const bannerItems = [
  {
    title: 'You’re in control',
    description:
      'You get the affiliate link you can post anywhere it is suitable for you. No limits, manage your links with Trimsy Toolkit in your profile.',
  },
  {
    title: 'Secure and easy',
    description:
      'We do not collect PII and do not track users at an individual level, it is against our program terms and conditions and privacy policy.',
  },
];

const FAQItems = [
  {
    title: 'What happens after I register?',
    description:
      'Currently, we are accepting partners who can drive volume and quality that meet Trimsy guidelines. Once you sign in, You get the affiliate link you can post anywhere it is suitable for you.',
  },
  {
    title: 'Do you have a user privacy policy?',
    description:
      'Currently, we are accepting partners who can drive volume and quality that meet Trimsy guidelines. Once you sign in, You get the affiliate link you can post anywhere.',
  },
];

export default function Landing({}) {
  return (
    <>
      <main>
        <h1 style={{ display: 'none', visibility: 'hidden' }}>Trimsy Partners Program</h1>

        <section className={styles[`intro`]}>
          <h2 className={styles[`intro__title`]}>Partners Program</h2>
          <h5 className={styles[`intro__subtitle`]}>Looking to become an affiliate partner?</h5>
          <p className={styles[`intro__description`]}>
            Our affiliate program, called Partners Program, provides a unique way for you to earn
            commissions on each sale.
          </p>

          <div className={styles[`intro-additional`]}>
            <span className={styles[`intro-additional--item`]}>From $500 on Web Development</span>
            <span className={styles[`intro-additional--item`]}>
              From $25 on Careers (Resume, SMM)
            </span>
          </div>
          <Button size="medium" to="/partners/signup">
            Join
          </Button>
        </section>
        <section className={styles['todo']}>
          <div className={styles[`todo-intro`]}>
            <h5 className={styles[`todo-intro__subtitle`]}>What To Do</h5>
            <h2 className={styles[`todo-intro__title`]}>What is the Trimsy Partners Program?</h2>

            <p className={styles[`todo-intro__description`]}>
              The program provides a unique way for you to earn commissions. Receive (or manage
              using Trimsy Toolkit) your personalized tracking link, promote however is suitable for
              you and earn on every sale
            </p>
          </div>
          <div className={`global-wrapper--small`}>
            <div className={styles[`todo-banners`]}>
              {bannerItems.map((item) => (
                <div className={styles[`todo-banners__item`]}>
                  <h5 className={styles[`todo-banners__item__title`]}>{item.title}</h5>
                  <p className={styles[`todo-banners__item__description`]}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className={`global-wrapper--small`}>
          <div className={styles[`FAQ`]}>
            {FAQItems.map((item) => (
              <div className={styles[`FAQ__item`]}>
                <h5 className={styles[`FAQ__item__title`]}>{item.title}</h5>
                <p className={styles[`FAQ__item__description`]}>{item.description}</p>
              </div>
            ))}
            <Link style={{ marginTop: '50px' }} className={styles['FAQ__cta']} href="/partners/faq">
              See all FAQ
            </Link>
          </div>
        </section>
      </main>

      <Head>
        <meta property="og:image" content={'https://trimsy.org/images/mini-logo.png'} />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          async
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WebSiteSchema) }}
        />
      </Head>
    </>
  );
}

const WebSiteSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://trimsy.org/#website',
      url: 'https://trimsy.org/',
      name: 'Trimsy',
      description: 'Discover your presence in Web the way you want.',
      potentialAction: [
        {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://trimsy.org/?s={search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
      ],
      inLanguage: 'en-US',
    },
    {
      '@type': 'ImageObject',
      '@id': 'https://trimsy.org/#primaryimage',
      inLanguage: 'en-US',
      url: 'https://trimsy.org/images/mini-logo.png',
      contentUrl: 'https://trimsy.org/images/mini-logo.png',
      width: 500,
      height: 500,
      caption: 'Trimsy',
    },
    {
      '@type': 'WebPage',
      '@id': 'https://trimsy.org/#webpage',
      url: 'https://trimsy.org/',
      name: 'Web Development | Trimsy',
      isPartOf: { '@id': 'https://trimsy.org/#website' },
      primaryImageOfPage: { '@id': 'https://trimsy.org/images/logo.svg' },
      description:
        'Web Studio \u2705 Discover your presence in Web the way you want. \u261b One of the top growing development company in the industry.',
      breadcrumb: { '@id': 'https://trimsy.org/#breadcrumb' },
      inLanguage: 'en-US',
      potentialAction: [{ '@type': 'ReadAction', target: ['https://trimsy.org/'] }],
    },
    // {
    //   '@type': 'BreadcrumbList',
    //   '@id': 'https://trimsy.org/#breadcrumb',
    //   itemListElement: [
    //     { '@type': 'ListItem', position: 1, name: 'About us', item: 'https://trimsy.org/about' },
    //     { '@type': 'ListItem', position: 2, name: 'Carrers', item: 'https://trimsy.org/careers' },
    //     { '@type': 'ListItem', position: 3, name: 'Blog', item: 'https://trimsy.org/blog' },
    //   ],
    // },
  ],
};

export async function getStaticProps() {
  return {
    props: {},
  };
}
