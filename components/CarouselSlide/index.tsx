import React from 'react';

import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';

import styles from './CarouselSlide.module.scss';

type TCarouselSlideProps = {
  imgSrc: string;
  text?: string;
};

const CarouselSlide = ({ imgSrc, text }: TCarouselSlideProps) => (
  <Image className={styles.slide} objectFit="contain" src={imgSrc} alt="Carousel img" fill />
);

export default CarouselSlide;
