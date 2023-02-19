import React from 'react';
import { Button } from 'components';

import styles from './Accomplish.module.scss';
import useInView from 'hooks/useInView';
import useAccomplish from 'hooks/useAccomplish';

type TAccomplish = {
  onScrollEvent: any;
};

const Accomplish = ({ onScrollEvent }: TAccomplish) => {
  const AccomplishRef = React.useRef(null);
  const { inView: AccomplishInView } = useInView({
    ref: AccomplishRef,
    onScrollEvent,
    offset: 200,
  });

  const { scrollMove } = useAccomplish({ onScrollEvent, AccomplishInView });

  return (
    <section
      className={styles.content}
      ref={AccomplishRef}
      style={{
        transform: `translate3d(0px, ${
          !scrollMove ? '-100' : -Math.abs(+scrollMove / 7.5)
        }px, 0px)`,
        willChange: 'transform',
        transformStyle: 'preserve-3d',
      }}>
      <div
        className={styles.wrapper}
        style={{
          transform: `translate3d(0px, ${
            !scrollMove ? '-100' : -Math.abs(+scrollMove / 8.5)
          }px, 0px)`,
          willChange: 'transform',
          transformStyle: 'preserve-3d',
        }}>
        <div className={styles.text}>
          <h2>Accomplish your goals in one go</h2>
          <p>
            Get a headstart on your journey with advanced functionalities and bring your vision to
            life
          </p>
        </div>
        <Button to="#contact" color="black">
          Contact us
        </Button>
      </div>
    </section>
  );
};

export default Accomplish;
