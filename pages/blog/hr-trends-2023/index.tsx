import React from 'react';
import Image from 'next/image';

import BlogWrapper from 'features/Blog/BlogWrapper';

import styles from '../Post.module.scss';

const info = {
  title: 'Human Resources Trends in 2023 ',
  headerImg: '/uploads/1556542894632.jpeg',
  date: 'March 27, 2023',
  createdAt: '2023-03-27T12:00:00+0000',
  modifiedAt: '2023-03-27T12:00:00+0000',
  minToRead: 5,
  slug: '/blog/hr-trends-2023',
  author: {
    fullname: 'Lesia Pylypenko',
    position: 'Owner',
    description: `'Hiring for attitude over skill is not a thing in the real world. For experienced roles, qualification is expected!'`,
    avatarUrl:
      'https://media.licdn.com/dms/image/D5603AQGVaopcwwlJpA/profile-displayphoto-shrink_200_200/0/1679896676522?e=1685577600&v=beta&t=SuM7T5dOuMgQ5wUgq9m-avPK47xnIaaLfzB8drpjPho',
    profileUrl: 'https://www.linkedin.com/in/lesia-careers/',
  },
  description:
    'The field of HR is constantly evolving, driven by advances in technology, changes in the workforce demographics, and shifting cultural norms. Here are some of the potential future developments in HR:',
};

const nextToReadArr = [
  {
    date: 'March 9, 2023',
    title: 'Setting Up Google Analytics Fast and Easy',
    description: `Tracking website could give a valuable information on how it is used, how well website keeps visitors on different pages, amd even more. The importance of resource about visitors' actions while interacting with a page could play very important part for any future analysis of website's perfomance or improvements of UI/UX features.`,
    imgUrl: 'https://trimsy.org/uploads/google_analytics_logo.webp',
    slug: '/blog/setting-up-google-analytics-fast-and-easy',
  },
  {
    date: 'March 14, 2023',
    title: 'Why Website Security is Important for Your Business',
    description: `Website security is crucial for any business that operates online, regardless of its size or industry. Secure website creates strong connection between the users/audience because trust is one of the main ingredients of successful entity, whether online or offline.`,
    imgUrl: 'https://trimsy.org/uploads/1556542894631.jpg',
    slug: '/blog/why-website-security-is-important-for-your-business',
  },
  {
    date: 'March 12, 2023',
    title: 'How To Create a Winning Social Media Strategy for Your Website',
    description: `Creating a winning social media strategy is a crucial component of any successful website marketing plan. It gives confident opportunities for a website grown and expansion.`,
    imgUrl: 'https://trimsy.org/uploads/1556542894629.jpg',
    slug: '/blog/how-to-create-a-winning-social-media-strategy',
  },
];

Post.title = info.title;
Post.description = info.description;

export default function Post() {
  return (
    <BlogWrapper info={info} nextToReadArr={nextToReadArr}>
      <section className={styles.section}>
        <p>
          The field of HR is constantly evolving, driven by advances in technology, changes in the
          workforce demographics, and shifting cultural norms.
        </p>

        <p>Here are some of the potential future developments in HR:</p>

        <h3>Emphasis on employee experience</h3>
        <p>
          In recent years, there has been a growing focus on employee experience, with companies
          recognizing the importance of creating a positive workplace culture and providing
          employees with meaningful work and opportunities for growth.
        </p>
        <p>
          In the future, we can expect this trend to continue, with HR departments playing a key
          role in creating and maintaining a positive employee experience.
        </p>

        <h3> Increased use of AI and automation</h3>

        <p>
          As AI and automation technologies become more sophisticated, we can expect to see HR
          departments using these tools to streamline processes and improve efficiency.
        </p>
        <p>
          For example, AI-powered recruiting software can help to screen resumes and identify the
          most promising candidates, while chatbots can handle routine HR inquiries and tasks.
        </p>

        <h3>Greater emphasis on diversity, equity, and inclusion (DEI)</h3>

        <p>
          In recent years, there has been a growing recognition of the importance of DEI in the
          workplace.
        </p>
        <p>
          Going forward, we can expect HR departments to take an even more proactive role in
          promoting DEI initiatives and creating inclusive workplace cultures.
        </p>

        <h3>Hybrid work arrangements</h3>
        <div className={styles.img}>
          <Image
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: '70%', height: 'auto' }}
            src={'/uploads/1556542894633.jpg'}
            alt="HR image"
            loading={'lazy'}
            quality={'100'}
          />
        </div>
        <p>
          The COVID-19 pandemic has accelerated the trend toward remote work, and many companies are
          now adopting hybrid work arrangements that combine remote and in-person work.
        </p>
        <p>
          HR departments will need to adapt to these new arrangements, ensuring that they are fair
          and equitable for all employees.
        </p>

        <h3>Remote work will continue to be prevalent </h3>
        <p>
          The pandemic has accelerated the trend towards remote work, and it's likely that many
          companies will continue to offer flexible work arrangements in 2023.
        </p>
        <p>
          This will require HR teams to adapt their policies and processes to accommodate remote
          workers and ensure that they remain engaged and productive.
        </p>

        <h3>Employee wellness and mental health will become a top priority</h3>
        <p>
          The pandemic has highlighted the importance of mental health and wellness, and many
          companies are investing in employee wellness programs and resources.
        </p>
        <p>
          In 2023, HR teams will continue to prioritize employee well-being and seek new ways to
          support their mental and physical health.
        </p>

        <h3>Automation and AI will transform HR processes</h3>
        <p>
          Automation and AI are already being used in many HR functions, such as recruiting and
          onboarding.
        </p>
        <p>
          In 2023, we can expect to see more HR tasks being automated, freeing up HR professionals
          to focus on strategic initiatives.
        </p>

        <h3>Focus on upskilling and reskilling</h3>
        <p>
          As automation and AI continue to transform the workplace, there will be a growing need for
          employees to acquire new skills and knowledge.
          <p>
            HR departments will need to play a key role in identifying skill gaps and providing
            training and development opportunities to ensure that employees are prepared for the
            jobs of the future.
          </p>
          <p>
            The skills needed for many jobs are changing rapidly, and employees will need to
            continually upskill and reskill to remain competitive.
          </p>
        </p>
        <p>
          HR teams will need to develop training and development programs that help employees
          acquire new skills and advance in their careers.
        </p>

        <h3>Resume</h3>
        <p>
          In summary, the future of HR will be characterized by a focus on creating positive
          employee experiences, greater use of technology and automation, a continued emphasis on
          DEI, the adoption of hybrid work arrangements, and a growing focus on upskilling and
          reskilling.
        </p>
        <p>
          These are just a few potential HR trends for 2023. As the workplace continues to evolve,
          HR teams will need to stay up-to-date on the latest trends and technologies to remain
          effective and relevant.
        </p>
      </section>
    </BlogWrapper>
  );
}
