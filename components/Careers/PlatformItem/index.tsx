import React from 'react';

import styles from './PlatformItem.module.scss';

type TPlatformItem = {
  onScrollEvent: any;
  offSet: number;
  children: React.ReactNode;
};

const PlatformItem = ({ onScrollEvent, offSet, children }: TPlatformItem) => {
  const refer = React.useRef(null);

  const [inView, setInView] = React.useState(false);

  const handleCheckPosition = () => {
    if (!onScrollEvent) return;
    // console.log(
    //   onScrollEvent.target.documentElement.scrollTop,
    //   refer.current.getBoundingClientRect().top - onScrollEvent.target.documentElement.clientHeight,
    // );

    refer.current.getBoundingClientRect().top -
      onScrollEvent.target.documentElement.clientHeight +
      offSet <=
    0
      ? setInView(true)
      : '';

    refer.current.getBoundingClientRect().top -
      onScrollEvent.target.documentElement.clientHeight +
      offSet >=
    0
      ? setInView(false)
      : '';
  };

  React.useEffect(() => {
    handleCheckPosition();
  }, [onScrollEvent]);

  return (
    <div style={{ opacity: inView ? '1' : '0' }} className={styles.item} ref={refer}>
      <p>{children}</p>
    </div>
  );
};

export default React.memo(PlatformItem);
