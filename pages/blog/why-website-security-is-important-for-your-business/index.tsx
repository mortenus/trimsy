import { ImageUnoptimized } from 'components';
import BlogWrapper from 'features/Blog/BlogWrapper';
import Image from 'next/image';
import React from 'react';

import styles from '../Post.module.scss';

const info = {
  title: 'Why Website Security is Important for Your Business',
  headerImg: '/uploads/1556542894631.jpg',
  date: 'March 14, 2023',
  createdAt: '2023-03-14T12:00:00+0000',
  modifiedAt: '2023-03-14T12:00:00+0000',
  minToRead: 6,
  slug: '/blog/why-website-security-is-important-for-your-business',
  author: {
    fullname: 'Oleksii Pylypenko',
    position: 'CEO',
    description: `I'm a CEO and a Co-Founder of Trimsy. I deeply appreciate the encouragment and
  mutual benefit from the associates I am given a chance to have a journey with. We are
  thinkers and doers, difficulties could be challanging, but that is the beauty of it.
  Doing things with speed does not mean doing them imperfectly, the only way to not fall
  back - is to go forward.`,
    avatarUrl:
      'https://media.licdn.com/dms/image/D4D03AQHHuaDY4z8V7A/profile-displayphoto-shrink_800_800/0/1677288099829?e=1683158400&v=beta&t=_4dL6mKljguP7Bijl5_7Qk60bYUqaOGLI1NvaWdiYJg',
    profileUrl: 'https://www.linkedin.com/in/alexey-pylypenko/',
  },
  description:
    'Website security is crucial for any business that operates online, regardless of its size or industry. Secure website creates strong connection between the users/audience because trust is one of the main ingredients of successful entity, whether online or offline.',
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
    date: 'March 9, 2023',
    title: 'Setting Up Google Analytics Fast and Easy',
    description: `Tracking website could give a valuable information on how it is used, how well website keeps visitors on different pages, amd even more. The importance of resource about visitors' actions while interacting with a page could play very important part for any future analysis of website's perfomance or improvements of UI/UX features.`,
    imgUrl: 'https://trimsy.org/uploads/google_analytics_logo.webp',
    slug: '/blog/setting-up-google-analytics-fast-and-easy',
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
          Website security is crucial for any business that operates online, regardless of its size
          or industry.
        </p>

        <p>
          Secure website creates strong connection between the users/audience because trust is one
          of the main ingredients of successful entity, whether online or offline.
        </p>

        <h4>Protecting confidential data</h4>
        <p>
          Your website may store sensitive information such as customer data, financial information,
          and business secrets.
        </p>
        <p>
          If that information falls into the wrong hands, it not only going to have effect on the
          customers, but can have severe consequences for your business as well.
        </p>

        <h4>Building trust</h4>
        <p>
          Customers expect your website to be secure when they share their personal information with
          you.
        </p>
        <p>
          A secure website helps build trust with your customers, which is crucial for customer
          retention and business growth.
        </p>

        <h4>Maintaining brand reputation</h4>
        <p>A security breach can have severe consequences for your business reputation.</p>
        <p>
          If your website is hacked, it can result in a loss of trust, negative publicity, and even
          legal actions.
        </p>

        <h4>Protecting against downtime</h4>
        <p>A website breach can result in downtime, which can be costly for your business</p>
        <p>
          Downtime can lead to lost revenue, decreased productivity, and damage to your brand
          reputation.
        </p>

        <h3>First few steps to ensure secure website</h3>

        <h4>1. Keep your software up-to-date</h4>
        <p>
          Please, make sure to keep your website software up-to-date with the latest security
          patches and updates.
        </p>
        <p>Including the CMS (Content Management System), plugins, and themes.</p>
        <p>
          Hackers and cybercriminals are always looking for ways to exploit vulnerabilities to gain
          unathorized access to websites and their valuable data. By keeping software up-to-date you
          can help prevent these vulnerabilities from being exploited and reduce the risk of a
          security breach.
        </p>
        <p>
          Additionally, outdated software can also cause compatibility issues and impact the
          perfomance of a website.
        </p>

        <h4>2. Using HTTPS and SSL/TLS</h4>
        <p>
          Securing a website with HTTPS (Hypertext Transfer Protocol Secure) to encrypt data
          transmission between the server and the client.
        </p>
        <p>
          HTTPS is especially important for websites that handle sensitive user information, such as
          login credentials, financial data or personal information.{' '}
        </p>
        <p>
          Without HTTPS, this data can be intercepted by attackers who can use it for malicious
          purposes such as identity theft, fraud, or other cybercrimes.
        </p>

        <div className={styles.note}>
          <span>{`Implementing HTTPS also help build trust as discussed earlier. When users see the "Secure" or "HTTPS" label in their browser's address bar, they know that their data is being transmitted securely, which can help to increase their confidence about the website.`}</span>
        </div>

        <p>
          Secure Socket Layer (SSL) or Transport Layer Security (TLS) encrypts the data transmitted
          between the website and the users, preventing hackers from intercepting and stealing
          sensitive information.
        </p>

        <h4>3. Using secure hosting and strong passwords</h4>
        <p>
          Choosing a secure web hosting provider that offers features like DDoS protection,
          intrusion detection, and server-side scanning for malware might be a good idea.
        </p>
        <p>Especially when website has a lot of attention on the internet.</p>

        <p>
          Using strong and unique passwords not only for a hosting provider but for all the accounts
          will ensure indisputable security.
        </p>

        <h3>Additional Steps</h3>
        <h4>4. Limit file uploads</h4>
        <p>
          Restrict file uploads to only allow certain file types and limit the maximum file size to
          prevent hackers from uploading malicious files to your server.
        </p>
        <p>
          Limiting file uploads is an essential security measure to protect your website from
          malware and viruses that can be uploaded by attackers.
        </p>

        <h6>Allow only specific file types:</h6>
        <p>
          Limit the types of files that users can upload to your website. For instance, only allow
          image files, PDFs, or certain document types, and block executable files, scripts, or
          other dangerous file types.
        </p>
        <h6>Use file type verification:</h6>
        <p>
          Implement server-side file type verification to ensure that only allowed file types are
          uploaded.
        </p>
        <p>
          Attackers may try to bypass client-side restrictions and upload malicious files by
          changing the file type in the request header.
        </p>
        <h6>Limit the file size:</h6>
        <p>Restrict the maximum file size that users can upload to your website.</p>
        <p>
          Large files can consume a lot of server resources and take longer to scan for viruses or
          malware.
        </p>

        <h4>5. Implement two-factor authentication (2FA)</h4>
        {/* <Image fill src={'https://trimsy.org/uploads/1666542894624.jpg'} alt="2FA Image" /> */}
        <div className={styles.img}>
          <Image
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: '70%', height: 'auto' }}
            src={'/uploads/1666542894624.png'}
            alt="2FA Image"
            loading={'lazy'}
            quality={'100'}
          />
        </div>
        <p className={styles.underline_text}>(Shutterstock)</p>

        <p>
          Two-factor authentication (2FA) is a security measure that adds an extra layer of
          protection to the login process.
        </p>
        <p>
          2FA is effective in preventing unauthorized access to user accounts, even if a hacker has
          obtained the user's login credentials. This is because the hacker would also need to have
          access to the second factor, which is typically something that only the legitimate user
          has, like their phone or email account.
        </p>
        <p>
          Implementing 2FA on your website is a relatively simple process. You can use third-party
          services that provide 2FA functionality, such as Google Authenticator or Authy, or you can
          implement your own 2FA system. Some popular CMS platforms, such as WordPress, offer
          built-in support for 2FA.
        </p>
        <p>
          It's important to note that while 2FA is an effective security measure, it's not
          foolproof. Hackers have been known to use social engineering tactics to trick users into
          providing both factors of authentication.
        </p>

        <h3>Conclusion</h3>
        <p>{`Website security is essential for your business' success and longevity. `}</p>
        <p>
          Securing a website is an ongoing process that involves several measures to ensure that
          your website and its data are safe from unauthorized access, hacking attempts, and other
          security threats.
        </p>
        <p>
          It protects your sensitive and valuable information, builds important trust with customers
          that can be damaged forever, maintains your brand reputation and protects against
          downtime.
        </p>
      </section>
    </BlogWrapper>
  );
}
