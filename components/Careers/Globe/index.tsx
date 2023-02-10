import Image from 'next/image';
import React from 'react';

import styles from './Globe.module.scss';

import GlobeJPG from '/public/static/img/careers/globe.jpg';

type TGlobe = {
  onScrollEvent: any;
};

const Globe = ({ onScrollEvent }: TGlobe) => {
  const globeRef = React.useRef(null);

  const [inView, setInView] = React.useState(false);
  const [globeToMoveVal, setGlobeToMoveVal] = React.useState(0);

  const handleCheckPosition = () => {
    if (!onScrollEvent) return;

    const isSeen =
      // @ts-ignore
      globeRef.current.getBoundingClientRect().top -
      onScrollEvent.target.documentElement.clientHeight;

    isSeen <= 0 ? setInView(true) : setInView(false);
  };

  const handleMove = () => {
    if (!inView) return;

    const scrolledVal =
      // @ts-ignore
      (globeRef.current.offsetTop -
        onScrollEvent.target.documentElement.clientHeight -
        window.document.documentElement.scrollTop) /
      3.5;

    setGlobeToMoveVal(scrolledVal);
  };

  React.useEffect(() => {
    handleCheckPosition();
    handleMove();

    handleUpdate();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onScrollEvent]);

  const [globeOpacity, setGlobeOpacity] = React.useState(0);

  const handleUpdate = () => {
    // @ts-ignore
    const number = ((globeToMoveVal / globeRef.current.offsetHeight) * 100) / 55 + 1;
    const parsedNumber = Math.min(Math.max(number, 0), 1);
    setGlobeOpacity(parsedNumber);
  };

  return (
    <section className={styles.globeWrap} ref={globeRef}>
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <p>We provide infinite storytelling</p>
          <p>through the fusion of vacancies</p>
          <p>in countries like Canada, Ukraine,</p>
          <p>the US, and Europe,technology and creativity.</p>
        </div>
      </div>
      <Image
        style={{ transform: `matrix(1, 0, 0, 1, 0, ${globeToMoveVal})`, opacity: globeOpacity }}
        fill
        src={GlobeJPG}
        unoptimized={true}
        alt="Globe"
      />
    </section>
  );
};

export default Globe;
