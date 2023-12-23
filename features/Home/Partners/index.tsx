import React from 'react';

import styles from './Partners.module.scss';
import Link from 'next/link';
import { Button } from 'components';
import clsx from 'clsx';
import Product from '../Product';
import Image from 'next/image';

export default function Careers() {
  return (
    <div className={styles.wrapper}>
      <Link href="/partners" className={styles.link} />
      <div className={styles.copy}>
        <p className={clsx(styles.subtitle, 'typography-hero-product')}>Work with us</p>
        <h2 className={clsx(styles.text, 'typography-headline')}>Partners Program</h2>
        <p className={clsx(styles.text, 'typography-hero-product')}>
          A unique way for you to benefit and grow with us
        </p>
        <div className={clsx(styles.text, styles.buttons)}>
          <Link href="/partners" style={{ marginTop: '15px' }}>
            Learn more
          </Link>
        </div>
        {/* <Product /> */}
        {/* <div className={styles.feather}>
          <Image
            width="139"
            height="141"
            sizes="100vw"
            src={'/static/img/services/feather.png'}
            alt="Feather"
            loading={'lazy'}
            quality={'100'}
          />
        </div> */}
      </div>
    </div>
  );
}
