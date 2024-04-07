import clsx from 'clsx';
import { Button } from 'components';
import useInView from 'hooks/useInView';
import React from 'react';

import styles from './ContactUs.module.scss';

type TContactUs = {
  onScrollEvent: any;
};

const ContactUs = ({ onScrollEvent }: TContactUs) => {
  const ButtonRef = React.useRef(null);
  const { inView: ButtonInView } = useInView({
    ref: ButtonRef,
    onScrollEvent,
    oneTime: true,
  });

  return (
    <section className={styles.potentialWrap} id={'contact'}>
      <div className={styles.wrapper}>
        <div className={styles.potential}>
          <h2>{`Empower your business`}</h2>
          <p>Taking a look at the advantages</p>
          <div className={clsx(styles.button, { [styles.active]: ButtonInView })} ref={ButtonRef}>
            <Button type="nav" to="/development/services">
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
