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
        <h2 className={styles.title}>Marketing Specialist</h2>

        <span className={styles.date}>Jan 09, 2024</span>

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
          Are you a creative thinker with a passion for marketing? Join Apple as a Marketing
          Specialist and play a key role in developing and executing innovative marketing campaigns.
          Be part of a team that thrives on collaboration and innovation, and contribute to the
          success of a brand that is recognized globally.
        </p>

        <h3>Key Qualifications</h3>

        <ul>
          <li>Strong understanding of marketing principles and strategies.</li>
          <li>Creativity and ability to think outside the box for campaign development.</li>
          <li>Excellent communication and interpersonal skills.</li>
          <li>Proficiency in analyzing market trends and consumer behavior.</li>
          <li>Familiarity with digital marketing channels and social media platforms.</li>
        </ul>

        <h3>Description</h3>
        <p>
          As a Marketing Specialist at Apple, you will be responsible for contributing to the
          development and execution of marketing campaigns. This includes collaborating with
          cross-functional teams, analyzing market trends, and implementing creative strategies to
          enhance brand visibility. Your role will involve coordinating marketing activities,
          managing campaign timelines, and leveraging various channels to engage with our audience.
          Join us in creating impactful marketing initiatives and be part of a team that shapes the
          narrative of one of the world's most iconic brands.
        </p>

        <h3>Additional Requirements</h3>
        <ul>
          <li>Previous experience in marketing or a related field is a plus.</li>
          <li>Familiarity with digital marketing tools and platforms.</li>
          <li>Ability to work in a fast-paced environment and adapt to changing priorities.</li>
          <li>Strong organizational skills and attention to detail.</li>
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
