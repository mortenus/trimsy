import { Contribute, Intro, SupportItem } from 'containers/StandsWithUkraine';
import React from 'react';
import Head from 'next/head';

import styles from './stands.module.scss';
import ComeBackAliveJpg from 'public/static/img/standsWithUkraine/comeBackAlive.jpg';
import United24Jpg from 'public/static/img/standsWithUkraine/united24.jpg';
import serhiyPrytulaJpg from 'public/static/img/standsWithUkraine/prytula.jpg';
import breatheFoundationJpg from 'public/static/img/standsWithUkraine/breathe.jpg';
import razomFoundationJpg from 'public/static/img/standsWithUkraine/razom.jpg';
import armySosJpg from 'public/static/img/standsWithUkraine/armysos.jpg';

const linksArr = [
  {
    title: 'Come Back Alive',
    imgUrl: ComeBackAliveJpg,
    href: 'https://savelife.in.ua/en/',
  },
  {
    title: 'United24',
    imgUrl: United24Jpg,
    href: 'https://u24.gov.ua/',
  },
  {
    title: 'Serhiy Prytula Foundation',
    imgUrl: serhiyPrytulaJpg,
    href: 'https://prytulafoundation.org/en',
  },
  {
    title: 'Breathe Charity Foundation',
    imgUrl: breatheFoundationJpg,
    href: 'https://dyhai.org/en/',
  },
  {
    title: 'Razom Foundation',
    imgUrl: razomFoundationJpg,
    href: 'https://www.razomforukraine.org/',
  },
  {
    title: 'ArmySOS',
    imgUrl: armySosJpg,
    href: 'https://armysos.com.ua/',
  },
];

StandsWithUkraine.title = 'Trimsy stands with Ukraine';
export default function StandsWithUkraine() {
  return (
    <>
      <Intro />
      <Contribute />

      <div className={styles.items}>
        {linksArr.map((item, index) => (
          <SupportItem key={index} {...item} />
        ))}
      </div>
    </>
  );
}
