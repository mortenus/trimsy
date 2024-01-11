import React from 'react';

import styles from './Button.module.scss';
import { TPurpose } from '../index.types';
import clsx from 'clsx';
import { TSeoArr } from './SEOButton.types';

type TButton = {
  onClick: () => void;
  activeType: null | string;
  arr: TSeoArr;
};

const SEOButton = ({ onClick, arr, activeType }: TButton) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [itemActive, setItemActive] = React.useState(false);

  const handleHover = () => {
    if (itemActive) return;
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (itemActive) return;
    setIsHovered(false);
  };

  React.useEffect(() => {
    if (arr.title.toLowerCase() === activeType) {
      setItemActive(true);
      setIsHovered(true);

      return;
    }

    setIsHovered(false);
    setItemActive(false);
  }, [activeType]);

  return (
    <div
      className={styles.item}
      onClick={onClick}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
      style={{
        border: isHovered ? '1px solid #fff' : '1px solid #000',
        color: isHovered ? '#fff' : '#000',
        background: isHovered ? '#000' : '#fff',
      }}>
      <div
        className={styles[`item-headline`]}
        style={{ borderBottom: isHovered ? '1px solid #fff' : '1px solid #000' }}>
        <div className={styles[`item-headline-text`]}>
          {arr.svgLinks?.svgOriginal && arr.svgLinks.svgInverted && (
            <figure
              className={styles.figure}
              style={{
                width: '25px',
                height: '18px',
                backgroundSize: '25px 18px',
                marginRight: '5px',
                backgroundImage: `url('${
                  isHovered ? arr.svgLinks.svgInverted : arr.svgLinks.svgOriginal
                }')`,
              }}></figure>
          )}
          <h5 className={styles[`item-headline-text__title`]}>{arr.title}</h5>
        </div>

        <div className={styles[`item-headline__price`]}>{arr.price && <p>${arr.price}.00</p>}</div>
      </div>

      <ul className={styles[`item-description`]}>
        {arr.keyPoints.map((keyPoint) => (
          <li className={styles.point}>{keyPoint}</li>
        ))}
      </ul>
    </div>
  );
};

export default SEOButton;
