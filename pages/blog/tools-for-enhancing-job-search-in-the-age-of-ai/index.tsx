import React from 'react';
import Image from 'next/image';

import styles from '../Post.module.scss';
import Link from 'next/link';
import BlogWrapper from 'features/Blog/BlogWrapper/enhanced';

const info = {
  title: 'Tools for Enhancing Job Search Efforts and Career Transitions in the Age of AI',
  headerImg: '/uploads/1666542894629.png',
  date: 'August 1, 2023',
  createdAt: '2023-08-01T12:00:00+0000',
  modifiedAt: '2023-08-01T12:00:00+0000',
  minToRead: 4,
  slug: '/blog/tools-for-enhancing-job-search-in-the-age-of-ai',
  description:
    'With the rise of artificial intelligence and its potential impact on job displacement, job seekers and professionals navigating career transitions can find hope in the emergence of generative AI tools.',
  author: {
    fullname: 'Lesia Pylypenko',
    position: '',
    description: ``,
    avatarUrl:
      'https://media.licdn.com/dms/image/D5603AQGPMhZqqpV0iw/profile-displayphoto-shrink_200_200/0/1689187502158?e=1696464000&v=beta&t=5U4M4e3J_fD9MXQORfF0M7vxvJKuM5Di9i1ZIiTVaUI',
    profileUrl: 'https://www.linkedin.com/in/lesia-careers/',
  },
};

const nextToReadArr = [
  {
    date: 'March 2, 2023',
    title: 'How To Improve SEO of your Website in 5 Steps',
    description: `When SEO is set up and used correctly – it could bring lots of new traffic to the web page. It is not complex to accomplish, while optimizing your website could play important part in boosting your search presence. Google receives 90% of all online searches. That’s why we’re going to talk about setting up SEO for Googling and connect to Google Search Console for detailed analysis.`,
    imgUrl: 'https://trimsy.org/uploads/1666542894623.jpg',
    slug: '/blog/how-to-improve-seo-of-your-website-in-5-steps',
  },
  {
    date: 'March 14, 2023',
    title: 'Why Website Security is Important for Your Business',
    description: `Website security is crucial for any business that operates online, regardless of its size or industry. Secure website creates strong connection between the users/audience because trust is one of the main ingredients of successful entity, whether online or offline.`,
    imgUrl: 'https://trimsy.org/uploads/1556542894631.jpg',
    slug: '/blog/website-security-how-to-protect-your-website-and-gain-a-comptetive-edge',
  },
  {
    date: 'March 9, 2023',
    title: 'Setting Up Google Analytics Fast and Easy',
    description: `Tracking website could give a valuable information on how it is used, how well website keeps visitors on different pages, amd even more. The importance of resource about visitors' actions while interacting with a page could play very important part for any future analysis of website's perfomance or improvements of UI/UX features.`,
    imgUrl: 'https://trimsy.org/uploads/google_analytics_logo.webp',
    slug: '/blog/setting-up-google-analytics-fast-and-easy',
  },
];

Post.title = info.title;
Post.description = info.description;

export default function Post() {
  return (
    <BlogWrapper info={info} nextToReadArr={nextToReadArr}>
      <section className={styles.section}>
        <p>
          With the rise of artificial intelligence (AI) and its potential impact on job
          displacement, job seekers and professionals navigating career transitions can find hope in
          the emergence of generative AI tools.
        </p>

        <p>
          These cutting-edge solutions aim to not only improve the quality of job applications but
          also provide valuable support for making informed career choices, including the
          possibility of pursuing new opportunities while leaving a current position.
        </p>

        <p>
          LinkedIn, a prominent professional networking platform, has stepped up its game by
          introducing AI-driven software to assist users in crafting personalized messages addressed
          to hiring managers. This innovative feature, launched between June and July, is part of
          the platform's efforts to ease the challenges associated with connecting with potential
          employers. Premium subscribers now have access to generative AI technology that helps them
          create tailored messages that reflect their professional identity, while still retaining
          the authenticity of their unique voice. By using this AI-powered tool, job seekers can
          significantly improve their chances of landing their desired career opportunities.
        </p>
        <p>
          <Link href="https://www.adzuna.com/prepper">Adzuna</Link>, a leading job search platform,
          has also embraced AI to aid job seekers in their interview preparation journey. Known as
          "Prepper," this interview readiness tool utilizes AI to generate customized interview
          questions based on the specific job description provided by the user. Job seekers then
          provide written responses, and the tool offers valuable feedback and suggestions for
          improvement. With a history of integrating AI,{' '}
          <Link href="https://www.adzuna.com/prepper">Adzuna</Link> has been at the forefront of
          employing natural language processing models in its resume assessment tool since 2014.
        </p>
        <p>
          Prepper serves as a confidence booster for job seekers, helping to alleviate pre-interview
          anxieties by offering a supportive environment for practicing and refining interview
          skills. As a valuable AI-driven resource, it enables individuals to fine-tune their
          interview responses according to the requirements of the company and position they are
          preparing for.
        </p>
        <p>
          Looking ahead, <Link href="https://www.adzuna.com/prepper">Adzuna</Link> is committed to
          further enhancing the capabilities of Prepper by enabling voice-based responses to
          interview questions. This advancement will provide an even more immersive and interactive
          experience for users, ultimately better preparing them for successful interviews.
        </p>
        <p>
          In conclusion, the integration of AI-driven tools by LinkedIn and{' '}
          <Link href="https://www.adzuna.com/prepper">Adzuna</Link> presents a promising landscape
          for job seekers and professionals navigating career transitions. These advanced solutions
          not only streamline the job search process but also empower individuals to make
          well-informed decisions and confidently pursue new opportunities. In the dynamic age of
          AI, harnessing the power of these generative AI tools can be a game-changer for those
          seeking career advancement and personal growth.
        </p>
      </section>
    </BlogWrapper>
  );
}
