import React from 'react';

import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';

type TCarouselSlideProps = {
  imgSrc: string;
  text?: string;
};

const CarouselSlide = ({ imgSrc, text }: TCarouselSlideProps) => (
  <Image style={{ padding: '0 100px' }} objectFit="contain" src={imgSrc} alt="Carousel img" fill />
);

export default CarouselSlide;
