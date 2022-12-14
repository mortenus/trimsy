import React from 'react';
import { Button } from 'components';

import styles from './Accomplish.module.scss';

const Accomplish = () => {
  return (
    <section className={styles.accomplish}>
      <div className={styles.text}>
        <h2>Accomplish your goals in one go</h2>
        <p>
          Get a headstart on your journey with advanced functionalities and bring your vision to
          life
        </p>
      </div>
      <Button to="#contact" black>
        Contact us
      </Button>
    </section>
  );
};

export default Accomplish;
