import React from 'react';

import styles from './advanced.module.scss';
import { CompareTable } from 'features/Services';
import { ContactForm, FAQ } from 'features/Home';

const init = {
  isNew: true,
  name: 'Advanced',
  price: 3500,
  logo: '',
};

const FAQArr = [
  {
    title: 'What the difference between web design and development?',
    description: `Web Development is about software and web design is about visuals. The combination of this both practices provides a great end result \u2013 a well-monetized web application with several thousands of views.`,
  },
  {
    title: 'What is SEO?',
    description: `SEO, or Search Engine Optimization, is the art and science of optimizing a website to rank higher on search engine results pages. It involves various techniques such as keyword research, content optimization, and link building to increase a website's visibility and attract more organic traffic.`,
    learnMoreUrl: 'https://trimsy.org/blog/how-to-improve-seo-of-your-website-in-5-steps',
  },
  {
    title: `How can analytics be used to improve a website's performance?`,
    description: `Analytics can be used to improve a website's performance by providing valuable insights into user behavior and preferences. By analyzing data on website traffic, page views, bounce rates, conversion rates, and other metrics, website owners can make data-driven decisions to improve the user experience, optimize website design and content, identify areas for improvement, and ultimately increase engagement and conversion.`,
    learnMoreUrl: 'https://trimsy.org/blog/setting-up-google-analytics-fast-and-easy',
  },
  {
    title: 'What Technlogoies do you use whilst developing an Application?',
    description: `Website could be developed in so many ways, without using many technologies to most modern Libraries and Frameworks. We select them based on the application requirements to boost and make your web page look the way you want it any way possible. Our team has practical experience in applying most popular libraries while developing. ReactJS under NextJS is mostly focused upon due to its high reliance and popularity. While Backend or 'server-side' is focused on pure NodeJS (or NestJS) to ensure fast and secure exchange between the sides.`,
  },
  {
    title: 'What is Domain and VPS?',
    description: `It is simple, to host your application, you would need to use Virtual Private Server, it is simply a private computer that runs your application. Domain is the link in the browser to direct user to that computer so they could experience the app in the browser. We provide such service, to get more details get in contact with us.`,
  },
  {
    title: 'What is website security and what measures can be taken to ensure a website is secure?',
    description: `Website security refers to the protection of a website from unauthorized access, use, modification, or destruction. It involves implementing measures to prevent cyberattacks and ensure the confidentiality, integrity, and availability of the website and its data. To ensure a website is secure, measures such as using strong passwords, keeping software up to date, using HTTPS encryption, implementing firewalls, conducting regular backups, and using security plugins can be taken.`,
    learnMoreUrl:
      'https://trimsy.org/blog/website-security-how-to-protect-your-website-and-gain-a-comptetive-edge',
  },
];

Advanced.title = 'Web Advanced';

export default function Advanced({}) {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          {init.isNew && <span className={styles.new}>New</span>}
          <h1 className={styles.product}>{init.name}</h1>
          <span className={styles.pricing}>From ${init.price}</span>
        </div>

        <ContactForm />
      </div>
      <CompareTable />
      <FAQ arr={FAQArr} />
    </div>
  );
}
