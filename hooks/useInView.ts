import React from 'react';

type TUseInView = {
  ref: any;
  onScrollEvent: any;
  offset?: number;
  oneTime?: boolean;
  mobileDisabled?: boolean;
};

export default function useInView({
  ref,
  onScrollEvent,
  offset,
  oneTime = false,
  mobileDisabled,
}: TUseInView) {
  const [inView, setInView] = React.useState(false);

  const [alwaysTrue, setAlwaysTrue] = React.useState(false);

  const [windowWidth, setWindowWidth] = React.useState(0);

  React.useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  React.useEffect(() => {
    if (inView && oneTime) setAlwaysTrue(true);
  }, [inView, oneTime]);

  const handleCheckPosition = () => {
    if (!onScrollEvent) return;

    const currentPositionFromTheBottom =
      ref.current.getBoundingClientRect().top - onScrollEvent.target.documentElement.clientHeight;

    if (offset) {
      return currentPositionFromTheBottom + offset <= 0 ? setInView(true) : setInView(false);
    }

    currentPositionFromTheBottom <= 0 ? setInView(true) : setInView(false);
  };

  React.useEffect(() => {
    handleCheckPosition();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onScrollEvent]);

  if (alwaysTrue) {
    return { inView: true };
  }

  if (mobileDisabled && windowWidth <= 734) {
    return { inView: true };
  }

  return { inView };
}
