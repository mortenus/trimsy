import React from 'react';

import styles from './blog.module.scss';

import { Button } from 'components';
import BlogImg from 'public/static/img/blog/blog-img.jpg';
import BlogImg2 from 'public/static/img/blog/blog-img2.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { BlogButton, BlogItem } from 'components/Blog';

const itemArr = [
  {
    date: 'Dec 5, 2022',
    title: 'SEO HOW IT WORKS AND ETC SDA SA',
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    img: BlogImg,
    link: '/blog/test',
  },
];

Blog.title = 'Blog';

export default function Blog() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.intro}>
        <h2>Trimsy Blog</h2>
        <p>Get the latest news about Web, SEO and Design in our Blog</p>
      </div>
      <div className={styles.content}>
        <div className={styles.wrapper}>
          <div className={styles.search}>
            <svg
              className={styles.icon}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17.1527 15.0943H16.0686L15.6844 14.7238C17.0756 13.1102 17.8403 11.05 17.8388 8.91938C17.8388 7.1553 17.3157 5.43083 16.3356 3.96404C15.3555 2.49726 13.9625 1.35404 12.3327 0.678951C10.7029 0.00386463 8.90949 -0.172769 7.1793 0.171387C5.44911 0.515544 3.85983 1.36503 2.61243 2.61243C1.36503 3.85983 0.515544 5.44911 0.171387 7.1793C-0.172769 8.90949 0.00386463 10.7029 0.678951 12.3327C1.35404 13.9625 2.49726 15.3555 3.96404 16.3356C5.43083 17.3157 7.1553 17.8388 8.91938 17.8388C11.1286 17.8388 13.1595 17.0292 14.7238 15.6844L15.0943 16.0686V17.1527L21.9554 24L24 21.9554L17.1527 15.0943ZM8.91938 15.0943C5.50258 15.0943 2.74443 12.3362 2.74443 8.91938C2.74443 5.50258 5.50258 2.74443 8.91938 2.74443C12.3362 2.74443 15.0943 5.50258 15.0943 8.91938C15.0943 12.3362 12.3362 15.0943 8.91938 15.0943Z"
                fill="black"
              />
            </svg>
            <input type="text" placeholder={'Search Article'} />

            <Button
              style={{
                height: '50px',
                position: 'absolute',
                right: '0',
              }}
              color={'white'}
              size="small"
              type={'search'}
              onClick={() => {}}>
              Search
            </Button>
          </div>

          <div className={styles.blogs}>
            {itemArr.map((item) => {
              return <BlogItem key={item.link} {...item} />;
            })}
          </div>
          <div className={styles.nav}>
            <BlogButton type={'nav'}>Prev</BlogButton>

            <div className={styles.numbers}>
              <BlogButton type={'number'} selected>
                1
              </BlogButton>
              <BlogButton type={'number'}>2</BlogButton>
              <BlogButton type={'number'}>3</BlogButton>
              <BlogButton type={'number'}>4</BlogButton>
              <BlogButton type={'number'}>5</BlogButton>
            </div>
            <BlogButton type={'nav'}>Next</BlogButton>
          </div>
        </div>
      </div>
    </div>
  );
}
