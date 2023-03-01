import React from 'react';

import styles from './Here.module.scss';

import HereItem from './HereItem';

const itemsArr = [
  {
    title: 'Contact us',
    description: 'Get assistance through connecting with us.',
    link: {
      title: 'Get in Contact',
      href: '#contact',
    },
  },
  {
    title: 'Get answers',
    description: 'Read detailed articles in the Trimsy Blog.',
    link: {
      title: 'Go to Blog',
      href: '/blog',
    },
  },
];

const Here = () => {
  return (
    <section className={styles.potentialWrap}>
      <div className={styles.wrapper}>
        <div className={styles.potential}>
          <div className={styles.title}>
            <h2>We’re here to help</h2>
          </div>
        </div>
        <div className={styles.additional}>
          {itemsArr.map((item) => (
            <HereItem key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Here);
