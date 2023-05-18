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
          style={{ margin: '15px 0', fontSize: '400' }}>
          Discover your presence in Web the way you want.
        </p>
        <div className={clsx(styles.text, styles.button)}>
          <Button type="default" to="/development" style={{ fontWeight: '600' }}>
            Learn more
          </Button>
        </div>
        <Product />
      </div>
    </div>
  );
}
