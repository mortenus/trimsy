import React from 'react';
import { Button } from 'components';

import styles from './Accomplish.module.scss';
import useOnScreen from 'hooks/useOnScreen';

const Accomplish = () => {
  const [scrollHeight, setScrollHeight] = React.useState(0);
  const [scrollMove, setScrollMove] = React.useState<number | boolean>(false);

  const AccomplishRef = React.useRef(null);
  const isVisible = useOnScreen(AccomplishRef);

  const handleScrollHeightChange = () => {
    setScrollHeight(window.scrollY);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScrollHeightChange);

    return () => {
      window.removeEventListener('scroll', handleScrollHeightChange);
    };
  });

  React.useEffect(() => {
    // handleMove();

    if (isVisible) {
      setScrollMove((scrollHeight / 30) * 4);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollHeight]);

  React.useEffect(() => {
    handleScrollHeightChange();
  }, [isVisible]);

  //   const handleMove = () => {
  // if (scrollHeight <= 700) {
  //   setScrollMove(false);
  // }

  // if (scrollHeight >= 1400) {
  //   setScrollMove(true);
  // }

  // if (scrollHeight <= 1600 && scrollHeight >= 400) {
  // if (isVisible) {
  //   const a = (scrollHeight / 30) * 4;
  //   setScrollMove(a);
  // }
  //   };

  return (
    <section
      className={styles.accomplish}
      ref={AccomplishRef}
      style={{
        marginTop:
          scrollMove === false
            ? '-50px'
            : scrollMove === true
            ? '-210px'
            : `${-Math.abs(+scrollMove)}px`,
      }}>
      <div className={styles.text}>
        <h2>Accomplish your goals in one go</h2>
        <p>
          Get a headstart on your journey with advanced functionalities and bring your vision to
          life
        </p>
      </div>
      <Button to="#contact" black>
        Contact us
      </Button>
    </section>
  );
};

export default Accomplish;
