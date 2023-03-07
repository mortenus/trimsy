import React from 'react';

import Image from 'next/image';

import styles from './CarouselSlide.module.scss';
import { ImageUnoptimized } from 'components';

type TCarouselSlideProps = {
  imgUrl: string;
  text?: string;
};

const CarouselSlide = ({ imgUrl, text }: TCarouselSlideProps) => (
  <ImageUnoptimized
    // className={styles.slide}
    loading={'lazy'}
    src={imgUrl}
    alt="Carousel img"
    width="0"
    height="0"
    style={{ maxHeight: '60vh', width: '100%', height: 'auto', objectFit: 'cover' }}
  />
  //   <Image className={styles.slide} objectFit="contain" src={imgUrl} alt="Carousel img" fill />
);

export default CarouselSlide;
