import React from 'react';

import styles from './blog.module.scss';

import { Button, LocalNav } from 'components';
import { BlogButton, BlogItem } from 'features/Blog';

import { useFetchBlogs } from 'features/Blog/hooks';
import useAnimateBackgroundPosition from 'hooks/useAnimateEaseInOut';
import axios from 'axios';

Blog.title = 'Blog';
Blog.description = 'Get the latest news about Web, SEO and Design in Trimsy Blog';

export default function Blog({ items }: any) {
  //   const { items, totalPages, currentPage, setPageNumber, incrementPage, decrementPage } =
  //     useFetchBlogs();

  const layouts = [
    {
      count: 1,
      classes: [1],
    },
    {
      count: 2,
      classes: [1, 1],
    },
    {
      count: 3,
      classes: [1, 6, 7],
    },
    {
      count: 4,
      classes: [1, 6, 7, 1],
    },
    {
      count: 5,
      classes: [1, 6, 7, 6, 7],
    },
    {
      count: 6,
      classes: [1, 6, 7, 6, 7, 1],
    },
    {
      count: 7,
      classes: [1, 6, 7, 6, 7, 6, 7],
    },
  ];

  const layout =
    items && items.length > 0 && layouts.find((layout) => layout.count === items.length);

  const currentValue = useAnimateBackgroundPosition(0, -440, 1750, 600);

  return (
    <>
      <div className={styles.wrapper}>
        <h1>Trimsy Blog</h1>

        <LocalNav />

        {/* <div className={styles.intro}>
          <div className={styles.logo}>
            <div className={styles.img}>
              <Image
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: '70%', height: 'auto' }}
                src={Logo}
                alt="HR image"
                loading={'lazy'}
                quality={'100'}
              />
            </div>
            <h2 style={{ backgroundPosition: currentValue && `${currentValue}px 50%` }}>Blog</h2>
          </div>
          {/* <p>Get the latest news about Web, SEO and Design in our Blog.</p> */}
        {/* <p>
            From the latest industry news to in-depth guides and tutorials, our blog has everything
            you need to succeed online and stay ahead of the curve.
          </p> */}
        {/* <div className={styles.background}>
            <ImageUnoptimized
              src={'/static/img/blog/blog-background.jpg'}
              fill
              priority
              alt={'Intro Image'}
            />
          </div> */}
        {/* </div> */}
        <div className={styles.content}>
          {/* <div className={'global-wrapper--small'}>
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
          </div> */}

          <div className={'global-wrapper--small'}>
            <h2 className={styles.headline}>Latest</h2>
            <div className={styles[`grid-items`]}>
              {items &&
                items.length > 0 &&
                (() => {
                  const components = [];
                  for (let i = 0; i < items.length; i++) {
                    const item = items[i];
                    const itemCount: number = layout!.classes[i];

                    // Check if itemCount for current and next items is equal to 2
                    const isFlex =
                      itemCount !== 1 && i + 1 < items.length && layout!.classes[i + 1] !== 1;

                    // Add a flex parent for the two consecutive items with itemCount === 2
                    const itemComponent = (
                      <BlogItem
                        key={item.slug}
                        itemCount={itemCount}
                        slug={item.slug}
                        featured={i === 0}
                        {...item.data}
                      />
                    );

                    if (isFlex) {
                      components.push(
                        <div key={`${item.slug}-flex`} className={styles.flex}>
                          {itemComponent}
                          <BlogItem
                            key={items[i + 1].slug}
                            itemCount={layout!.classes[i + 1]}
                            slug={items[i + 1].slug}
                            {...items[i + 1].data}
                          />
                        </div>,
                      );
                      i++; // Skip the next item if it's already rendered inside the `isFlex` block
                    } else {
                      components.push(itemComponent);
                    }
                  }
                  return components;
                })()}
              {/* <div className={styles.container}>
      {items.map((item, index) => (
        <div key={index} className={gridClasses[items.length][index] + ' ' + styles.item}>
        <BlogItem key={item.slug} slug={item.slug} {...item.data} /
        </div>
      ))}
    </div> */}
            </div>
          </div>
          {/* {totalPages > 1 && (
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
          )} */}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await axios.get(`https://secure.trimsy.org/blogs?page=${1}`);

  const items = res.data.items;

  return {
    props: {
      items,
    },
  };
}
