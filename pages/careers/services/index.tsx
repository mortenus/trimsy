import clsx from 'clsx';
import React from 'react';

import styles from './services.module.scss';

import { ContactForm } from 'features/Careers';

Services.title = 'Marketplace Services';

export function Services({ servicesArr }: any) {
  const [selected, setSelected] = React.useState<null | string>(null);

  return (
    <div>
      <h1 className={'hidden'}>Trimsy Markeplace Services</h1>
      <section className={clsx(styles.category, 'global-wrapper--small')}>
        <h2>What do you need help with?</h2>

        {servicesArr.map((obj: any) => (
          <>
            <h3>{obj.title}</h3>
            <div className={styles.wrapper}>
              {obj.services.map((serviceName: string) => (
                <div
                  className={clsx(styles.button, { [styles.active]: selected === serviceName })}
                  onClick={() => setSelected(serviceName)}>
                  {serviceName}
                </div>
              ))}
            </div>
          </>
        ))}
      </section>
      <ContactForm disabled={selected === null} type={selected} />
    </div>
  );
}

export async function getStaticProps() {
  const servicesArr = [
    {
      title: 'General',
      services: [
        'Resume',
        'Cover Letter',
        'Careers',
        'Career counseling',
        'Job Search Strategy',
        'Personal Branding',
      ],
    },

    {
      title: 'Social Media',
      services: ['Social Media Management', 'Social Media Marketing', 'LinkedIn Optimization'],
    },
  ];

  return {
    props: { servicesArr },
  };
}

export default Services;
