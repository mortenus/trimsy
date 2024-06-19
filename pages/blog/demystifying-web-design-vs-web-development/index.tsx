import React from 'react';
import Image from 'next/image';

import styles from '../Post.module.scss';
import Link from 'next/link';
import BlogWrapper from 'features/Blog/BlogWrapper/enhanced';

const info = {
  title: 'Demystifying Web Design vs. Web Development: Understanding Roles and Responsibilities',
  headerImg: '/uploads/1666542894630.png',
  date: 'August 25, 2023',
  createdAt: '2023-08-25T12:00:00+0000',
  modifiedAt: '2023-08-25T12:00:00+0000',
  minToRead: 3,
  slug: '/blog/demystifying-web-design-vs-web-development',
  description:
    "Are you curious about the intriguing worlds of web design and web development? These two terms are often used interchangeably, but in reality, they represent two distinct dimensions of creating a website. To help you navigate through this maze of digital creativity and coding, let's demystify web design and web development, highlighting their roles and responsibilities.",
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
          Are you curious about the intriguing worlds of web design and web development? These two
          terms are often used interchangeably, but in reality, they represent two distinct
          dimensions of creating a website. To help you navigate through this maze of digital
          creativity and coding, let's demystify web design and web development, highlighting their
          roles and responsibilities.
        </p>

        <h3>Web Design: The Artistic Architect</h3>

        <p>
          Web designers are the artistic architects of the online world. Their primary focus is on
          the aesthetics, user experience, and overall look and feel of a website. Let's break down
          their roles and responsibilities in a snappy table:
        </p>

        <p>
          At our forefront studio, we've embarked on an extraordinary journey that converges the
          prowess of artificial intelligence (AI) with the artistry of web development.
        </p>

        <ul>
          <li>
            Visual Aesthetics: Crafting a visually appealing website that aligns with the brand or
            project's vision.
          </li>
          <li>
            User Experience (UX): Ensuring that the website is user-friendly, intuitive to navigate,
            and provides a positive experience.
          </li>
          <li>
            Branding: Maintaining consistency in the representation of a brand's identity through
            design elements.
          </li>
          <li>
            Typography: Selecting appropriate fonts and text styles that enhance readability and
            visual appeal.
          </li>
          <li>
            Color Palette: Choosing a color scheme that complements the website's purpose and
            conveys the desired mood or message.
          </li>
        </ul>

        <p>
          In a nutshell, web designers focus on creating the look and feel of a website, making it
          visually engaging and ensuring a seamless user experience.
        </p>

        <h3>Web Development: The Technical Maestro</h3>

        <p>
          Web developers, in contrast, are the technical architects who bring the designer's vision
          to life. They focus on building the functionality of the website. Here are their core
          responsibilities:
        </p>
        <ul>
          <li>
            Coding: Writing the necessary code, including HTML, CSS, and JavaScript, to implement
            website functionality.
          </li>
          <li>
            Back-End Development: Building server-side applications and managing databases for
            dynamic web content.
          </li>
          <li>
            Performance Optimization: Ensuring that the website loads quickly and performs
            efficiently.
          </li>
          <li>
            Cross-Browser Compatibility: Making sure the website works consistently across different
            devices and web browsers.
          </li>
          <li>
            Problem-Solving: Identifying and resolving technical issues and bugs that may arise
            during development.
          </li>
        </ul>
        <p>
          In summary, web developers are responsible for building the technical infrastructure and
          functionality of a website, ensuring it runs smoothly and efficiently.
        </p>

        <h3>Collaborative Synergy</h3>

        <p>
          Successful websites result from the collaborative efforts of web designers and developers.
          Here's how their collaboration works:
        </p>
        <p>
          Effective Communication: Designers and developers must communicate to ensure that the
          website's design aligns with technical requirements.
        </p>
        <p>
          Collaborative Tools: They often use collaborative tools and platforms to share designs and
          code, like Figma for design collaboration and GitHub for code management.
        </p>
        <p>
          Feedback Loop: Continuous feedback and iterative improvements are crucial. Designers
          provide feedback on how the design works in practice, and developers suggest technical
          enhancements.
        </p>

        <h3>The Verdict</h3>

        <p>
          In the dynamic world of web design and web development, the choice isn't about one being
          better than the other but understanding how they complement each other. Designers provide
          the artistic vision, while developers bring the technical expertise to create functional
          websites.
        </p>
        <p>
          Whether you are an aspiring designer, developer, or just someone curious about the field,
          understanding the synergy between these roles is essential for a successful web project.
          Embrace their differences and how they work together to create a brighter digital future.
        </p>
        <p>
          Whether you are an aspiring designer, developer, or just someone curious about the field,
          understanding the synergy between these roles is essential for a successful web project.
          Embrace their differences and how they work together to create a brighter digital future.
        </p>
      </section>
    </BlogWrapper>
  );
}
