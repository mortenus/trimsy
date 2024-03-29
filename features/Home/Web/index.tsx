import React from 'react';

import styles from './Web.module.scss';
import Link from 'next/link';
import { Button } from 'components';
import clsx from 'clsx';
import Product from '../Product';

export default function Web() {
  return (
    <div className={styles.wrapper}>
      <Link href="/development" className={styles.link} />
      <div className={styles.copy}>
        <h2 className={clsx(styles.text, 'typography-hero-headline')}>Web Development</h2>
        <p
          className={clsx(styles.text, 'typography-hero-product')}
          style={{ margin: '15px 0', padding: '0 10px' }}>
          Boost your business with massive increase in traffic and attention.
        </p>
        <div className={clsx(styles.text, styles.buttons)}>
          <Link href="/development">Learn more</Link>
          <Link href="/development/services">Get started</Link>
          {/* <Button
            type="default"
            to="/development/services"
            style={{ fontWeight: '600', position: 'relative', zIndex: 3, marginLeft: '25px' }}>
            Get started
          </Button> */}
        </div>
        <Product />
      </div>
    </div>
  );
}
