import React from 'react';

import styles from './Boost.module.scss';

import Button from 'components/Button';

import useInView from 'hooks/useInView';
import { Item } from './components';

type TBoost = {
  onScrollEvent: any;
};

const itemsArr = [
  {
    title: 'SEO',
    description: 'The Search Engine Optimization your website needs for perfect search visibility.',
  },
  {
    title: 'UI and UX',
    description:
      'Getting forward in new UI and UI experience with the help of Artificial Inteligence.',
  },
  {
    title: 'Faster Loading',
    description: 'Ensuring to bring the best loading of pages for users.',
  },
  {
    title: 'Latest Solutions',
    description: 'Latest tech solutions to ensure your website gets to the new level',
  },
];

const Boost = ({ onScrollEvent }: TBoost) => {
  const additionalRef = React.useRef(null);

  const { inView: additionalInView } = useInView({
    ref: additionalRef,
    onScrollEvent,
    offset: 200,
    oneTime: true,
  });

  const activeStyles = {
    opacity: 1,
    transform: `translateY(0)`,
  };

  return (
    <section className={styles.potentialWrap}>
      <div className={styles.wrapper}>
        <div className={styles.potential}>
          <div className={styles.title}>
            <h2 className={'typography-headline'}>Boosting your business with</h2>
            <h2 className={'typography-headline'}>solid presence</h2>
          </div>
        </div>
        <div ref={additionalRef} className={styles.additional}>
          {itemsArr.map((item) => (
            <Item style={additionalInView ? activeStyles : undefined} key={item.title} {...item} />
          ))}
        </div>
        <Button to="/development/services" color="black-inverse" size={'medium'}>
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default React.memo(Boost);
