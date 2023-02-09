import clsx from 'clsx';
import React from 'react';

import styles from './ProfessionalItem.module.scss';

type TProfessionalItem = {
  onScrollEvent: any;
  children: string;
  offSet: number;
};

const ProfessionalItem = ({ children, onScrollEvent, offSet = 0 }: TProfessionalItem) => {
  const [text, setText] = React.useState('');
  const [active, setActive] = React.useState(false);

  const handleCodingEffectRun = () => {
    if (text === children) {
      setTimeout(() => {
        setActive(false);
      }, 2000);
    }
    if (!children || text === children) return;

    setActive(true);

    const timeout = setTimeout(() => {
      setText(children.slice(0, text.length + 1));
    }, 60);

    // const timeout2 = setTimeout(() => {
    //   setActive(false);
    // }, children.length);
    return () => {
      clearTimeout(timeout);
      //   clearTimeout(timeout2);
    };
  };

  // Scroll logic

  const refer = React.useRef(null);

  const [inView, setInView] = React.useState(false);

  const handleCheckPosition = () => {
    if (!onScrollEvent) return;

    // @ts-ignore
    refer.current.getBoundingClientRect().top -
      onScrollEvent.target.documentElement.clientHeight +
      offSet <=
    0
      ? setInView(true)
      : '';

    // @ts-ignore
    refer.current.getBoundingClientRect().top -
      onScrollEvent.target.documentElement.clientHeight +
      offSet >=
    0
      ? setInView(false)
      : '';

    // refer.current.getBoundingClientRect().top -
    //   onScrollEvent.target.documentElement.clientHeight +
    //   0 <=
    // onScrollEvent.target.documentElement.scrollTop
    //   ? setInView(true)
    //   : '';
    // refer.current.getBoundingClientRect().top -
    //   onScrollEvent.target.documentElement.clientHeight +
    //   0 >=
    // onScrollEvent.target.documentElement.scrollTop
    //   ? setInView(false)
    //   : '';
  };

  React.useEffect(() => {
    handleCheckPosition();
  }, [onScrollEvent]);

  React.useEffect(() => {
    if (inView) handleCodingEffectRun();

    // To restart component
    // if (!inView) setText('');
  }, [inView, text]);

  return (
    <span ref={refer} className={clsx(styles.text, { [styles.active]: active })}>
      {text}
    </span>
  );
};

export default ProfessionalItem;
