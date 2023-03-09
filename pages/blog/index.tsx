import React from 'react';

import styles from './blog.module.scss';

import { Button, ImageUnoptimized } from 'components';
import { BlogButton, BlogItem } from 'features/Blog';

import { useFetchBlogs } from 'features/Blog/hooks';

const itemArr = [
  {
    data: {
      date: 'March 2, 2023',
      title: 'How To Improve SEO of your Website in 5 Steps',
      description:
        'When SEO is set up and used correctly – it could bring lots of new traffic to the web page. It is not complex to accomplish, while optimizing your website could play important part in boosting your search presence. Google receives 90% of all online searches. That’s why we’re going to talk about setting up SEO for Googling and connect to Google Search Console for detailed analysis.',
      imgUrl: 'https://trimsy.org/uploads/1666542894623.jpg',
    },
    slug: '/blog/how-to-improve-seo-of-your-website-in-5-steps',
  },
];

Blog.title = 'Blog';
Blog.description = 'Get the latest news about Web, SEO and Design in Trimsy Blog';

export default function Blog() {
  const { items, totalPages, currentPage, setPageNumber, incrementPage, decrementPage } =
    useFetchBlogs();

  return (
    <div className={styles.wrapper}>
      <div className={styles.intro}>
        <h1>Trimsy Blog</h1>
        <p>Get the latest news about Web, SEO and Design in our Blog</p>
        <div className={styles.background}>
          <ImageUnoptimized
            src={'/static/img/blog/blog-background.jpg'}
            fill
            priority
            alt={'Intro Image'}
          />
        </div>
      </div>
      <div className={styles.content} id="search">
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
            {items.length > 0 &&
              items.map((item) => {
                return <BlogItem key={item.slug} slug={item.slug} {...item.data} />;
              })}
          </div>
          {totalPages > 1 && (
            <div className={styles.nav}>
              <BlogButton type={'nav'} onClick={decrementPage}>
                Prev
              </BlogButton>

              <div className={styles.numbers}>
                {Array.from(Array(totalPages).keys()).map((num: number) => (
                  <BlogButton
                    active={num + 1 === currentPage}
                    key={num + 1}
                    type={'number'}
                    onClick={() => setPageNumber(num + 1)}>
                    {num + 1}
                  </BlogButton>
                ))}
              </div>
              <BlogButton type={'nav'} onClick={incrementPage}>
                Next
              </BlogButton>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
