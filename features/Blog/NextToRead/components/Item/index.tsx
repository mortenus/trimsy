import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from './Item.module.scss';

const Item = () => {
  return (
    <div className={styles.item}>
      <Link href={'#'} tabIndex={0}>
        <div className={styles.wrap}>
          <div className={styles.img}>
            <Image
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              src={'/uploads/google_analytics_logo.webp'}
              alt={'Image'}
              loading={'lazy'}
            />
          </div>
          <div className={styles.content}>
            <span className={styles.nextDate}>March 09, 2023</span>
            <h4>Setting Up Google Analytics Fast and Easy</h4>
            <p>
              {`Tracking website could give a valuable information on how it is used, how well website keeps visitors on different pages, amd even more. The importance of resource about visitors' actions while interacting with a page could play very important part for any future analysis of website's perfomance or improvements of UI/UX features.`}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Item;
