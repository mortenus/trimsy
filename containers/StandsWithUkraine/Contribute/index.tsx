import Image from 'next/image';
import React from 'react';

import styles from './Contribute.module.scss';

import UkraineFlag from '/public/static/img/standsWithUkraine/ukraine-flag.jpg';

const Contribute = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>
        <h2>Contribute to the cause</h2>
        <p>
          Donate to one of the foundations to help people that are forced to live under heavy
          pressure
        </p>
      </div>
      <div className={styles.flag}>
        <div className={styles.img}>
          <Image fill src={UkraineFlag} alt="Ukraine Flag" />
        </div>
        {/* <Image width={400} height={200} src={UkraineFlag} alt="Ukraine Flag" /> */}
      </div>
    </div>
  );
};

export default Contribute;
