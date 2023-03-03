import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from './Post.module.scss';

const test = {
  title: 'How To Improve SEO of your Website in 5 Steps',
  headerImg: 'https://trimsy.org/uploads/1666542894623.jpg',
  date: 'March 2, 2023',
  minToRead: 8,
};

Post.title = test.title;

export default function Post() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Link href="/blog#search" className={styles.return}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            viewBox="6 6 12 12"
            style={{ rotate: '90deg' }}>
            <path d="M7 9.79a.5.5 0 0 1 .854-.353L12 13.584l4.146-4.147a.5.5 0 1 1 .708.708L12 14.998l-4.854-4.853A.5.5 0 0 1 7 9.79Z"></path>
          </svg>{' '}
          <span>Return</span>
        </Link>
        <h2 className={styles.title}>{test.title}</h2>
        <div className={styles.headerImg}>
          <Image
            priority
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: '100%', height: 'auto', maxHeight: '600px', objectFit: 'cover' }}
            src={test.headerImg}
            alt={'Header IMG'}
          />
        </div>

        <div className={styles.date}>
          <span>{test.date}</span>
          <div className={styles.line} />
          <span>{test.minToRead} mins read</span>
        </div>

        <section>
          <p>
            One of the ways to publish and distribute your website is to use Search Engine
            Optimization for Search Engines to show your site to users.
          </p>

          <p>
            When SEO is set up and used correctly – it could bring lots of new traffic to the web
            page. It is not complex to accomplish, while optimizing your website could play
            important part in boosting your search presence.
          </p>

          <p>
            Google receives 90% of all online searches. That’s why we’re going to talk about setting
            up SEO for Googling and connect to Google Search Console for detailed analysis.
          </p>

          <h4>Inside of Google’s Search Engine.</h4>
          <p>
            Google uses crawl bots, we are going to talk more about which technologies improve how
            good your page is for crawlers later on.
          </p>
          <p>
            This picture from Google is going to help us understand the way Google Search Engine
            Works.
          </p>
          <Image
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            src={'https://trimsy.org/uploads/8459359022794.png'}
            alt={'Image'}
          />
          <p>
            There is a difference between the Processing stage that parses HTML and Renderer stage
            which executes Javascript.
          </p>
          <p>
            This was implemented and is a smart move from Google because Javascript is expensive and
            Googlebots need to look at over hundreds of trillion webpages.
          </p>
          <p>So it parses HTML immediately and puts Javascript in queue to run it later.</p>

          <h5>1. Setting up your future website</h5>

          <p>
            Search Engine Optimization needs help setting up, so we need to align our code
            accordingly.
          </p>
          <p>
            {
              'In <head> section of our page, we can use <meta> tag to directly tell Google how to understand and treat certain items of our page.'
            }
          </p>
          <h6>This code tells Google the description current page has.</h6>

          <div className={styles.note}>
            <span>Note that description has to be unique.</span>
          </div>

          <div className={styles.code}>
            <code>
              {`        <meta
          name="description"
          content="Lorem ipsum dolor sit amet, consectetur adipsing elit. Aliquam ac purus elit. In magna nisi, pulvinar et commodo vitae, elefiend in est. Sed eget diam metus"
          />
          `}
            </code>
          </div>

          {/* <div className={styles.img}> */}
          <Image
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            src={'https://trimsy.org/uploads/5735159490278.png'}
            alt={'Image'}
          />

          {/* </div> */}

          <p>
            Google will crawl your page, and if description of a page is absent or Googlebot finds
            it very common (could be used in any other webpage, isn’t unique), it is going to ignore
            the tag and find relative text inside of a page to use and show it instead.
          </p>
          <p>This behaviour can be disabled:</p>
          <div className={styles.code}>
            <code>
              {`        <meta name="robots" content="noodp,noydir" />
          `}
            </code>
          </div>
          <p>
            These are instructions to search engines not to use information from web directories
            when showing your site in the search results.
          </p>

          <h6>Title of page isn’t exactly a meta tag, but is used by Search Engines also:</h6>
          <div className={styles.code}>
            <code>
              {`         <title>{"Lorem ipsum dolor sit amet"}</title>
          `}
            </code>
          </div>
          <Image
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            src={'https://trimsy.org/uploads/8131405422084.png'}
            alt={'Image'}
          />

          <h5>2. Enhancements</h5>
          <p>
            Google Search Engine is a smart machine, but many times it confuses what description to
            show, what is the website’s Logo and which pages to show in sitemap, so we can help
            Google understand your site better.
          </p>
          <p>Setting up a Schema for structured data is going to be a solution.</p>
          <p>
            For example, this would help Google identify which is the logo, so it could show it next
            time your site appears in search.
          </p>
          <div className={styles.code}>
            <code>
              {`<script type="application/ld+json">`}
              <br />
              {`{`}
              <br />
              {`'@context': 'http://www.schema.org',`}
              <br />
              {`'@type': 'Organization',`}
              <br />
              {`name: 'Trimsy',`}
              <br />
              {`url: 'https://trimsy.org/',`}
              <br />
              {`logo: 'https://trimsy.org/images/logo.svg',`}
              <br />
              {`description: 'Trimsy is a web development studio that builds outstanding apps.'`}
              <br />
              {`}`}
              <br />
              {`</script>`}
            </code>
          </div>
          <div className={styles.code}>
            <code>
              {`        {
      '@type': 'ImageObject',
      '@id': 'https://trimsy.org/#primaryimage',
      inLanguage: 'en-US',
      url: 'https://trimsy.org/images/mini-logo.png',
      contentUrl: 'https://trimsy.org/images/mini-logo.png',
      width: 500,
      height: 500
    }
`}
            </code>
          </div>
          <p>
            Where <span>URL</span> is a link to the <span>Logo.</span>
          </p>

          <h5>3. Load Time</h5>
          <p>
            GoogleBots also look at how long it takes to load webpage, so it ranks it up
            accordingly.
          </p>

          <div className={styles.note}>
            <span>
              Good to know that Google has a limited resources for each web application – that’s why
              the app that has too many pages with different content and use lots of javascript –
              could end up Google reading only a part of the app’s content.
            </span>
          </div>

          <p>
            Google has a guide for managing your crawl budget{' '}
            <Link
              href="https://developers.google.com/search/docs/crawling-indexing/large-site-managing-crawl-budget"
              target={'_blank'}>
              here.
            </Link>
          </p>
          <p>
            Using CDN is going to take the workload down, since it’s not the actual code that’s
            heave to load, but mostly the images and additional libraries that we can load from CDN
            that is located closer to the user, not the page server.
          </p>

          <h5>4. Right Technologies</h5>
          <p>
            Frameworks like NextJS are one of the best solutions for SEO and GoogleBots to crawl
            since the content is loaded on the SSR (server-side rendering).
          </p>
          <p>
            This approach enables the server to render the app and send the rendered version to the
            user already, while other Javascript code loads in the background, so search engines
            will receive HTML directly from the server and doesn’t need generating HTML while
            crawling.
          </p>

          <h5>5. Principles</h5>
          <p>
            We should use these principles to understand the way Google ranks our page and align our
            site in favor:
          </p>
          <ul>
            <li>It should be quick to load the page (Using CDN)</li>
            <li>User should use the site as soon as it is possible.</li>
            <li>It should not execute any code that’s not essential for page.</li>
          </ul>
          <p>Roughly, it is referred to the following:</p>
          <ul>
            <li>
              Time To Interactive (TTI), the time at which a page becomes interactive (user can
              scroll, click, etc.)
            </li>
            <li>
              Time to First Bite (TTFB), the time to receive the first bite of content after
              clicking a link
            </li>
            <li>
              Size of Bundle, total bytes of code downloaded and executed before showing a page to
              user.
            </li>
            <li>
              Largest Contentful Paint (LCP), how long it takes for the Largest Content Element to
              be visible within visitor’s viewport.
            </li>
          </ul>

          <h4>Bottom Line</h4>
          <p>
            Google Search is a powerful tool for users to discover requested sources of information.
          </p>
          <p>
            Google found smart ways to rank up different websites and surely most of the time Google
            needs our help setting up different more or less important things for our site,
            Googlebots are smart, but not perfect... yet.
          </p>
        </section>

        <div className={styles.author}>
          <div className={styles.img}>
            {/* <Image fill src={'https://trimsy.org/static/img/blog/test/author.jpg'} alt={'Author image'} /> */}
            <Image
              fill
              src={
                'https://media.licdn.com/dms/image/D4D03AQHHuaDY4z8V7A/profile-displayphoto-shrink_800_800/0/1677288099829?e=1683158400&v=beta&t=_4dL6mKljguP7Bijl5_7Qk60bYUqaOGLI1NvaWdiYJg'
              }
              alt={'Author image'}
            />
          </div>
          <div className={styles.info}>
            <span>Written by</span>
            <h5 className={styles.name}>Oleksii Pylypenko</h5>
            <span className={styles.position}>CEO</span>
            <p className={styles.description}>
              I&apos;m a CEO and a Co-Founder of Trimsy. I deeply appreciate the encouragment and
              mutual benefit from the associates I am given a chance to have a journey with. We are
              thinkers and doers, difficulties could be challanging, but that is the beauty of it.
              Doing things with speed does not mean doing them imperfectly, the only way to not fall
              back - is to go forward.
            </p>
          </div>
        </div>

        {/* <div className={styles.further}>
          <h3>Next to Read</h3>

          <div className={styles.items}>
            <div className={styles.item}>
              <div className={styles.img}>
                <Image fill src={'/static/img/blog/test/1.jpg'} alt={'Next to Read IMG'} />
              </div>
              <div className={styles.content}>
                <span className={styles.nextDate}>Apr 26, 2022</span>
                <h5>How to get more client to get to your business</h5>
                <p>
                  I&apos;m a CEO and a Co-Founder of Whimsy Games. Before that, I advanced my
                  expertise in engineering, management, traffic marketing, and analytics working for
                  large game development studios with a $1M+ monthly income. With a clear vision of
                  how game development should work, I run Whimsy Games, being responsible for the
                  marketing and sales of our products and services.
                </p>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.img}>
                <Image fill src={'/static/img/blog/test/2.jpg'} alt={'Next to Read IMG'} />
              </div>
              <div className={styles.content}>
                <span className={styles.nextDate}>Apr 26, 2022</span>
                <h5>How to get more client to get to your business</h5>
                <p>
                  I&apos;m a CEO and a Co-Founder of Trimsy. I deeply appreciate the encouragment
                  and mutual benefit from the associates I am given a chance to have a journey with.
                  Before that, I advanced my expertise in engineering, management, traffic
                  marketing, and analytics working for large game development studios with a $1M+
                  monthly income. With a clear vision of how game development should work, I run
                  Whimsy Games, being responsible for the marketing and sales of our products and
                  services.
                </p>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.img}>
                <Image fill src={'/static/img/blog/test/3.jpg'} alt={'Next to Read IMG'} />
              </div>
              <div className={styles.content}>
                <span className={styles.nextDate}>Apr 26, 2022</span>
                <h5>How to get more client to get to your business</h5>
                <p>
                  I&apos;m a CEO and a Co-Founder of Whimsy Games. Before that, I advanced my
                  expertise in engineering, management, traffic marketing, and analytics working for
                  large game development studios with a $1M+ monthly income. With a clear vision of
                  how game development should work, I run Whimsy Games, being responsible for the
                  marketing and sales of our products and services.
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
