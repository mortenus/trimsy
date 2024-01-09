import clsx from 'clsx';
import React from 'react';

import styles from './services.module.scss';

import { ContactForm } from 'features/Careers';
import { Button } from 'components';

Services.title =
  'Career Development. Unique resume. Inspiring Cover Letter. Careers opportunities. Quality Personal Branding.';

export function Services({ servicesArr }: any) {
  const [selected, setSelected] = React.useState<null | string>(null);

  React.useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selected]); // Trigger effect when selectedState changes

  return (
    <div>
      <h1 className={'hidden'}>Trimsy Markeplace Services</h1>
      <section className={clsx(styles.category, 'global-wrapper--small')}>
        {selected ? (
          <>
            <div className={styles[`item-wrapper`]}>
              <h2 className={'typography'} style={{ marginBottom: '15px' }}>
                {selected}
              </h2>
              <Button onClick={() => setSelected(null)} type={'default'}>
                Change
              </Button>
            </div>

            <ContactForm disabled={selected === null} product={selected} />
          </>
        ) : (
          <>
            <h2 className={'typography'}>What do you need help with?</h2>

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
          </>
        )}
      </section>
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
        'Branding',
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
