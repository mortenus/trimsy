import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

import styles from './Influence.module.scss';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import CarouselSlide from './components/CarouselSlide';

const slidesArr = [
  '/static/img/carousel/capacity.jpg',
  '/static/img/carousel/reactChat1.jpg',
  '/static/img/carousel/reactPizza.jpg',
  //   '/static/img/carousel/shiningSun.jpg',
];

const Influence = () => {
  return (
    <section id="portfolio" className={styles.section}>
      <div className={styles.intro}>
        <h2>Believing in seeing</h2>
        <p>Expand trending User Experience with substantial Level Up.</p>
      </div>
      <div className={styles.wrapper}>
        <Swiper
          spaceBetween={0}
          speed={600}
          resistanceRatio={0.1}
          effect="creative"
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          loop={true}
          modules={[Autoplay, Pagination, Navigation]}
          className={styles.item}>
          {slidesArr.map((img) => (
            <SwiperSlide key={img}>
              <CarouselSlide imgUrl={img} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Influence;
