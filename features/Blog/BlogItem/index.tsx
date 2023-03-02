import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from './BlogItem.module.scss';

type TBlogItem = {
  date: string;
  title: string;
  text: string;
  img: any;
  link: string;
};

const BlogItem = ({ date, title, text, img, link }: TBlogItem) => {
  return (
    <div className={styles.item}>
      <Link href={link}></Link>
      <div className={styles.imageWrap}>
        <Image className={styles.img} src={img} alt={'blog-cover'} />
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
