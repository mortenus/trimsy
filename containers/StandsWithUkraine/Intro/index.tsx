import React from 'react';

import { Banner } from 'components';

import styles from './Intro.module.scss';

const Intro = () => {
  return (
    <>
      <div className={styles.intro}>
        <div className={styles.text}>
          <h2>Let&apos;s support the people of Ukraine,</h2>
          <h3>
            any way we <span>can</span>
          </h3>
        </div>
        <p>
          We, at Trimsy, condemn the war in Ukraine. <br /> Join us in helping those in need
        </p>
      </div>
    </>
  );
};

export default Intro;
