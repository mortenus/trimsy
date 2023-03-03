import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from './BlogItem.module.scss';

type TBlogItem = {
  date: string;
  title: string;
  text: string;
  imgLink: any;
  slug: string;
};

const BlogItem = ({ date, title, text, imgLink, slug }: TBlogItem) => {
  return (
    <div className={styles.item}>
      <Link href={slug} />
      <div className={styles.imageWrap}>
        <Image
          className={styles.img}
          width="0"
          height="0"
          sizes="100vw"
          //   style={{ width: '100%', height: 'auto' }}
          src={imgLink}
          alt={'blog-cover'}
        />
      </div>
      <div className={styles.text}>
        <span>{date}</span>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default BlogItem;
