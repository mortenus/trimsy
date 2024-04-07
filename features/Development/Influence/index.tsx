import React from 'react';

import styles from './Influence.module.scss';

import { Swiper } from 'components';

const slidesArr = [
  '/static/img/carousel/crownwell.jpg',
  '/static/img/carousel/frickle2.jpg',
  '/static/img/carousel/pizzarellas.png',
  '/static/img/carousel/talentForce.jpg',
  '/static/img/carousel/reactChat1.jpg',
  '/static/img/carousel/capacity.jpg',
  '/static/img/carousel/reactPizza.jpg',
];

const slides = [
  {
    title: 'Crown Well',
    description: 'Online Store with delivery',
    imgUrl: '/static/img/carousel/crownwell.jpg',
    href: 'https://www.figma.com/proto/zsUqHuPjhbO6W9SnNLWp6H/Crown-Well---Store?page-id=0%3A1&type=design&node-id=7-2&viewport=1620%2C2736%2C0.31&t=A5qpxwGR04ynysPJ-1&scaling=min-zoom&mode=design',
  },
  {
    title: 'Chat',
    description: 'Private Chat Application',
    imgUrl: '/static/img/carousel/reactChat1.jpg',
    href: 'https://www.figma.com/proto/2Cn3pu9KRh21YVXrMpG30j/Custom-Chat-Application?page-id=0%3A1&type=design&node-id=7-2&viewport=1617%2C2588%2C0.29&t=6pQCUGfyESFvNMFe-1&scaling=min-zoom&mode=design',
  },
  {
    title: 'Sneapy Pizza',
    description: 'Pizza Store',
    imgUrl: '/static/img/carousel/pizzarellas.png',
    href: 'https://www.figma.com/proto/nQyFomgTSlh2y2SF7fyR87/sneapy-pizza?page-id=0%3A1&type=design&node-id=7-2&viewport=2453%2C4334%2C0.56&t=C9j5uJwY6HmHTOJf-1&scaling=min-zoom&mode=design',
  },
  {
    title: 'Frickle AI',
    description: 'Music AI platform',
    imgUrl: '/static/img/carousel/frickle2.jpg',
    href: 'https://www.figma.com/proto/Kyam2iaerzyKX8qhQKnFKc/Frickle-AI----AI-sounds?page-id=0%3A1&type=design&node-id=7-2&viewport=2120%2C3473%2C0.43&t=DlW6rsVJGL1euDDq-1&scaling=min-zoom&mode=design',
  },
  {
    title: 'Archakov Blog',
    description: 'Personal Blog',
    imgUrl: '/static/img/carousel/pizzarellas.png',
    href: 'https://www.figma.com/proto/07UtzupQqBqThpsHlrCVbb/Archakov-Blog?page-id=0%3A1&type=design&node-id=7-2&viewport=1265%2C1305%2C0.17&t=hhnquoy91Q6dodgG-1&scaling=min-zoom&mode=design',
  },
  {
    title: 'Capacity',
    description: 'Admin Panel for Orders',
    imgUrl: '/static/img/carousel/pizzarellas.png',
    href: 'https://www.figma.com/proto/piAgJAhuFwg58oZRWgCChV/Capacity?page-id=0%3A1&type=design&node-id=7-2&viewport=1265%2C1305%2C0.17&t=YQ1YVIR29d3oYQtP-1&scaling=min-zoom&mode=design',
  },
  {
    title: 'La Piec',
    description: 'Local Pizza Chain',
    imgUrl: '/static/img/carousel/pizzarellas.png',
    href: 'https://www.figma.com/proto/DH9Jb6bewb9nsPQVctkDfI/la.ua?page-id=0%3A1&node-id=11-2&t=5OzNDM0L8ajmX6GD-1',
  },
  {
    title: 'Elit',
    description: 'National University',
    imgUrl: '/static/img/carousel/pizzarellas.png',
    href: 'https://www.figma.com/proto/jpDk1gSHWTJJdAMe7P8Ok4/Elit?page-id=0%3A1&type=design&node-id=7-2&viewport=1265%2C1305%2C0.17&t=osqCgM94B4iqZDey-1&scaling=min-zoom&mode=design',
  },
  {
    title: 'Hantop',
    description: 'Video hosting application',
    imgUrl: '/static/img/carousel/pizzarellas.png',
    href: 'https://www.figma.com/proto/5UqJ1ArNGGD1jYLmAepdSY/Hantop?page-id=0%3A1&type=design&node-id=7-2&viewport=1265%2C1305%2C0.17&t=L2HmyDoFQeOpAyJp-1&scaling=min-zoom&mode=design',
  },
  {
    title: 'Beon',
    description: 'Dentist Clinic',
    imgUrl: '/static/img/carousel/pizzarellas.png',
    href: 'https://www.figma.com/proto/XiFoe8kmlr3WymqpzQW1fZ/Beon-Dentist?page-id=0%3A1&type=design&node-id=7-2&viewport=1265%2C1305%2C0.17&t=AzNUSTMAsnKu3OEt-1&scaling=min-zoom&mode=design',
  },
];

const Influence = () => {
  return (
    <section id="portfolio" className={styles.section}>
      <div className={styles.intro}>
        <h2>Believing in seeing</h2>
        <p>Expand trending User Experience to get the most attention.</p>
      </div>
      <div className={styles.wrapper}>
        <Swiper items={slides} />
      </div>
    </section>
  );
};

export default Influence;
