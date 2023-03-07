import React from 'react';
import { useSpring, animated } from 'react-spring';

type TNumberCounter = {
  endValue: number;
};

function NumberCounter({ endValue }: TNumberCounter) {
  const { number } = useSpring({
    from: { number: 0 },
    to: { number: endValue },
    config: {
      duration: 2000, // total duration of the animation
      easing: (t: number) => {
        // custom easing function
        if (t < 0.2) return t * 5; // ease at the start
        if (t > 0.8) return (1 - t) * 5 + 1; // ease at the end
        return 1; // rapid increase in the middle
      },
    },
    reset: true,
  });

  React.useEffect(() => {
    number.start();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <animated.span>{number.to((n) => n.toFixed(0))}</animated.span>;
}

export default NumberCounter;
