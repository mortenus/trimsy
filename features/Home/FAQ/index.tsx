import React from 'react';

import Item from './components/Item';
import styles from './FAQ.module.scss';

const FAQ = () => {
  return (
    <section className="global-wrapper">
      <div className={styles.wrapper}>
        <div className={styles.intro}>
          <h2>Questions?</h2>
        </div>
        <Item
          description={
            'Web Development is about software and web design is about visuals. The combination of this both practices provides a great end result \u2013 a well-monetized web application with several thousands of views.'
          }>
          What the difference between web design and development?
        </Item>
        <Item
          description={
            "Website could be developed in so many ways, without using many technologies to most modern Libraries and Frameworks. We select them based on the application requirements to boost and make your web page look the way you want it any way possible. Our team has practical experience in applying most popular libraries while developing. ReactJS under NextJS is mostly focused upon due to its high reliance and popularity. While Backend or 'server-side' is focused on pure NodeJS (or NestJS) to ensure fast and secure exchange between the sides."
          }>
          What Technlogoies do you use whilst developing an Application?
        </Item>
        <Item
          description={
            'It is simple, to host your application, you would need to use Virtual Private Server, it is simply a private computer that runs your application. Domain is the link in the browser to direct user to that computer so they could experience the app in the browser. We provide such service, to get more details get in contact with us.'
          }>
          What is Domain and VPS?
        </Item>
      </div>
    </section>
  );
};

export default FAQ;
