import React from 'react';

import styles from './HereItem.module.scss';

import ModernButton from 'components/Button/Modern';

type TItem = {
  title: string;
  description: string;
  link: {
    title: string;
    href: string;
  };
};

const HereItem = ({ title, description, link }: TItem) => {
  return (
    <div className={styles.item}>
      <h6 className={styles.title}>{title}</h6>
      <p className={styles.description}>{description}</p>

      <ModernButton color={'black'} to={link.href}>
        {link.title}
      </ModernButton>
    </div>
  );
};

export default HereItem;
