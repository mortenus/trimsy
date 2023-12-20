import React from 'react';

import Item from './components/Item';
import styles from './FAQ.module.scss';

type TFAQ = {
  headline?: string;
  arr: {
    title: string;
    description: string;
    learnMoreUrl?: string;
  }[];
};

const FAQ = ({ headline, arr }: TFAQ) => {
  return (
    <section className={styles.wrapper}>
      {headline && (
        <div className={styles.intro}>
          <h2>{headline}</h2>
        </div>
      )}
      {arr.map((item, i) => (
        <Item key={i} title={item.title} learnMoreUrl={item.learnMoreUrl}>
          {item.description}
        </Item>
      ))}
    </section>
  );
};

export default FAQ;
