import { Button, ImageUnoptimized } from 'components';
import IntroItem from 'features/About/Intro/Item';
import React from 'react';

import styles from './about.module.scss';

const itemArr = [
  {
    number: 18,
    title: 'Successful fulfillment of orders',
  },
  {
    number: 1,
    title: 'years of experience',
  },
  {
    number: 5,
    title: 'collaborations a week',
  },
];

About.title = 'About us';

export default function About() {
  return (
    <>
    <h1>Trimsy</h1>
      <section className={styles.introWrap}>
        <div className="global-wrapper ">
          <div className={styles.intro}>
            <h2>About us</h2>
          </div>
          <div className={styles.platform}>
            <div className={styles.platform_text}>
              <h4>
                Trimsy is a platform for people to bring their professional ideas into reality.
              </h4>
              <h4>
                We provide web design, development, analytics and finding place for new talents.
              </h4>
              <h4>Our team will take your ideas and make it happen.</h4>
            </div>
          </div>

          <div className={styles.blocks}>
            {itemArr.map((item) => (
              <IntroItem key={item.title} {...item} />
            ))}
          </div>
        </div>

        <div className={styles.background}>
          <ImageUnoptimized
            src={'/static/img/about/background.jpg'}
            fill
            priority
            alt={'Intro Image'}
          />
        </div>
        <div className={styles.vision}>
          <div className={'global-wrapper'}>
            <h3>Vision</h3>
            <h5>Trimsy is a platform for people to bring their professional ideas into reality.</h5>
            <h5>
              We provide web design, development, analytics and finding place for new talents.
            </h5>
            <h5>Our team will take your ideas and make it happen.</h5>
          </div>
        </div>
      </section>
    </>
  );
}
