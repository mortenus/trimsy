import React from 'react';
import Image from 'next/image';

import styles from './Product.module.scss';

import { Card, Cart } from 'components';

const arr = [
  {
    id: 1,
    title: 'Nike Blazer Mid Suede',
    price: 300,
    imageUrl: '/static/img/sneakers/1.jpg',
  },
  {
    id: 2,
    title: 'Puma X Aka Boku Future Rider',
    price: 349,
    imageUrl: '/static/img/sneakers/4.jpg',
  },
  {
    id: 3,
    title: 'Under Armour Curry 8',
    price: 349,
    imageUrl: '/static/img/sneakers/5.jpg',
    added: true,
  },
  {
    id: 4,
    title: 'Nike Kyrie 7',
    price: 249,
    imageUrl: '/static/img/sneakers/6.jpg',
  },
  {
    id: 5,
    title: 'Jordan Air Jordan 11',
    price: 499,
    imageUrl: '/static/img/sneakers/7.jpg',
  },
  {
    id: 6,
    title: 'Nike LeBron XVIII',
    price: 499,
    imageUrl: '/static/img/sneakers/8.jpg',
  },
  {
    id: 7,
    title: 'Nike Lebron XVIII Low',
    price: 249,
    imageUrl: '/static/img/sneakers/9.jpg',
  },
  {
    id: 8,
    title: 'Nike Air Jordan 10',
    price: 149,
    imageUrl: '/static/img/sneakers/10.jpg',
  },
];

const Product = () => {
  const [scrollHeight, setScrollHeight] = React.useState(0);
  const [scrollMove, setScrollMove] = React.useState<number | boolean>(false);

  const handleScrollHeightChange = () => {
    setScrollHeight(window.scrollY);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScrollHeightChange);

    return () => {
      window.removeEventListener('scroll', handleScrollHeightChange);
    };
  });

  React.useEffect(() => {
    handleMove();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollHeight]);

  const handleMove = () => {
    if (scrollHeight <= 700) {
      setScrollMove(false);
    }

    if (scrollHeight >= 1400) {
      setScrollMove(true);
    }

    if (scrollHeight <= 1600 && scrollHeight >= 400) {
      const a = (scrollHeight / 30) * 4;
      setScrollMove(a);
    }
  };

  return (
    <section
      id="product"
      className={styles.product}
      style={{
        marginBottom:
          scrollMove === false
            ? '-50px'
            : scrollMove === true
            ? '-200px'
            : `${-Math.abs(+scrollMove)}px`,
      }}>
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
              <Image fill src="/static/img/sneakers/logo.png" alt="logo" />
            </div>
            <div className={styles.text}>
              <h3>Sirol Shop</h3>
              <p>The shop of extraordinary shoes</p>
            </div>
          </div>
          <ul className={styles.headerLinks}>
            <li>
              <Image width={17} height={17} src="/static/img/sneakers/cart.svg" alt="Cart Icon" />
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
              <Image width={20} height={20} src={'/static/img/sneakers/user.svg'} alt="user" />
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
            {arr.map((item, id) => (
              <Card key={id} {...item} />
            ))}
          </div>
        </div>
      </div>

      <Cart />
    </section>
  );
};

export default Product;
