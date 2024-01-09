import React from 'react';

import styles from './Button.module.scss';
import { TPurpose } from '../index.types';
import clsx from 'clsx';

type TButton = {
  onClick: () => void;
  title: string;
  description?: string;
  type: TPurpose;
  activeType: TPurpose;
};

const Button = ({ onClick, title, description, type, activeType }: TButton) => {
  return (
    <div
      className={clsx(styles[`item`], { [styles.active]: type === activeType })}
      onClick={onClick}>
      <h3 className={styles[`item-title`]}>{title}</h3>
      <p className={styles[`item-description`]}>{description}</p>
    </div>
  );
};

export default Button;
