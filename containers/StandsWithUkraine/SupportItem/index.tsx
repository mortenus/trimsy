import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import styles from './SupportItem.module.scss';

type TSupportItem = {
  title: string;
  imgUrl: StaticImageData;
  href: string;
};

const SupportItem = ({ title, href, imgUrl }: TSupportItem) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <Image width={500} height={250} src={imgUrl} alt="Supporting Website" />
      </div>
      <Link target={'_blank'} className={styles.link} href={href}>
        {title}
      </Link>
    </div>
  );
};

export default SupportItem;
