import clsx from 'clsx';
import React from 'react';

import styles from './ServiceChildren.module.scss';

const Custom = (
  <>
    <div className={clsx(styles['item'], styles['page'])}>
      <figure
        style={{
          width: '49px',
          height: '43px',
          backgroundSize: '49px 43px',
          backgroundImage: `url('/static/img/services/page.png')`,
        }}
      />
      <p className={'comparing-table-description'}>Up to custom pages</p>
    </div>
    <div className={clsx(styles['item'], styles['seo'])}>
      <figure
        style={{
          width: '53px',
          height: '42px',
          backgroundSize: '53px 42px',
          backgroundImage: `url('/static/img/services/custom-seo.png')`,
        }}
      />

      <h5 className={'comparing-table-headline'}>Custom SEO</h5>
      <p className={'comparing-table-description'}>For website visibility in Search Engines</p>
    </div>
    <div className={clsx(styles['item'], styles['seo'])}>
      <figure
        style={{
          width: '54px',
          height: '32px',
          backgroundSize: '54px 32px',
          backgroundImage: `url('/static/img/services/responsive-design.png')`,
        }}></figure>

      <h5 className={'comparing-table-headline'}>Responsive Design</h5>
      <p className={'comparing-table-description'}>
        Adaptivity for different screen sizes and devices
      </p>
    </div>
    <div className={clsx(styles['item'], styles['seo'])}>
      <figure
        style={{
          width: '50px',
          height: '50px',
          backgroundSize: '50px 50px',
          backgroundImage: `url('/static/img/services/ai.png')`,
        }}></figure>

      <h5 className={'comparing-table-headline'}>Artificial Intelligence</h5>
      <p className={'comparing-table-description'}>
        AI tools used to expand the experience and get the best results
      </p>
    </div>
    <div className={clsx(styles['item'], styles['seo'])}>
      <figure
        style={{
          width: '50px',
          height: '50px',
          backgroundSize: '50px 50px',
          backgroundImage: `url('/static/img/services/maintenance-custom.png')`,
        }}
      />

      <h5 className={'comparing-table-headline'}>Maintenance</h5>
    </div>
    <div className={clsx(styles['item'], styles['seo'])}>
      <figure
        style={{
          width: '50px',
          height: '50px',
          backgroundSize: '50px 50px',
          backgroundImage: `url('/static/img/services/third-party.png')`,
        }}></figure>

      <h5 className={'comparing-table-headline'}>Third-Party Integration</h5>
      <p className={'comparing-table-description'}>
        Tools such as shipping carriers or payment gateways
      </p>
    </div>
    <div className={clsx(styles['item'], styles['seo'])}>
      <figure
        style={{
          width: '76px',
          height: '22px',
          backgroundSize: '76px 22px',
          backgroundImage: `url('/static/img/services/deployment.png')`,
        }}></figure>

      <h5 className={'comparing-table-headline'}>Deployment</h5>
    </div>
    <div className={clsx(styles['item'], styles['seo'])}>
      <figure
        style={{
          width: '74px',
          height: '67px',
          backgroundSize: '74px 67px',
          backgroundImage: `url('/static/img/services/quality-assurance-premium.png')`,
        }}></figure>

      <h5 className={'comparing-table-headline'}>Quality Assurance Testing</h5>
    </div>
    <div className={clsx(styles['item'], styles['seo'])}>
      <figure
        style={{
          width: '50px',
          height: '50px',
          backgroundSize: '50px 50px',
          backgroundImage: `url('/static/img/services/accessibility.png')`,
        }}></figure>

      <h5 className={'comparing-table-headline'}>Accessibility</h5>
      <p className={'comparing-table-description'}>
        Ensuring user friendly experience for each user, including those with diverse needs
      </p>
    </div>
  </>
);

export default Custom;
