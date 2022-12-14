import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

import styles from './Influence.module.scss';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import CarouselSlide from 'components/CarouselSlide';

const Influence = () => {
  return (
    <section className={styles.influence}>
      <div className={styles.intro}>
        <h2>Influence the Internet</h2>
        <p>
          Bring your future web application to the next level with competitive UI, friendly SEO and
          fast loading of content to user
        </p>
      </div>
      <div className={styles.wrapper}>
        <Swiper
          spaceBetween={0}
          speed={450}
          resistanceRatio={0.2}
          effect="creative"
          autoplay={{
            // delay: 5000,
            delay: 1000000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          loop={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper">
          <SwiperSlide>
            <CarouselSlide imgSrc={'/static/img/carousel/capacity.jpg'} />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselSlide imgSrc={'/static/img/carousel/reactChat1.jpg'} />
          </SwiperSlide>

          <SwiperSlide>
            <CarouselSlide imgSrc={'/static/img/carousel/reactPizza.jpg'} />
          </SwiperSlide>
          {/* <SwiperSlide><Image src={reactChat2Img} alt='Carousel img' /></SwiperSlide> */}
        </Swiper>
      </div>
    </section>
  );
};

export default Influence;
