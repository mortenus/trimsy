import React from 'react';

import styles from './Quick.module.scss';
import Image from 'next/image';
import { useOnScroll } from 'hooks/useOnScroll';
import { AdditionalItem } from './HereItem/components';

const Quick = () => {
  const { onScrollEvent } = useOnScroll();

  return (
    <>
      <div className={styles.wrapperImage}>
        <div className={styles.image}>
          <Image
            className={styles.fill}
            src={'/static/img/services/quick.png'}
            alt="Laptop screen with example of a website on it"
            width={1183}
            height={718}
          />
        </div>
      </div>
      <section className={styles.quickWrap}>
        <div className={styles.wrapper}>
          <div className={styles.quick}>
            <div className={styles.title}>
              <h2>Easy.</h2>
              <h2>Quick.</h2>
              <h2>Modern.</h2>
            </div>
            <p className={styles.text}>
              Latest Artificial Intelligence tools made to improve website performance, enhance the
              UI experience and create secure environment.
            </p>
          </div>
          <div className={styles.additional}>
            <AdditionalItem
              offset={250}
              type="ai"
              text={'Artificial Intelligence'}
              imgSrc={'/static/img/services/ai-large.png'}
              onScrollEvent={onScrollEvent}
            />
            <AdditionalItem
              offset={350}
              type="responsive"
              text={'Responsive Design'}
              imgSrc={'/static/img/services/responsive-design-large.png'}
              onScrollEvent={onScrollEvent}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default React.memo(Quick);
