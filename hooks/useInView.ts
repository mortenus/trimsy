import React from 'react';

type TUseInView = {
  ref: any;
  onScrollEvent: any;
  offset?: number;
  oneTime?: boolean;
};

export default function useInView({ ref, onScrollEvent, offset, oneTime = false }: TUseInView) {
  const [inView, setInView] = React.useState(false);

  const [alwaysTrue, setAlwaysTrue] = React.useState(false);

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

  return { inView };
}
