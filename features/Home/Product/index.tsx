import React from 'react';
import Image from 'next/image';

import styles from './Product.module.scss';

import { Card, Cart, ProductItems } from './components';
import clsx from 'clsx';

const Product = () => {
  return (
    <section id="product" className={clsx(styles.product, 'no-index')}>
      <div className={styles.floating}>
        <Card
          title="Nike Kyrie Flytrap IV"
          price={499}
          imageUrl="/static/img/sneakers/12.jpg"
          favorited
          added
        />
      </div>

      <div className={styles.wrapper}>
        <header className={styles.header}>
          <div className={styles.intro}>
            <div className={styles.image}>
              <Image
                fill
                src="/static/img/sneakers/logo.png"
                alt="Logo - Example Web Development Products. Sirol Shop"
              />
            </div>
            <div className={styles.text}>
              <h3>Sirol Shop</h3>
              <p>The shop of extraordinary shoes</p>
            </div>
          </div>
          <ul className={styles.headerLinks}>
            <li>
              <Image
                width={17}
                height={17}
                src="/static/img/sneakers/cart.svg"
                alt="Shopping Cart Icon - Example Web Development Products. Sirol Shop"
              />
              <span>$899</span>
            </li>
            <li>
              <Image
                width={20}
                height={20}
                src={'/static/img/sneakers/heart.svg'}
                alt="Heart Icon"
              />
            </li>
            <li>
              <Image
                width={20}
                height={20}
                src={'/static/img/sneakers/user.svg'}
                alt="User - Example Web Development Products. Sirol Shop"
              />
            </li>
          </ul>
        </header>
        <div className={styles.content}>
          <header className={styles.headline}>
            <h2>{'All shoes'}</h2>
            <div className={styles.searchBlock}>
              <div className={styles.image}>
                <Image
                  className={styles.clear}
                  fill
                  src="/static/img/sneakers/search.svg"
                  alt="Search Icon"
                />
              </div>
              <input placeholder="Search..." disabled />
            </div>
          </header>
          <div className={styles.items}>
            <ProductItems />
          </div>
        </div>
      </div>

      <Cart />
    </section>
  );
};

export default Product;
