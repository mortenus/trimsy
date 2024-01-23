import React from 'react';

import { Button, ImageUnoptimized } from 'components';
import ModernButton from 'components/Button/Modern';
import { PlatformItem, Potential, ProfessionalItem, ContactForm, Globe } from 'features/Careers';

import { useOnScroll } from 'hooks/useOnScroll';

import styles from './Careers.module.scss';
import Intro from 'features/Careers/Intro';
import Link from 'next/link';
import clsx from 'clsx';
import Image from 'next/image';

Careers.title = 'Careers Opportunities';

Careers.description = `Careers Opportunities. Dare to dream, aspire to achieve, and make your mark as we’re trying best to redefine what's possible for better.`;

const roles = [
  {
    title: 'Sales Manager',
    date: 'Jan 23, 2024',
    location: 'Remote',
    href: '/sales-manager',
  },
  {
    title: 'Marketing Specialist',
    date: 'Jan 09, 2024',
    location: 'Remote',
    href: '/marketing-specialist',
  },
  {
    title: 'Head of SEO',
    date: 'Jan 05, 2024',
    location: 'Remote',
    href: '/head-of-seo',
  },
];

type TCareers = {
  handleFormChange: () => void;
  handleKeyDownOverflowChange: (e: any) => void;
};

export function Careers({ handleFormChange }: TCareers) {
  const { onScrollEvent } = useOnScroll();

  return (
    <>
      <main>
        <h1 style={{ display: 'none', visibility: 'hidden' }}>Trimsy Careers Opportunities</h1>

        <section className={styles[`intro`]}>
          <h5 className={styles[`intro__subtitle`]}>Work at Trimsy</h5>
          <h2 className={styles[`intro__title`]}>Join a team and create with us.</h2>
          <p className={styles[`intro__description`]}>
            Dare to dream, aspire to achieve, and make your mark as we’re trying best to redefine
            what's possible for better.
          </p>
          <Link className={styles[`intro__link`]} href="/careers#roles">
            Learn more
          </Link>
        </section>
        <section className={clsx('global-wrapper--small', styles[`careers-section`])}>
          <h2 className={styles[`careers-section__title`]}>
            Innovation is more than a buzzword for us, a commitment to creating solutions that
            matter.
          </h2>
          <div className={styles[`careers-section__texts`]}>
            <p className={styles[`careers-section__texts__item`]}>
              For everything it take for our dedication to excellence extends beyond the realms of
              technology — we channel our creativity into addressing pressing issues like
              accessibility, equity, privacy, and environmental sustainability.
            </p>
            <p className={styles[`careers-section__texts__item`]}>
              For everything it take for our dedication to excellence extends beyond the realms of
              technology — we channel our creativity into addressing pressing issues like
              accessibility, equity, privacy, and environmental sustainability.
            </p>
          </div>

          <div className={styles[`careers-section__images`]}>
            <div className={styles[`careers-section__images__items`]}>
              <Image
                src={'/static/img/careers/allice.png'}
                width="0"
                height="0"
                sizes="100vw"
                alt={'Avatar Image'}
              />
              <Image
                src={'/static/img/careers/peter.jpg'}
                width="0"
                height="0"
                sizes="100vw"
                alt={'Avatar Image'}
              />
            </div>
            <div className={styles[`careers-section__images__items`]}>
              <Image
                src={'/static/img/careers/mark.png'}
                width="0"
                height="0"
                sizes="100vw"
                alt={'Avatar Image'}
              />
              <Image
                src={'/static/img/careers/gabbie.jpg'}
                width="0"
                height="0"
                sizes="100vw"
                alt={'Avatar Image'}
              />
            </div>
          </div>
        </section>
        <section className={clsx('global-wrapper--small', styles[`roles`])} id={'roles'}>
          <h2 className={styles[`roles-title`]}>Find your perfect role.</h2>
          <div className={styles[`roles__wrap`]}>
            {roles.map((role) => (
              <div className={styles[`roles__wrap-item`]}>
                <div className={styles[`roles__wrap-item-text`]}>
                  <Link
                    className={styles[`roles__wrap-item-text__title`]}
                    href={`/careers${role.href}`}>
                    {role.title}
                  </Link>
                  <span className={styles[`roles__wrap-item-text__date`]}>{role.date}</span>
                </div>
                <p className={styles[`roles__wrap-item__location`]}>{role.location}</p>
                <span className={styles[`roles__wrap-item__link`]} onClick={handleFormChange}>
                  Apply
                </span>
              </div>
            ))}
          </div>
        </section>
        <section className={styles[`get-discovered`]}>
          <div className={'global-wrapper--small'}>
            <h2 className={styles[`get-discovered__title`]}>Get Discovered</h2>
            <p className={styles[`get-discovered__description`]}>
              Share some basic information and submit your resume. If there’s a role that might be a
              good match, an Trimsy recruiter will be in touch.
            </p>
            <Button className={styles[`get-discovered__link`]} onClick={handleFormChange}>
              Start now
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}

export default Careers;
