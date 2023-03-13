import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from './Item.module.scss';

type TItem = {
  date: string;
  title: string;
  description: string;
  imgUrl: string;
  slug: string;
};

const Item = ({ date, title, description, imgUrl, slug }: TItem) => {
  return (
    <div className={styles.item}>
      <Link href={slug} tabIndex={0}>
        <div className={styles.wrap}>
          <div className={styles.img}>
            <Image
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: '100%' }}
              src={imgUrl}
              alt={'Next To Read Blog Image'}
              loading={'lazy'}
            />
          </div>
          <div className={styles.content}>
            <span className={styles.nextDate}>{date}</span>
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Item;
