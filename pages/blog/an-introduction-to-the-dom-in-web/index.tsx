import React from 'react';
import Image from 'next/image';

import styles from '../Post.module.scss';
import Link from 'next/link';
import BlogWrapper from 'features/Blog/BlogWrapper/enhanced';

const info = {
  title: 'An Introduction to the DOM in Web Development',
  headerImg: '/uploads/1666542894631.png',
  date: 'September 7, 2023',
  createdAt: '2023-09-07T12:00:00+0000',
  modifiedAt: '2023-09-07T12:00:00+0000',
  minToRead: 2,
  slug: '/blog/an-introduction-to-the-dom-in-web',
  description:
    "Welcome to the world of web development! If you're new to this fascinating field, understanding the Document Object Model (DOM) is your first step to becoming a proficient web developer. In this article, we'll introduce you to the DOM, demystify its role in web development, and provide you with essential knowledge to get started. So, let's dive right in.",
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
          Welcome to the world of web development! If you're new to this fascinating field,
          understanding the Document Object Model (DOM) is your first step to becoming a proficient
          web developer. In this article, we'll introduce you to the DOM, demystify its role in web
          development, and provide you with essential knowledge to get started. So, let's dive right
          in.
        </p>

        <h3>What is the DOM?</h3>

        <p>
          At the heart of web development lies the Document Object Model (DOM). Think of it as a
          blueprint of your web page. It represents the structure and content of a web page and
          allows you to manipulate it with code.
        </p>

        <p>
          The DOM is created by your browser when it loads a web page. It's a hierarchical structure
          that consists of elements, attributes, and the relationships between them.
        </p>
        <h3>Why is the DOM Important?</h3>
        <p>Understanding the DOM is crucial because it enables you to:</p>

        <ul>
          <li>
            Dynamic Interactions: With the DOM, you can create web pages that respond to user
            actions. For example, you can change the text of a button when it's clicked.
          </li>
          <li>
            Manipulate Content: You can add, remove, or modify elements and content on a webpage.
            This is fundamental for creating interactive user interfaces.
          </li>
          <li>
            Access Data: The DOM allows you to access and update data in web forms and send it to a
            server.
          </li>
          <li>
            Update Styles: You can change the appearance of elements by modifying their CSS
            properties.
          </li>
          <li>
            Color Palette: Choosing a color scheme that complements the website's purpose and
            conveys the desired mood or message.
          </li>
        </ul>

        <h3>How the DOM Works</h3>

        <p>{`The DOM consists of a tree-like structure with the document object at the root. Elements, such as <html>, <body>, and <div>, branch out from the document. These elements, in turn, can contain other elements, creating a hierarchy.`}</p>

        <p>Here's a quick overview of commonly used DOM methods and properties:</p>

        <h3>DOM Methods:</h3>
        <div className={styles.code}>
          <code>getElementById(id) // Select an element by its id attribute.</code>
          <br />
          <code>getElementsByClassName // Select elements by their class attribute.</code>
          <br />
          <code>getElementsByTagName // Select elements by their tag name.</code>
          <br />
          <code>querySelector // Select the first element matching a CSS selector.</code>
        </div>
        <h3>DOM Properties:</h3>
        <div className={styles.code}>
          <code>innerHTML // Get or set the HTML content of an element..</code>
          <br />
          <code>textContent // Get or set the text content of an element.</code>
          <br />
          <code>style // Access and modify the CSS properties of an element..</code>
        </div>

        <h3>Conclusion</h3>

        <p>
          In the world of web development, the DOM is your playground. It's the bridge between
          static web pages and dynamic, interactive applications. Understanding how to manipulate
          the DOM with JavaScript is a fundamental skill for any web developer.
        </p>
        <p>
          In our future articles, we'll delve deeper into the DOM, exploring topics like event
          handling and optimization techniques. So, stay tuned for more web development insights.
        </p>
        <p>
          Remember, practice is key to mastering the DOM. Try experimenting with code, and you'll
          soon be crafting dynamic and engaging web experiences.
        </p>
      </section>
    </BlogWrapper>
  );
}
