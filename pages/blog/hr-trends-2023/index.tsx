import React from 'react';
import Image from 'next/image';

import BlogWrapper from 'features/Blog/BlogWrapper';

import styles from '../Post.module.scss';

const info = {
  title: 'Human Resources Trends 2023 ',
  headerImg: '/uploads/1556542894632.jpeg',
  date: 'March 27, 2023',
  createdAt: '2023-03-27T12:00:00+0000',
  modifiedAt: '2023-03-27T12:00:00+0000',
  minToRead: 5,
  slug: '/blog/hr-trends-2023',
  author: {
    fullname: 'Lesia Pylypenko',
    position: 'Owner',
    description: `'Hiring for attitude over skill is not a thing in the real world. For experienced roles, qualification is expected!'`,
    avatarUrl:
      'https://media.licdn.com/dms/image/D5603AQGVaopcwwlJpA/profile-displayphoto-shrink_200_200/0/1679896676522?e=1685577600&v=beta&t=SuM7T5dOuMgQ5wUgq9m-avPK47xnIaaLfzB8drpjPho',
    profileUrl: 'https://www.linkedin.com/in/lesia-careers/',
  },
  description:
    'The field of HR is constantly evolving, driven by advances in technology, changes in the workforce demographics, and shifting cultural norms. Here are some of the potential future developments in HR:',
};

const a = [
  {
    data: {
      date: 'March 27, 2023',
      title: 'Human Resources Trends 2023 ',
      description:
        'The field of HR is constantly evolving, driven by advances in technology, changes in the workforce demographics, and shifting cultural norms. Here are some of the potential future developments in HR:',
      imgUrl: 'https://trimsy.org/uploads/1556542894632.jpeg',
    },
    slug: '/blog/hr-trends-2023',
  },
  {
    data: {
      date: 'March 14, 2023',
      title: 'Why Website Security is Important for Your Business',
      description:
        'Website security is crucial for any business that operates online, regardless of its size or industry. Secure website creates strong connection between the users/audience because trust is one of the main ingredients of successful entity, whether online or offline.',
      imgUrl: 'https://trimsy.org/uploads/1556542894631.jpg',
    },
    slug: '/blog/why-website-security-is-important-for-your-business',
  },
  {
    data: {
      date: 'March 12, 2023',
      title: 'How To Create a Winning Social Media Strategy for Your Website',
      description:
        'Creating a winning social media strategy is a crucial component of any successful website marketing plan. It gives confident opportunities for a website grown and expansion.',
      imgUrl: 'https://trimsy.org/uploads/1556542894629.jpg',
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
    },
    slug: '/blog/how-to-improve-seo-of-your-website-in-5-steps',
  },
];

const nextToReadArr = [
  {
    date: 'March 9, 2023',
    title: 'Setting Up Google Analytics Fast and Easy',
    description: `Tracking website could give a valuable information on how it is used, how well website keeps visitors on different pages, amd even more. The importance of resource about visitors' actions while interacting with a page could play very important part for any future analysis of website's perfomance or improvements of UI/UX features.`,
    imgUrl: 'https://trimsy.org/uploads/google_analytics_logo.webp',
    slug: '/blog/setting-up-google-analytics-fast-and-easy',
  },
  {
    date: 'March 14, 2023',
    title: 'Why Website Security is Important for Your Business',
    description: `Website security is crucial for any business that operates online, regardless of its size or industry. Secure website creates strong connection between the users/audience because trust is one of the main ingredients of successful entity, whether online or offline.`,
    imgUrl: 'https://trimsy.org/uploads/1556542894631.jpg',
    slug: '/blog/why-website-security-is-important-for-your-business',
  },
  {
    date: 'March 12, 2023',
    title: 'How To Create a Winning Social Media Strategy for Your Website',
    description: `Creating a winning social media strategy is a crucial component of any successful website marketing plan. It gives confident opportunities for a website grown and expansion.`,
    imgUrl: 'https://trimsy.org/uploads/1556542894629.jpg',
    slug: '/blog/how-to-create-a-winning-social-media-strategy',
  },
];

Post.title = info.title;
Post.description = info.description;

export default function Post() {
  return (
    <BlogWrapper info={info} nextToReadArr={nextToReadArr}>
      <section className={styles.section}>
        <p>
          The field of HR is constantly evolving, driven by advances in technology, changes in the
          workforce demographics, and shifting cultural norms.
        </p>

        <p>Here are some of the potential future developments in HR:</p>

        <h3>Emphasis on employee experience</h3>
        <p>
          In recent years, there has been a growing focus on employee experience, with companies
          recognizing the importance of creating a positive workplace culture and providing
          employees with meaningful work and opportunities for growth.
        </p>
        <p>
          In the future, we can expect this trend to continue, with HR departments playing a key
          role in creating and maintaining a positive employee experience.
        </p>

        <h3> Increased use of AI and automation</h3>

        <p>
          As AI and automation technologies become more sophisticated, we can expect to see HR
          departments using these tools to streamline processes and improve efficiency.
        </p>
        <p>
          For example, AI-powered recruiting software can help to screen resumes and identify the
          most promising candidates, while chatbots can handle routine HR inquiries and tasks.
        </p>

        <h3>Greater emphasis on diversity, equity, and inclusion (DEI)</h3>

        <p>
          In recent years, there has been a growing recognition of the importance of DEI in the
          workplace.
        </p>
        <p>
          Going forward, we can expect HR departments to take an even more proactive role in
          promoting DEI initiatives and creating inclusive workplace cultures.
        </p>

        <h3>Hybrid work arrangements</h3>
        <div className={styles.img}>
          <Image
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: '70%', height: 'auto' }}
            src={'/uploads/1556542894633.jpg'}
            alt="HR image"
            loading={'lazy'}
            quality={'100'}
          />
        </div>
        <p>
          The COVID-19 pandemic has accelerated the trend toward remote work, and many companies are
          now adopting hybrid work arrangements that combine remote and in-person work.
        </p>
        <p>
          HR departments will need to adapt to these new arrangements, ensuring that they are fair
          and equitable for all employees.
        </p>

        <h3>Remote work will continue to be prevalent </h3>
        <p>
          The pandemic has accelerated the trend towards remote work, and it's likely that many
          companies will continue to offer flexible work arrangements in 2023.
        </p>
        <p>
          This will require HR teams to adapt their policies and processes to accommodate remote
          workers and ensure that they remain engaged and productive.
        </p>
      </section>
    </BlogWrapper>
  );
}
