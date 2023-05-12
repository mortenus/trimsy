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
  description?: string;
  imgUrl: any;
  featured?: boolean;
  itemCount?: number;
  customRef?: any;
  type?: string;
  animation?: string | boolean;
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
  type,
  animation = true,
}: TBlogItem) => {
  //   const ref = React.useRef(null);
  const ref = customRef || React.useRef(null);
  const isVisible = useIsVisible({ ref, once: true });

  return slug ? (
    <div
      className={clsx(styles.item, styles[`item-${itemCount}`], {
        [styles.visible]: !animation || isVisible,
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
        {description && <p>{description}</p>}
      </div>
    </div>
  ) : (
    <div
      className={clsx(styles.item, styles[`item-${itemCount}`], {
        [styles.visible]: !animation || isVisible,
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
        {type && (
          <div className={styles.type}>
            <svg
              style={{ height: '15px' }}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.9963 18H7.99627L8.9963 12.1667H5.49622C4.91621 12.1667 4.92621 11.9 5.11621 11.6167C5.30621 11.3333 5.16621 11.55 5.18621 11.5167C6.47624 9.61667 8.41628 6.78333 10.9963 3H11.9964L10.9963 8.83333H14.4964C14.9864 8.83333 15.0564 9.10833 14.9664 9.25833L14.8964 9.38333C10.9563 15.125 8.9963 18 8.9963 18Z"
                fill="#6e6e73"
              />
            </svg>
            {type}
          </div>
        )}
        <h3>{title}</h3>
        <p>{description}</p>
        <span>{date}</span>
      </div>
    </div>
  );
};

export default BlogItem;
