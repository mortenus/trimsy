import React from 'react';

import { useIsVisible } from 'hooks/useIsVisible';
import useResize from './hooks/useResize';
import useSwiper from './hooks/useSwiper';
import { BlogItem } from 'features/Blog';

import styles from './SwiperSmall.module.scss';

type SwiperProps = {};

const items = [
  {
    data: {
      date: 'April 17, 2023',
      title:
        'Bridging Borders with Humanity: How Trimsy x Hart Facilitates Humanitarian Aid for Ukrainians',
      imgUrl: '/uploads/1556542894645.jpg',
    },
    modal:
      '/blog/briding-borders-with-humanity-how-trimsy-x-hart-facilitates-humanitarian-aid-for-ukranians',
    slug: '/blog/briding-borders-with-humanity-how-trimsy-x-hart-facilitates-humanitarian-aid-for-ukranians',
    type: 'QUICK READ',
  },
  {
    data: {
      date: 'March 14, 2023',
      title: 'Website Security: How to Protect Your Website and Gain a Competitive Edge',
      description:
        'Website security is crucial for any business that operates online, regardless of its size or industry. Secure website creates strong connection between the users/audience because trust is one of the main ingredients of successful entity, whether online or offline.',
      imgUrl: 'https://trimsy.org/uploads/1556542894631.jpg',
      hashtags: ['Web', 'Dev', 'Security'],
    },
    slug: '/blog/website-security-how-to-protect-your-website-and-gain-a-comptetive-edge',
  },
  {
    data: {
      date: 'March 12, 2023',
      title: 'How To Create a Winning Social Media Strategy for Your Website',
      description:
        'Creating a winning social media strategy is a crucial component of any successful website marketing plan. It gives confident opportunities for a website grown and expansion.',
      imgUrl: 'https://trimsy.org/uploads/1556542894629.jpg',
      hashtags: ['Web', 'Social Media'],
    },
    slug: '/blog/how-to-create-a-winning-social-media-strategy',
  },
  {
    data: {
      date: 'March 9, 2023',
      title: 'Setting Up Google Analytics Fast and Easy',
      description:
        "Tracking website could give a valuable information on how it is used, how well website keeps visitors on different pages, amd even more. The importance of resource about visitors' actions while interacting with a page could play very important part for any future analysis of website's perfomance or improvements of UI/UX features.'",
      imgUrl: 'https://trimsy.org/uploads/google_analytics_logo.webp',
      hashtags: ['Web', 'Dev'],
    },
    slug: '/blog/setting-up-google-analytics-fast-and-easy',
  },
  {
    data: {
      date: 'March 2, 2023',
      title: 'How To Improve SEO of your Website in 5 Steps',
      description:
        'When SEO is set up and used correctly – it could bring lots of new traffic to the web page. It is not complex to accomplish, while optimizing your website could play important part in boosting your search presence. Google receives 90% of all online searches. That’s why we’re going to talk about setting up SEO for Googling and connect to Google Search Console for detailed analysis.',
      imgUrl: 'https://trimsy.org/uploads/1666542894623.jpg',
      hashtags: ['Web', 'Dev'],
    },
    slug: '/blog/how-to-improve-seo-of-your-website-in-5-steps',
  },
];

const SwiperSmall: React.FC<SwiperProps> = () => {
  const ref = React.useRef(null);
  const isVisible = useIsVisible({ ref });

  const {
    activeIndex,
    prevIndex,
    nextIndex,
    handlePrev,
    handleNext,
    handlePlayPause,
    isPlaying,
    handlePaginationClick,
  } = useSwiper({ items, autoPlayDuration: 3500, isVisible });

  const size = useResize();

  return (
    <>
      <div className={styles.swiper} ref={ref}>
        <div
          className={styles['swiper-wrapper']}
          style={{
            transform: `translate3d(${activeIndex * (size !== null ? -size : 0)}px, 0px, 0px)`,
            transition: `transform 0.7s cubic-bezier(0.645, 0.045, 0.355, 1) 0s`,
          }}>
          {items.map((item, index) => (
            <div
              key={index}
              className={[
                styles['swiper-slide'],
                index === prevIndex && styles['prev'],
                index === nextIndex && styles['next'],
                index === activeIndex && styles['active'],
              ]
                .filter(Boolean)
                .join(' ')}
              style={{
                transform: `translate(${index * (size !== null ? size : 0)}px, 0px)`,
              }}>
              <BlogItem
                key={item.slug}
                slug={item.slug}
                itemCount={0}
                // onClick={() => {}}
                // customRef={!item.slug && toNotCloseRef}
                featured={false}
                animation={false}
                // type={item.type && item.type}
                {...item.data}
              />
            </div>
          ))}
        </div>

        <ul className={styles.buttons}>
          <li className={styles.prevButton} onClick={handlePrev}>
            <div className={styles.arrow}>
              <svg
                // className={styles.arrow}
                style={{
                  rotate: '90deg',
                  width: '28.33333333333333',
                  height: '16.66666666666667',
                  color: '#eee',
                }}
                width="34"
                height="20"
                viewBox="0 0 34 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M34 3.01486L17 20L0 3.01486L3.0175 0L17 13.9703L30.9825 0L34 3.01486Z"
                  fill="white"
                />
              </svg>
              <button></button>
            </div>
          </li>
          <li className={styles.nextButton} onClick={handleNext}>
            <div className={styles.arrow}>
              <svg
                // className={styles.arrow}
                style={{
                  rotate: '270deg',
                  width: '28.33333333333333',
                  height: '16.66666666666667',
                }}
                width="34"
                height="20"
                viewBox="0 0 34 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M34 3.01486L17 20L0 3.01486L3.0175 0L17 13.9703L30.9825 0L34 3.01486Z"
                  fill="white"
                />
              </svg>
              <button></button>
            </div>
          </li>
        </ul>
      </div>
      {/* <button className={styles.playButton} onClick={handlePlayPause}>
        {!isPlaying ? (
          <svg
            style={{ position: 'relative', left: '1px' }}
            width="11"
            height="14"
            viewBox="0 0 11 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.525 13.0248C1.19167 13.2415 0.854333 13.2542 0.513 13.0628C0.171666 12.8715 0.000666667 12.5755 0 12.1748V1.82485C0 1.42485 0.171 1.12885 0.513 0.936846C0.855 0.744846 1.19233 0.757512 1.525 0.974846L9.675 6.14985C9.975 6.34985 10.125 6.63318 10.125 6.99985C10.125 7.36651 9.975 7.64985 9.675 7.84985L1.525 13.0248Z"
              fill="white"
            />
          </svg>
        ) : (
          <svg
            width="12"
            height="14"
            viewBox="0 0 12 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M0 14H4V0H0V14ZM8 0V14H12V0H8Z" fill="white" />
          </svg>
        )}
      </button> */}
      {/* <div className={styles['swiper-pagination']}>
        {images.map((_, index) => (
          <div
            key={index}
            className={[
              styles['swiper-pagination-bullet'],
              index === activeIndex && styles['active'],
            ]
              .filter(Boolean)
              .join(' ')}
            onClick={handlePaginationClick(index)}
          />
        ))}
      </div> */}
    </>
  );
};

export default SwiperSmall;
