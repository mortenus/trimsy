import clsx from 'clsx';
import React from 'react';

import styles from './services.module.scss';

import { ContactForm } from 'features/Careers';
import { Button } from 'components';

Services.title =
  'Career Development. Unique resume. Inspiring Cover Letter. Careers opportunities. Quality Personal Branding.';

const servicesDescription = [
  {
    title: 'Resume',
    description:
      'We have designed a way to craft a compelling and professionally formatted resume that highlights your skills, experience, and accomplishments. We tailor each resume to effectively showcase your unique strengths and increase your chances of landing interviews.',
  },
  {
    title: 'Cover Letter',
    description:
      'A well-written and structured Cover Letter can significantly enhance your job application. Our service focuses on creating personalized cover letters that complement your resume, expressing your motivation, qualifications, and suitability for the position.',
  },
  {
    title: 'Careers',
    description:
      'A comprehensive offering that addresses various aspects of professional development. From skill assessment to career planning, we provide guidance and resources to help you navigate your career path effectively.',
  },
  {
    title: 'Career Counseling',
    description:
      'Counseling involves one-on-one sessions with experienced career coaches. We offer personalized guidance, helping you explore career options, set realistic goals, and develop strategies to achieve success in your chosen field.',
  },
  {
    title: 'Job Search Strategy',
    description: `Creating an effective Job Search Strategy is crucial in today's competitive job market. We assist you in developing a targeted approach, identifying potential employers, and leveraging various resources to enhance your job search success.`,
  },
  {
    title: 'Branding',
    description:
      'Personal Branding is essential for career success. We will focuse on building a strong and authentic personal brand. We help you articulate your unique value proposition, both online and offline, to leave a lasting positive impression.',
  },
  {
    title: 'Social Media Management',
    description:
      'We will dedicate your personal managment assistant for the day-to-day management of your social media profiles. We will create engaging content, interact with your audience, and ensure a consistent online presence.',
  },
  {
    title: 'Social Media Marketing',
    description:
      'Social Media Marketing is important way for your business to attract or even retain customers. We develop targeted campaigns to increase brand visibility, drive engagement, and generate leads across various social media platforms.',
  },
  {
    title: 'LinkedIn Optimization',
    description:
      'LinkedIn is a powerful tool for professional networking. We will enhance your profile, making it more attractive to potential employers or clients. We are focusing on highlighting your skills, achievements, and expertise.',
  },
];

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
              <p className={'typography-description'}>
                {servicesDescription.find((obj) => obj.title === selected)?.description}
              </p>
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
        'Career Counseling',
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
