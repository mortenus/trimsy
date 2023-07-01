import React from 'react';
import { useRouter } from 'next/router';

import styles from '/styles/services/success.module.scss';
import { SwiperSmall } from 'components';

SuccessPage.title = 'Thank You: Order Confirmation';

export default function SuccessPage({ items }: any) {
  const router = useRouter();

  const [isClient, setIsClient] = React.useState(false);
  const [storedEmail, setStoredEmail] = React.useState('');
  const [type, setType] = React.useState('');

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  React.useEffect(() => {
    if (isClient) {
      if (typeof window !== 'undefined' && router.isReady) {
        const { authToken } = router.query;
        const storedToken = localStorage.getItem('formSubmissionToken');
        if (authToken && authToken === storedToken) {
          setStoredEmail(localStorage.getItem('formSubmissionEmail') || '');
          setType(localStorage.getItem('formSubmissionType') || '');

          // Clear the stored token and email from local storage
          localStorage.removeItem('formSubmissionToken');
          localStorage.removeItem('formSubmissionEmail');
          localStorage.removeItem('formSubmissionType');
        } else {
          router.push('/careers/services');
        }
      }
    }
  }, [router, isClient]);

  return (
    <div>
      <section className={styles.success}>
        <div className={styles.info}>
          <h2 className={'typography-headline'}>You’re all set.</h2>
          <h4 className={'typography-hero-product'}>We’ll get in touch within 24 hours with:</h4>
          <p className={'typography-hero-product bold'}>{storedEmail}</p>
        </div>
        <div className={styles.order}>
          <h5 className={styles.title}>Your order:</h5>
          <h4 className={'typography-headline'}>{type}</h4>
        </div>
      </section>
      <SwiperSmall items={items} />
    </div>
  );
}

export async function getStaticProps() {
  const items = [
    {
      data: {
        date: 'April 17, 2023',
        title:
          'Bridging Borders with Humanity: How Trimsy x Hart Facilitates Humanitarian Aid for Ukrainians',
        imgUrl: '/uploads/1556542894645.jpg',
      },
      modal:
        '/blog/briding-borders-with-humanity-how-trimsy-x-hart-facilitates-humanitarian-aid-for-ukranians',
      slug: '/blog/briding-borders-with-humanity-how-trimsy-x-hart-facilitates-humanitarian-aid-for-ukranians',
      type: 'QUICK READ',
    },
    {
      data: {
        date: 'March 14, 2023',
        title: 'Website Security: How to Protect Your Website and Gain a Competitive Edge',
        description:
          'Website security is crucial for any business that operates online, regardless of its size or industry. Secure website creates strong connection between the users/audience because trust is one of the main ingredients of successful entity, whether online or offline.',
        imgUrl: 'https://trimsy.org/uploads/1556542894631.jpg',
        hashtags: ['Web', 'Dev', 'Security'],
      },
      slug: '/blog/website-security-how-to-protect-your-website-and-gain-a-comptetive-edge',
    },
    {
      data: {
        date: 'March 12, 2023',
        title: 'How To Create a Winning Social Media Strategy for Your Website',
        description:
          'Creating a winning social media strategy is a crucial component of any successful website marketing plan. It gives confident opportunities for a website grown and expansion.',
        imgUrl: 'https://trimsy.org/uploads/1556542894629.jpg',
        hashtags: ['Web', 'Social Media'],
      },
      slug: '/blog/how-to-create-a-winning-social-media-strategy',
    },
    {
      data: {
        date: 'March 9, 2023',
        title: 'Setting Up Google Analytics Fast and Easy',
        description:
          "Tracking website could give a valuable information on how it is used, how well website keeps visitors on different pages, amd even more. The importance of resource about visitors' actions while interacting with a page could play very important part for any future analysis of website's perfomance or improvements of UI/UX features.'",
        imgUrl: 'https://trimsy.org/uploads/google_analytics_logo.webp',
        hashtags: ['Web', 'Dev'],
      },
      slug: '/blog/setting-up-google-analytics-fast-and-easy',
    },
    {
      data: {
        date: 'March 2, 2023',
        title: 'How To Improve SEO of your Website in 5 Steps',
        description:
          'When SEO is set up and used correctly – it could bring lots of new traffic to the web page. It is not complex to accomplish, while optimizing your website could play important part in boosting your search presence. Google receives 90% of all online searches. That’s why we’re going to talk about setting up SEO for Googling and connect to Google Search Console for detailed analysis.',
        imgUrl: 'https://trimsy.org/uploads/1666542894623.jpg',
        hashtags: ['Web', 'Dev'],
      },
      slug: '/blog/how-to-improve-seo-of-your-website-in-5-steps',
    },
  ];

  return {
    props: { items },
  };
}
