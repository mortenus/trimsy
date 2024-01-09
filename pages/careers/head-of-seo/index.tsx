import React from 'react';

import styles from '../Post.module.scss';
import clsx from 'clsx';
import { Button } from 'components';
import Link from 'next/link';

type TPost = {
  handleFormChange: () => void;
  handleKeyDownOverflowChange: (e: any) => void;
};

const index = ({ handleFormChange, handleKeyDownOverflowChange }: TPost) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.headline}>
        <h2 className={styles.title}>Head of SEO</h2>

        <span className={styles.date}>Jan 05, 2024</span>

        <div className={styles.cta}>
          <Button size="small" onClick={handleFormChange}>
            Apply now
          </Button>
        </div>

        <Link href="/careers">Return back</Link>
      </div>
      <section className={clsx('global-wrapper--small', styles.section)}>
        <h3>Summary</h3>
        <p>
          Do you have a passion for elevating online visibility and driving organic growth? As an
          SEO Marketing Manager at Trimsy, you play a pivotal role in optimizing our digital
          presence to reach and engage with a global audience. Your expertise in SEO strategies,
          analytics, and content optimization will be crucial in ensuring Trimsy maintains a strong
          online footprint. Join us in shaping the future of digital marketing and contribute to the
          success of a brand that is beloved worldwide.
        </p>

        <h3>Key Qualifications</h3>

        <ul>
          <li>Proven experience in developing and implementing successful SEO strategies.</li>
          <li>In-depth knowledge of search engine algorithms and ranking factors.</li>
          <li>
            Strong analytical skills to assess SEO performance and identify opportunities for
            improvement.
          </li>
          <li>
            Ability to collaborate effectively with cross-functional teams including content
            creators, developers, and designers.
          </li>
          <li>Stay current with industry trends and changes in search engine algorithms.</li>
        </ul>

        <h3>Description</h3>
        <p>
          As an SEO Marketing Manager, you will lead the development and execution of comprehensive
          SEO strategies to enhance Trimsy's online visibility and drive organic traffic. You'll
          collaborate with content creators to optimize website content, implement on-page and
          off-page SEO techniques, and analyze performance metrics. Your insights will guide
          decision-making, and you'll work closely with cross-functional teams to ensure alignment
          with broader marketing goals. Be at the forefront of digital marketing innovation and
          contribute to Trimsy's continued success in the online space.
        </p>

        <h3>Additional Requirements</h3>
        <ul>
          <li>
            Proven track record of improving organic search performance and increasing rankings.
          </li>
          <li>Familiarity with SEO tools and platforms for analytics and keyword research.</li>
          <li>
            Exceptional communication skills to convey SEO recommendations and insights to diverse
            stakeholders.
          </li>
          <li>Ability to adapt to evolving SEO trends and search engine algorithms.</li>
        </ul>

        <h3>Pay & Benefits</h3>

        <p>
          At Trimsy, we offer a competitive base pay within a determined range, providing
          opportunities for growth and progression as you contribute to the team. Your compensation
          will reflect your skills, qualifications, experience, and location.
        </p>

        <p>
          As an Trimsy employee, you'll have the chance to participate in our employee stock
          programs, becoming a shareholder and enjoying benefits like restricted stock unit awards.
          Take advantage of comprehensive medical and dental coverage, retirement benefits,
          discounts on Trimsy products and services, and reimbursement for eligible educational
          expenses. Additionally, this role may be eligible for bonuses, commissions, and relocation
          support
        </p>

        <p>
          Explore the world of opportunities at Trimsy and be part of a team dedicated to shaping
          the future of technology and marketing. Learn more about Trimsy Benefits.
        </p>

        <div className={styles.note}>
          Note: Trimsy benefit, compensation, and employee stock programs are subject to eligibility
          requirements and other terms outlined in the applicable plan or program.
        </div>

        <div className={styles.cta}>
          <Button size="medium" onClick={handleFormChange}>
            Apply now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default index;
