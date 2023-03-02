import React from 'react';

import styles from './Item.module.scss';

type TItem = {
  description: string;
  children: React.ReactNode;
};

const Item = ({ description, children }: TItem) => {
  const [open, setOpen] = React.useState(false);

  const handleOpenChange = () => setOpen(!open);

  return (
    <div className={styles.wrapper} onClick={handleOpenChange}>
      <div className={styles.header}>
        <h4 className={styles.headline}>{children}</h4>
        <svg
          className={styles.arrow}
          style={{ rotate: open ? '180deg' : '0deg' }}
          width="34"
          height="20"
          viewBox="0 0 34 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M34 3.01486L17 20L0 3.01486L3.0175 0L17 13.9703L30.9825 0L34 3.01486Z"
            fill="white"
          />
        </svg>
      </div>

      {open && (
        <p className={styles.description} style={{ height: `${open ? '100%' : '0'}` }}>
          {description}
        </p>
      )}
    </div>
  );
};

export default Item;
