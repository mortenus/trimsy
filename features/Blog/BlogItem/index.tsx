import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from './BlogItem.module.scss';

type TBlogItem = {
  date: string;
  title: string;
  description: string;
  imgUrl: any;
  slug: string;
};

const BlogItem = ({ date, title, description, imgUrl, slug }: TBlogItem) => {
  return (
    <div className={styles.item}>
      <Link href={slug} tabIndex={0} />
      <div className={styles.imageWrap}>
        <Image
          className={styles.img}
          width="0"
          height="0"
          sizes="100vw"
          //   style={{ width: '100%', height: 'auto' }}
          src={imgUrl}
          alt={'blog-cover'}
        />
      </div>
      <div className={styles.text}>
        <span>{date}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default BlogItem;
