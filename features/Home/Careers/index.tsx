import React from 'react';

import styles from './Careers.module.scss';
import Link from 'next/link';
import { Button } from 'components';
import clsx from 'clsx';
import Product from '../Product';
import Image from 'next/image';

export default function Careers() {
  return (
    <div className={styles.wrapper}>
      <Link href="/marketplace" className={styles.link} />
      <div className={styles.copy}>
        <h2 className={clsx(styles.text, 'typography-hero-headline')}>Career Development</h2>
        <p
          className={clsx(styles.text, 'typography-hero-product')}
          style={{ margin: '15px 0', padding: '0 10px' }}>
          Save time with expert guidance and elevate your career
        </p>
        <div className={clsx(styles.text, styles.buttons)}>
          <Link href="/marketplace">Learn more</Link>
          <Link href="/marketplace/services">Get started</Link>
        </div>
        {/* <Product /> */}
        <div className={styles.feather}>
          <Image
            width="139"
            height="141"
            sizes="100vw"
            src={'/static/img/services/feather.png'}
            alt="Marketplace Feather Icon"
            loading={'lazy'}
            quality={'100'}
          />
        </div>
      </div>
    </div>
  );
}
