import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from './BlogItem.module.scss';
import BlogImage from '../Image';
import { useIsVisible } from 'hooks/useIsVisible';

type TBlogItemBase = {
  date: string;
  title: string;
  description: string;
  imgUrl: any;
  featured?: boolean;
  itemCount: number;
  customRef?: any;
};

interface TBlogItemOnClick extends TBlogItemBase {
  onClick: () => void | Function;
  slug?: never;
}

interface TBlogItemLink extends TBlogItemBase {
  slug: string;
  onClick?: never;
}

type TBlogItem = TBlogItemOnClick | TBlogItemLink;

const BlogItem = ({
  date,
  title,
  description,
  imgUrl,
  slug,
  featured,
  itemCount,
  onClick,
  customRef,
}: TBlogItem) => {
  //   const ref = React.useRef(null);
  const ref = customRef || React.useRef(null);
  const isVisible = useIsVisible({ ref, once: true });

  return slug ? (
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
  ) : (
    <div
      className={clsx(styles.item, styles[`item-${itemCount}`], {
        [styles.visible]: isVisible,
        [styles[`item--featured`]]: featured,
      })}
      ref={ref}
      onClick={onClick}>
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
