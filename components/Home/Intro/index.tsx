import React from 'react';

import { Banner } from 'components';

import styles from './Intro.module.scss';

const Intro = () => {
  return (
    <>
      <Banner />
      <div id="home" className={styles.wrapper}>
        <h1>Trimsy</h1>
        <h3>Success is near</h3>
        <p>Discover your presence in Web the way you want.</p>
      </div>
    </>
  );
};

export default Intro;
