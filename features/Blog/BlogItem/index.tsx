import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from './BlogItem.module.scss';
import BlogImage from '../Image';
import { useIsVisible } from 'hooks/useIsVisible';

type TBlogItem = {
  date: string;
  title: string;
  description: string;
  imgUrl: any;
  slug: string;
  featured?: boolean;
  itemCount: number;
};

const BlogItem = ({ date, title, description, imgUrl, slug, featured, itemCount }: TBlogItem) => {
  const ref = React.useRef(null);
  const isVisible = useIsVisible({ ref, once: true });

  return (
    <div
      className={clsx(styles.item, styles[`item-${itemCount}`], {
        [styles.visible]: isVisible,
        [styles[`item--featured`]]: featured,
      })}
      ref={ref}>
      <Link href={slug} tabIndex={0} />
      <div className={styles.imageWrap}>
        {/* <Image
          width="0"
          height="0"
          sizes="100vw"
          //   style={{ width: '100%', height: 'auto' }}
          src={imgUrl}
          alt={'blog-cover'}
        /> */}
        <BlogImage url={imgUrl} />
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
