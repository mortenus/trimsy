import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import BlogWrapper from 'features/Blog/BlogWrapper';

import styles from '../Post.module.scss';

const info = {
  title: 'How CDN Improves your Website',
  headerImg: '/uploads/1666542894623.jpg',
  date: 'March 20, 2023',
  createdAt: '2023-03-20T12:00:00+0000',
  modifiedAt: '2023-03-20T12:00:00+0000',
  minToRead: 6,
  slug: '/blog/how-cdn-improves-your-website',
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
    profileUrl: 'https://www.linkedin.com/in/alexey-pylypenko/',
  },
  description:
    'When SEO is set up and used correctly – it could bring lots of new traffic to the web page. It is not complex to accomplish, while optimizing your website could play important part in boosting your search presence. Google receives 90% of all online searches. That’s why we’re going to talk about setting up SEO for Googling and connect to Google Search Console for detailed analysis.',
};

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
          When maintaining a website, it is eassential to keep it safe and fast-loading. To resolve
          these main two problems, the CDN comes in.
        </p>

        <p>
          The discussion is going to be about Content Delivery Network. What is used for, what is
          under the hood and more.
        </p>

        <h3>About CDN</h3>
        <p>
          A CDN, or Content Delivery Network, is a distributed network of servers that work together
          to deliver content to users around the world.
        </p>
        <p>
          Servers are typically located in various geographic locations, allowing content to be
          cached closer to end-users, resulting in faster delivery of content and lower latency.
        </p>
        <div className={styles.img}>
          <Image
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            src={'/uploads/1666542894625.png'}
            alt={'Image'}
          />
        </div>
        <p className={styles.underline_text}>(cloudflare)</p>

        <p>
          {`When a user requests content from a website or application, the CDN will direct the user's request to the closest server that has a cached copy of the content. This reduces the distance the content has to travel and highly improves the overall perfomance of the website application.`}
        </p>
        <p>
          CDNs are commonly used to deliver large files such as images, videos, and software
          downloads, as well as static content such as HTML pages and CSS files. They can also help
          protect websites from DDoS attack by distributing traffic across multiple servers and
          provdiing additional layers of securiy. More about Securing a website is in other post{' '}
          <Link href="http://localhost:3000/blog/why-website-security-is-important-for-your-business">
            here.
          </Link>
        </p>

        <h3>How CDN Improves Perfomance</h3>
        <p>
          Content Delivery Network is design to bring only the best by distributing its servers
          across the globe.
        </p>

        <p>
          While reducing the latency and network congestion that can occur when users access content
          from a central server located in one physical location improves perfomance of any website.
        </p>

        <h4>1. Caching</h4>
        <p>
          CDNs store copies of frequently accessed content in servers located in multiple locations.
        </p>
        <p>
          So when a user requests the content, the CDN delivers the cached content from the server
          closest to the user, reducing the time it take to load the content.
        </p>

        <h4>2. Reduced latency</h4>
        <p>
          By delivering content from a server closer to the user, CDNs reduce the distance that data
          must travel.
        </p>
        <p>In result it reducec latency and improves the speed at which content is delivered.</p>

        <h4>3. Scalability</h4>
        <p>CDNs can handle large volumes of traffic without overloading the oirgin server.</p>
        <p>
          By distribuing the load across multiple servers, CDNs can handle sudden spikes in traffic
          without impacting website perfomance.
        </p>

        <h4>4. DDoS protection</h4>
        <p>
          CDNs can help protect website from DDoS attacks by spreading the traffic across multiple
          servers and filtering out malicious traffic.
        </p>
      </section>
    </BlogWrapper>
  );
}
