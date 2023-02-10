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

    const currentPositionFromTheBottom =
      // @ts-ignore
      refer.current.getBoundingClientRect().top - onScrollEvent.target.documentElement.clientHeight;

    currentPositionFromTheBottom + offSet <= 0 ? setInView(true) : setInView(false);
  };

  React.useEffect(() => {
    handleCheckPosition();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onScrollEvent]);

  return (
    <div style={{ opacity: inView ? '1' : '0' }} className={styles.item} ref={refer}>
      <p>{children}</p>
    </div>
  );
};

export default React.memo(PlatformItem);
