import clsx from 'clsx';
import React from 'react';

import styles from './ServiceChildren.module.scss';

const Starter = (
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
      <p className={'comparing-table-description'}>1 Page</p>
    </div>
    <div className={clsx(styles['item'], styles['seo'])}>
      <figure
        style={{
          width: '53px',
          height: '42px',
          backgroundSize: '53px 42px',
          backgroundImage: `url('/static/img/services/small-business-seo.png')`,
        }}></figure>

      <h5 className={'comparing-table-headline'}>Small Business SEO</h5>
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
    <div className={clsx(styles['item'], styles['null'])}>&nbsp;</div>
    <div className={clsx(styles['item'], styles['null'])}>&nbsp;</div>
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
          width: '50px',
          height: '67px',
          backgroundSize: '50px 67px',
          backgroundImage: `url('/static/img/services/quality-assurance.png')`,
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

export default Starter;
