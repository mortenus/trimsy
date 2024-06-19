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
        <h2 className={styles.title}>Sales Manager</h2>

        <span className={styles.date}>Jun 03, 2024</span>

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
          Are you passionate about driving sales and achieving revenue targets? As a Sales Manager
          at Trimsy, you will play a pivotal role in spearheading our sales efforts to expand market
          reach and drive business growth. Your proven experience in sales strategies,
          relationship-building, and leadership will be critical in ensuring Trimsy's success in the
          competitive market. Join us in shaping the future of sales and contribute to the continued
          growth of a globally beloved brand.
        </p>

        <h3>Key Qualifications</h3>

        <ul>
          <li>Proven experience in developing and implementing successful sales strategies.</li>
          <li>
            Strong understanding of market dynamics, customer needs, and effective sales techniques.
          </li>
          <li>
            Exceptional leadership skills to inspire and guide a sales team to achieve and exceed
            targets.
          </li>
          <li>
            Ability to collaborate effectively with cross-functional teams, including marketing,
            product development, and customer support.
          </li>
          <li>Stay current with industry trends and changes in search engine algorithms.</li>
        </ul>

        <h3>Description</h3>
        <p>
          As a Sales Manager, you will lead the development and execution of comprehensive sales
          strategies to enhance Trimsy's revenue streams. Your responsibilities will include setting
          targets, coaching and mentoring the sales team, analyzing market trends, and collaborating
          with other departments to align sales efforts with broader business goals. Be at the
          forefront of sales innovation and contribute to Trimsy's continued success in the
          competitive market.
        </p>

        <h3>Additional Requirements</h3>
        <ul>
          <li>Proven track record of achieving and exceeding sales targets.</li>
          <li>Familiarity with sales tools and platforms for analytics and lead generation.</li>
          <li>
            Excellent communication skills to convey sales strategies and insights to diverse
            stakeholders.
          </li>
          <li>Ability to adapt to evolving market trends and customer preferences.</li>
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
