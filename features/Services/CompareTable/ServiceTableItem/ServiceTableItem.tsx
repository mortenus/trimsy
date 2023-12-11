import React from 'react';

import styles from './ServiceTableItem.module.scss';
import clsx from 'clsx';
import { Button } from 'components';
import { TService, TServiceData } from '../CompareTable.types';
import Image from 'next/image';

const ServiceTableItem = ({ service, pricing, href, currentActive, children, icon }: any) => (
  <>
    <div className={clsx(styles['item'], styles['overview'])}>
      <Image src={icon} alt="Icon" width={100} height={75} />

      <h3>{service}</h3>
      <div className={styles.cta}>
        {pricing === null ? (
          <span className={styles.pricing}>{`Custom`}</span>
        ) : (
          <span className={styles.pricing}>{`From $${pricing}`}</span>
        )}
        <Button to={href} size="supersmall">
          Select
        </Button>
        {currentActive === service && <div className={styles.current}>Currently viewing</div>}
      </div>
    </div>
    {children}
  </>
);

export default ServiceTableItem;
