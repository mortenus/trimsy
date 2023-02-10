import React from 'react';

import styles from './Potential.module.scss';

import ProfessionalItem from 'components/Careers/ProfessionalItem';
import ModernButton from 'components/Button/Modern';

import Button from 'components/Button';

type TPotential = {
  onScrollEvent: any;
};

const Potential = ({ onScrollEvent }: TPotential) => {
  //   const potentialRef = React.useRef(null);
  //   const additionalRef = React.useRef(null);

  //   const [potentialInView, setPotentialInView] = React.useState(false);
  //   const [additionalInView, setAdditionalInView] = React.useState(false);

  //   const handleCheckPositionPotential = () => {
  //     if (!onScrollEvent) return;
  //     // console.log(
  //     //   onScrollEvent.target.documentElement.scrollTop,
  //     //   refer.current.getBoundingClientRect().top - onScrollEvent.target.documentElement.clientHeight,
  //     // );

  //     // @ts-ignore
  //     potentialRef.current.getBoundingClientRect().top -
  //       onScrollEvent.target.documentElement.clientHeight +
  //       300 <=
  //     0
  //       ? setAdditionalInView(true)
  //       : '';

  //     // @ts-ignore
  //     potentialRef.current.getBoundingClientRect().top -
  //       onScrollEvent.target.documentElement.clientHeight +
  //       350 >=
  //     0
  //       ? setAdditionalInView(false)
  //       : '';
  //   };

  //   const handleCheckPositionAdditional = () => {
  //     if (!onScrollEvent) return;
  //     // console.log(
  //     //   onScrollEvent.target.documentElement.scrollTop,
  //     //   refer.current.getBoundingClientRect().top - onScrollEvent.target.documentElement.clientHeight,
  //     // );

  //     // @ts-ignore
  //     additionalRef.current.getBoundingClientRect().top -
  //       onScrollEvent.target.documentElement.clientHeight -
  //       200 <=
  //     0
  //       ? setPotentialInView(true)
  //       : '';

  //     // @ts-ignore
  //     additionalRef.current.getBoundingClientRect().top -
  //       onScrollEvent.target.documentElement.clientHeight -
  //       0 >=
  //     0
  //       ? setPotentialInView(false)
  //       : '';
  //   };

  const potentialRef = React.useRef(null);
  const additionalRef = React.useRef(null);

  const [potentialInView, setPotentialInView] = React.useState(false);
  const [additionalInView, setAdditionalInView] = React.useState(false);

  const handleCheckPositionPotential = () => {
    if (!onScrollEvent) return;

    const offset = 200;

    const isSeen =
      // @ts-ignore
      potentialRef.current.getBoundingClientRect().top -
      onScrollEvent.target.documentElement.clientHeight +
      offset;

    isSeen <= 0 ? setPotentialInView(true) : setPotentialInView(false);
  };

  const handleCheckPositionAdditional = () => {
    if (!onScrollEvent) return;

    const offset = 200;

    const isSeen =
      // @ts-ignore
      additionalRef.current.getBoundingClientRect().top -
      onScrollEvent.target.documentElement.clientHeight +
      offset;

    isSeen <= 0 ? setAdditionalInView(true) : setAdditionalInView(false);
  };

  React.useEffect(() => {
    handleCheckPositionPotential();
    handleCheckPositionAdditional();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onScrollEvent]);

  const activeStyles = {
    opacity: 1,
    transform: `translateY(0)`,
  };

  return (
    <section className={styles.potentialWrap}>
      <div className={styles.wrapper}>
        <div ref={potentialRef} className={styles.potential}>
          <div className={styles.title} style={potentialInView ? activeStyles : undefined}>
            <h2>Your potential,</h2>
            <h2>our solution</h2>
          </div>

          <div className={styles.action} style={potentialInView ? activeStyles : undefined}>
            <div className={styles.text}>
              <h4>Fast, targeted recruitment tailored to</h4>
              <h4>your business</h4>
            </div>

            <Button to="#careers-contact" color={'black'}>
              Let&apos;s Talk
            </Button>
          </div>
        </div>
        <div
          ref={additionalRef}
          className={styles.additional}
          style={additionalInView ? activeStyles : undefined}>
          <div className={styles.item}>
            <h6>HR manager</h6>
            <p>Get dedicated help to develop your potential with Trimsy Careers</p>
          </div>
          <div className={styles.item}>
            <h6>24/7</h6>
            <p>Connect with Recruiter. Appoint at any time. We’re here to help.</p>
          </div>
          <div className={styles.item}>
            <h6>Expert consultation</h6>
            <p>Get direct access to recruiting experts on career guidance </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Potential;
