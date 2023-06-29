import React from 'react';
import Image from 'next/image';

import BlogWrapper from 'features/Blog/BlogWrapper/enhanced';

import styles from '../Post.module.scss';

const info = {
  title: 'Trimsy introduces Starter, Basic and Advanced packages',
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
      'https://media.licdn.com/dms/image/D4D03AQHHuaDY4z8V7A/profile-displayphoto-shrink_800_800/0/1677288099829?e=1683158400&v=beta&t=_4dL6mKljguP7Bijl5_7Qk60bYUqaOGLI1NvaWdiYJg',
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
    slug: '/blog/why-website-security-is-important-for-your-business',
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
          Trimsy announced today launch of cutting-edge web development packages: Web Starter, Web
          Basic, and Web Advanced. With each package, we harness the power of the most advanced
          technologies to deliver exceptional results in the digital realm.
        </p>

        <h3>Starter</h3>
        <p>
          The Web Starter package is designed to get your online presence off the ground. It
          includes the essential features needed to establish a professional website. Here's what
          you can expect:
        </p>
        <p>
          Pages: With the Web Starter package, we create a one-page website that showcases your key
          information. This page serves as a concise introduction to your business, highlighting
          your products or services, contact details, and any other essential details.
        </p>

        <p>
          SEO: Search Engine Optimization (SEO) is integrated into your website, ensuring that it is
          optimized for search engines like Google. This helps improve your website's visibility in
          search results, driving organic traffic to your site and increasing your online presence.
        </p>

        <p>
          Responsive Design: Your website will be designed with responsiveness in mind, meaning it
          will adapt seamlessly to different devices and screen sizes. Whether accessed on a
          desktop, tablet, or mobile phone, your website will provide a consistent and user-friendly
          experience.
        </p>

        <h3>Basic</h3>
        <p>
          The Web Basic package builds upon the foundation laid by the Web Starter package. It
          includes additional features to enhance your online presence. Here's what sets it apart:
        </p>
        <p>
          Pages: With the Web Basic package, we offer up to five pages for your website. This allows
          you to provide more detailed information about your business, services, products, and
          other relevant aspects.
        </p>

        <p>
          SEO: Just like in the Web Starter package, SEO is an integral part of the Web Basic
          package. We optimize your website's content, structure, and meta tags to improve its
          visibility and ranking in search engine results.
        </p>

        <p>
          Responsive Design: Similar to the Web Starter package, your website will be designed with
          a responsive layout. This ensures that your website looks great and functions seamlessly
          across various devices and screen sizes.
        </p>

        <p>
          Deployment: We handle the entire deployment process, making your website live and
          accessible to visitors. This includes domain setup, hosting, and any technical
          configurations required for your website to function optimally.
        </p>
        <p>
          Quality Assurance Testing: Our team conducts thorough quality assurance testing to
          identify and resolve any issues or bugs that may impact the performance or user experience
          of your website.
        </p>
        <p>
          Accessibility: We ensure that your website adheres to accessibility standards, making it
          accessible to users with disabilities. This includes considerations for features such as
          alternative text for images, clear navigation, and appropriate color contrast.
        </p>

        <div className={styles.img}>
          <Image
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: '75%', height: 'auto' }}
            src={'/uploads/1666542894628.jpg'}
            alt={'Image'}
            loading={'lazy'}
          />
        </div>

        <h3>Advanced</h3>
        <p>
          The Web Advanced package takes your online presence to the next level, providing advanced
          features and functionalities. Here's what sets it apart from the previous packages:
        </p>
        <p>
          Pages: With the Web Advanced package, we offer up to ten pages for your website. This
          allows for a more comprehensive presentation of your business, products, services, and
          other relevant information
        </p>
        <p>
          Advanced SEO: The Web Advanced package includes advanced SEO capabilities. We employ
          advanced techniques, such as keyword research, competitive analysis, and link building, to
          further enhance your website's visibility and search engine rankings.
        </p>
        <p>
          Responsive Design: Just like the previous packages, your website will feature a responsive
          design that ensures a seamless user experience across various devices and screen sizes.
        </p>
        <p>
          Maintenance: We provide regular website maintenance to keep your website up-to-date,
          secure, and functioning optimally. This includes software updates, security patches, and
          monitoring for any potential issues.
        </p>
        <p>
          Third-Party Integration: The Web Advanced package offers integration with third-party
          services and tools, such as payment gateways, customer relationship management (CRM)
          systems, or e-commerce platforms. This allows for enhanced functionality and integration
          with your existing business processes.
        </p>
        <p>
          Deployment: Similar to the previous packages, we handle the deployment process, ensuring a
          smooth transition from development to a live website.
        </p>
        <p>
          Quality Assurance Testing: Our team conducts rigorous quality assurance testing to ensure
          that your website meets high standards of performance, functionality, and user experience.
        </p>
        <p>
          Accessibility: We prioritize accessibility considerations, ensuring that your website is
          accessible to all users, regardless of their disabilities. This includes adhering to
          accessibility guidelines and best practices.
        </p>

        <div className={styles.img}>
          <Image
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: '75%', height: 'auto' }}
            src={'/uploads/1666542894627.jpg'}
            alt={'Image'}
            loading={'lazy'}
          />
        </div>
      </section>
    </BlogWrapper>
  );
}
