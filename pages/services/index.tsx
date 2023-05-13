import React from 'react';

import styles from './services.module.scss';
import { Card, CompareTable } from 'features/Services';
import { Product } from 'features/Home';
import clsx from 'clsx';
import { Button, SwiperSmall } from 'components';
import Image from 'next/image';

Services.title = 'Web';

export default function Services() {
  return (
    <div>
      <Card
        serviceName="Advanced"
        isNew={true}
        serviceHeadline="Beyond."
        href="/services/advanced"
        imgSrc="/static/img/services/archakovBlog.jpg"
        backgroundColor="#F8F8F8"
      />
      <Card
        serviceName="eCommerce"
        serviceHeadline="Awesome"
        href="/services/ecommerce"
        backgroundColor="#E7F6FF">
        <Product />
      </Card>

      <CompareTable />

      <section className={styles.more}>
        <div className={styles.blog}>
          <h3 className={'typography-headline spacing'}>More from Trimsy</h3>
          <SwiperSmall />
        </div>
        <div className={styles.featured}>
          <h3 className="typography-section-headline">Featured solutions</h3>
          <div className={styles.item}>
            <div className={styles.wrapper}>
              <div className={clsx(styles.column, styles.text__item)}>
                <h4 className={clsx('typography-headline', styles.title__item)}>SEO</h4>
                <p className="typography-description smaller">
                  Attract more traffic to ultimately drive conversions or achieve other business
                  objectives.
                </p>
                <Button type="default" to="/">
                  Get Started
                </Button>
              </div>
            </div>
            <div className={styles.wrapper}>
              <div className={clsx(styles.column, styles.image)}>
                <figure className={styles.seos}></figure>
                {/* <Image
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{
                    width: '100%',
                    height: 'auto',
                    position: 'absolute',
                    right: '20%',
                  }}
                  src={'/static/img/services/seo.png'}
                  alt={'Image'}
                /> */}
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.wrapper}>
              <div className={clsx(styles.column, styles.image)}>
                <figure className={styles.maintenance}></figure>
                {/* <Image
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{
                    width: '60%',
                    height: 'auto',
                    position: 'absolute',
                    left: '40%',
                    // bottom: '0',
                  }}
                  src={'/static/img/services/maintenance-large.png'}
                  alt={'Image'}
                /> */}
              </div>
            </div>
            <div className={styles.wrapper}>
              <div className={clsx(styles.column, styles.text__item)}>
                <h4 className={clsx('typography-headline', styles.title__item)}>Maintenance</h4>
                <p className="typography-description smaller">
                  Ongoing process of management, monitoring and support to remain secure, up-to-date
                  and functioning optimally.
                </p>
                <Button type="default" to="/">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.featured}>
          <h3 className="typography-section-headline">Beyond Trimsy</h3>
          <div className={clsx(styles.item, styles.center)}>
            <div className={clsx(styles.wrapper)}>
              <div className={clsx(styles.column, styles.text__item)}>
                <h4 className={clsx(styles.title__item, styles.logo)}>
                  <figure className={styles.blog__logo}></figure>
                  {/* <Image
                    width="308"
                    height="117"
                    sizes="100vw"
                    style={{ width: '308px', height: '117px' }}
                    src={'/images/Tblog.png'}
                    alt="Trimsy Blog"
                    loading={'lazy'}
                    quality={'100'}
                  /> */}
                </h4>
                <p className={'typography-description bold smaller'}>
                  Read new releases, get updates and latest news.
                </p>
                <Button type="default" to="/blog">
                  Take a look
                </Button>
              </div>
            </div>
          </div>
          <div className={styles.split}>
            <div className={clsx(styles.item, styles.split, styles.black)}>
              <div className={styles.wrapper}>
                <div className={clsx(styles.column, styles.text__item)}>
                  <h4 className={clsx('typography-headline', styles.title__item)}>
                    <div className={styles.img__item}>
                      <Image
                        width="60"
                        height="78"
                        sizes="100vw"
                        style={{
                          width: '60px',
                          height: '78px',
                          position: 'absolute',
                          top: '-60px',
                        }}
                        src={'/static/img/services/lock.png'}
                        alt="Lock Icon"
                        loading={'lazy'}
                        quality={'100'}
                      />
                    </div>
                    Trimsy x Privacy
                  </h4>
                  <p className="typography-description light small">
                    It’s one of our core values. Read about the measures we take to protect the
                    personal information.
                  </p>
                  <Button type="default--bold" to="/privacy-policy">
                    Find more
                  </Button>
                </div>
              </div>
            </div>
            <div className={clsx(styles.item, styles.split)}>
              <div className={styles.wrapper}>
                <div className={clsx(styles.column, styles.text__item)}>
                  <h4 className={clsx('typography-headline', styles.title__item, styles.logo)}>
                    <div className={styles.img__item}>
                      <Image
                        className={styles.feather}
                        width="139"
                        height="141"
                        sizes="100vw"
                        src={'/static/img/services/feather.png'}
                        alt="Feather"
                        loading={'lazy'}
                        quality={'100'}
                      />
                      <Image
                        className={styles.marketplace}
                        width="450"
                        height="78"
                        sizes="100vw"
                        src={'/images/TMarketplace-small.png'}
                        alt="Trimsy Blog"
                        loading={'lazy'}
                        quality={'100'}
                      />
                    </div>
                  </h4>
                  <p className={'typography-description bold small'}>
                    Social Media Management, Careers opportunities and more.
                  </p>
                  <Button type="default" to="/careers">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
