import Image from 'next/image';
import React from 'react';

import useInView from 'hooks/useInView';

import styles from './AdditionalItem.module.scss';

type TPlatformItem = {
  onScrollEvent: any;
  offset: number;
  text: string;
  imgSrc: string;
  type: 'ai' | 'responsive';
};

const AdditionalItem = ({ onScrollEvent, text, imgSrc, offset, type }: TPlatformItem) => {
  const ref = React.useRef(null);

  const { inView } = useInView({ ref, onScrollEvent, offset, mobileDisabled: true });

  return (
    <div className={styles.item} style={{ opacity: inView ? '1' : '0' }} ref={ref}>
      <div className={styles[`${type}`]}>
        <Image src={imgSrc} alt={`${text} Image`} fill />
      </div>
      <h4 className={styles.headline}>{text}</h4>
    </div>
  );
};

export default AdditionalItem;
