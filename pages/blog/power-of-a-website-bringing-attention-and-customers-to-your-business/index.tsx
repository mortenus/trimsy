import React from 'react';
import Image from 'next/image';

import BlogWrapper from 'features/Blog/BlogWrapper/standard';

import styles from '../Post.module.scss';

const info = {
  title: 'Power of a Website: Bringing Attention and Customers to Your Business',
  headerImg: '/uploads/1666542894627.png',
  date: 'June 14, 2023',
  createdAt: '2023-06-14T12:00:00+0000',
  modifiedAt: '2023-06-14T12:00:00+0000',
  minToRead: 4,
  slug: '/blog/power-of-a-website-bringing-attention-and-customers-to-your-business',
  description:
    'As the world becomes increasingly digital, people are turning to the internet for information, entertainment, and shopping. Businesses that adapt to this digital shift by establishing a strong online presence reap significant benefits.',
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
          In 2023, access to information, entertainment, and doing shopping online is great way to
          have a massive reach. Businesses that adapt to this digital shift by establishing a strong
          online presence reap significant benefits. One of the most fundamental elements of a
          successful online presence is a well-designed and informative website.
        </p>

        <h4>Reaching a Wider Audience</h4>
        <p>
          A well-developed website opens the doors to a global audience. Unlike a physical store, a
          website is accessible 24/7, allowing people from all corners of the world to learn about
          your business, regardless of time zones.
        </p>
        <p>
          It's like having a store that never closes, so potential customers can easily find your
          products or services.
        </p>

        <h4>Building Trust:</h4>
        <p>
          Today, consumers often turn to online to research products and services before making a
          purchase. Having strong presence gives important information, builds credibility and
          trust.
        </p>
        <p>
          It shows that your business is professional, reliable, and committed to providing the best
          experience to its customers, viewers and users.
        </p>

        <h4>Showing What You Offer:</h4>
        <p>
          Your website is like a digital catalog, where you can display your products and services
          in detail.
        </p>

        <p>
          High-quality images, interesting descriptions, and reviews help potential customers
          understand the value of what you're offer.
        </p>
        <p>
          This visual representation can make visitors become customers and place orders right from
          the comfort of their homes.
        </p>

        <h4>Easy Online Ordering:</h4>
        <p>
          With a website, customers can easily buy things from you online, making it incredibly
          convenient for customers to purchase from you.
        </p>
        <p>
          The ease of adding items to a cart, selecting preferences, and completing the transaction
          simplifies the entire buying process. This user-friendly experience encourages more orders
          and repeat business dealings.
        </p>

        <h4>Increased Customer Engagement</h4>
        <p>
          A website offers various tools to engage with your audience. You can integrate contact
          forms, live chat, and social media links, allowing customers to reach out with questions
          or feedback.
        </p>
        <p>
          The ability to interact directly with your customers strengthens your relationship with
          them and fosters a sense of loyalty and trust.
        </p>

        <h4>Affordable Marketing</h4>
        <p>
          Investing in a website is a cost-effective way to market your business. Compared to
          traditional advertising methods, a website allows you to reach a broader audience without
          breaking the bank. Utilizing Search Engine Optimization (SEO) techniques can also improve
          your website's visibility, driving more organic traffic and reducing the need for costly
          ads.
        </p>

        <h3>Final Thoughts</h3>

        <p>
          Having a good website can bring more attention, visitors, and sales. It's a must-have for
          any business in today's digital world. A website helps people all over the world know
          about your business, builds trust, and makes doing business easier.
        </p>
      </section>
    </BlogWrapper>
  );
}
