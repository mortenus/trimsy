import { Button } from 'components';
import Image from 'next/image';
import React from 'react';

import styles from './about.module.scss';

About.title = 'About us';

export default function About() {
  return (
    <section className={styles.introWrap}>
      <div className={styles.wrapper}>
        <div className={styles.intro}>
          <h2>About us</h2>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.platform}>
          <div className={styles.platform_text}>
            <h4>
              Trimsy is a platform for people to bring their professional ideas into reality. We
              provide web design, development, analytics and finding place for new talents. Our team
              will take your ideas and make it happen.
            </h4>
          </div>
        </div>
      </div>

      <div className={styles.background}>
        <Image unoptimized={true} fill src={'/static/img/about/background.jpg'} alt="Intro JPG" />
      </div>
    </section>
  );
}
