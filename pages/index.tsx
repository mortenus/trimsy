import { SwiperSmall } from 'components';
import { Careers, Partners, Web } from 'features/Home';

import Head from 'next/head';

type TLanding = {
  handleFormChange: () => void;
  handleKeyDownOverflowChange: (e: any) => void;
  items: any;
};

Landing.description = `Explore innovative solutions with Trimsy in Web Development, Marketplace, Career Opportunities and expert support.`;

export default function Landing({
  handleFormChange,
  handleKeyDownOverflowChange,
  items,
}: TLanding) {
  return (
    <>
      <main>
        <h1 style={{ display: 'none', visibility: 'hidden' }}>Trimsy</h1>
        <Web />

        <Careers />

        <SwiperSmall items={items} style={{ marginTop: '30px' }} />

        {/* <Partners /> */}
      </main>

      <Head>
        <meta property="og:image" content={'https://trimsy.org/images/mini-logo.png'} />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          async
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WebSiteSchema) }}
        />
        <script
          type="application/ld+json"
          async
          dangerouslySetInnerHTML={{ __html: JSON.stringify(OrganizationSchema) }}
        />
      </Head>
    </>
  );
}

const WebSiteSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://trimsy.org/#website',
      url: 'https://trimsy.org/',
      name: 'Trimsy',
      description: 'Discover your presence in Web the way you want.',
      potentialAction: [
        {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://trimsy.org/?s={search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
      ],
      inLanguage: 'en-US',
    },
    {
      '@type': 'ImageObject',
      '@id': 'https://trimsy.org/#primaryimage',
      inLanguage: 'en-US',
      url: 'https://trimsy.org/images/mini-logo.png',
      contentUrl: 'https://trimsy.org/images/mini-logo.png',
      width: 500,
      height: 500,
      caption: 'Trimsy',
    },
    {
      '@type': 'WebPage',
      '@id': 'https://trimsy.org/#webpage',
      url: 'https://trimsy.org/',
      name: 'Web Development | Trimsy',
      isPartOf: { '@id': 'https://trimsy.org/#website' },
      primaryImageOfPage: { '@id': 'https://trimsy.org/images/logo.svg' },
      description:
        'Web Studio \u2705 Discover your presence in Web the way you want. \u261b One of the top growing development company in the industry.',
      breadcrumb: { '@id': 'https://trimsy.org/#breadcrumb' },
      inLanguage: 'en-US',
      potentialAction: [{ '@type': 'ReadAction', target: ['https://trimsy.org/'] }],
    },
    // {
    //   '@type': 'BreadcrumbList',
    //   '@id': 'https://trimsy.org/#breadcrumb',
    //   itemListElement: [
    //     { '@type': 'ListItem', position: 1, name: 'About us', item: 'https://trimsy.org/about' },
    //     { '@type': 'ListItem', position: 2, name: 'Carrers', item: 'https://trimsy.org/careers' },
    //     { '@type': 'ListItem', position: 3, name: 'Blog', item: 'https://trimsy.org/blog' },
    //   ],
    // },
  ],
};

const OrganizationSchema = {
  '@context': 'http://schema.org',
  '@type': 'Organization',
  name: 'Trimsy',
  url: 'https://trimsy.org/',
  logo: 'https://trimsy.org/images/mini-logo.png',
  description: 'Trimsy is a web development studio that builds outstanding apps.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Tanner Close',
    addressLocality: 'Airdrie',
    postalCode: 'T4A 2L4',
    addressCountry: 'Canada',
  },
  contactPoint: { '@type': 'ContactPoint', telephone: '+1 (530) 908-4279' },
};

//https://neilpatel.com/blog/get-started-using-schema/
// const d = {
//   '@context': 'https://schema.org',
//   '@type': 'FAQPage',
//   mainEntity: [
//     {
//       '@type': 'Question',
//       name: 'What is the game design document?',
//       acceptedAnswer: {
//         '@type': 'Answer',
//         text: "A game design document is an all-in-one file with different information about your game. It contains a description of the concepts, ideas, aesthetics, mechanics, characters, plot, features, etc. No worries, we explain to you every symbol, so you're aware of your game everything like a pro.",
//       },
//     },
//     {
//       '@type': 'Question',
//       name: 'What the difference between game design and development?',
//       acceptedAnswer: {
//         '@type': 'Answer',
//         text: 'All is simple. Game development is about software and game design is about visuals. The combination of this both practices provides a great end result \u2013 a well-monetized game with thousands of downloads.',
//       },
//     },
//     {
//       '@type': 'Question',
//       name: 'Which game engine are you using and why?',
//       acceptedAnswer: {
//         '@type': 'Answer',
//         text: "Our team has practical experience in applying multiple game engines. We select them based on the game requirements to ensure gameplay is flawless and smooth. Unity 3D engine is one of the most tried and tested game engines which is used by our team the most often due to the perks this software provides. Want to know more? Let's discuss your game requirements and opt for the best engine for the game.",
//       },
//     },
//     {
//       '@type': 'Question',
//       name: 'What are the models used to make money in gaming business?',
//       acceptedAnswer: {
//         '@type': 'Answer',
//         text: 'While we produce games for users to enjoy gameplay, the same games can be a great way of income. Gaming business allows you to monetize with the models including Charge Per Copy, monthly subscription, microtransactions, pay-per-play, ad-based, provider billing, merchandising, code licensing, and sponsorship.',
//       },
//     },
//     {
//       '@type': 'Question',
//       name: 'What is an SDK in advertising?',
//       acceptedAnswer: {
//         '@type': 'Answer',
//         text: 'SDK stands for a software development kit. It is a piece of code that allows mobile apps to connect to third-party services and technologies. By integrating SDK into our products, we can monitor game performance, user engagement, and retention. This information enables our team to update some features and provide a better, improved product.',
//       },
//     },
//     {
//       '@type': 'Question',
//       name: 'What Technlogoies do you use whilst developing an Application?',
//       acceptedAnswer: {
//         '@type': 'Answer',
//         text: "Website could be developed in so many ways, without using many technlogoies to most modern Libraries and Frameworks. We select them based on the application requirements to boost and make your web page look the way you want it any way possible. Our team has practical experience in applying most popular libraries while developing. ReactJS under NextJS is mostly focused upon due to its high reliance and popularity. While Backend or 'server-side' is focused on pure NodeJS (or NestJS) to ensure fast and secure exchange between the sides.",
//       },
//     },
//     {
//       '@type': 'Question',
//       name: 'What the difference between web design and development?',
//       acceptedAnswer: {
//         '@type': 'Answer',
//         text: "Web Developemnt is about software and web design is about visuals. The combination of this both practices provides a great end result \u2013 a well-monetized web application with several thousands of views",
//       },
//     },
//     {
//       '@type': 'Question',
//       name: 'What is Domain and VPS?',
//       acceptedAnswer: {
//         '@type': 'Answer',
//         text: "It is simplier than you think. To host your application, you would need to use Virtual Private Server, it is simply a private computer that runs your application. Domain is the link in the browser to direct user to that computer so they could experience the app in the browser. We provide such service, to get more details get in contact with us",
//       },
//     },
//   ],
// };

// const structuredData = {
//   '@context': 'http://schema.org/',
//   '@type': 'Product',
//   name: ['Regular Backpack Billboard', 'Walking Billboards', 'Human Billboards'],
//   image: [
//     'https://backpackbillboards.com/wp-content/uploads/2017/12/backpack-billboards-1x1.jpg',
//     'https://backpackbillboards.com/wp-content/uploads/2017/12/backpack-billboards-4x3.jpg',
//     'https://backpackbillboards.com/wp-content/uploads/2017/12/backpack-billboards-16x9.jpg',
//   ],
//   description:
//     'Backpack Billboards feature a rechargeable battery which powers the internal LED lights providing a bright illuminated display for up to 8 hours.',
//   sku: 'BPBB8',
//   brand: {
//     '@type': 'Thing',
//     name: ['Regular Backpack Billboard', 'Walking Billboards', 'Human Billboards'],
//   },
//   offers: {
//     '@type': 'Offer',
//     priceCurrency: 'USD',
//     price: '299.00',
//     priceValidUntil: '2020-11-11',
//     itemCondition: 'http://schema.org/NewCondition',
//     availability: 'http://schema.org/InStock',
//     seller: {
//       '@type': 'Organization',
//       name: ['Backpack Billboards', 'Human Billboards', 'Walking Billboards'],
//     },
//   },
// };

export async function getStaticProps() {
  const items = [
    {
      data: {
        date: 'October 16, 2023',
        title: 'Revolutionizing Web Development: The Future with AI',
        description: `In the fast-paced world of technology, web development is continually evolving. And at the heart of this transformation lies Artificial Intelligence (AI). AI is reshaping the future of web development, enhancing user experiences, automating tasks, and improving website performance. In this article, we'll delve into the exciting possibilities AI brings to the world of web development.`,
        imgUrl: '/uploads/1666542894634.png',
      },
      slug: '/blog/revolutionizing-web-development-the-future-with-ai',
    },
    {
      data: {
        date: 'September 30, 2023',
        title: 'Design Patterns in Web Development',
        description: `In the dynamic realm of web development, three fundamental architectural patterns reign supreme: MVC (Model-View-Controller), MVP (Model-View-Presenter), and MVVM (Model-View-ViewModel). These patterns serve as the blueprint for creating structured, maintainable, and scalable web applications. In this article, we'll demystify these patterns, outlining their key principles, differences, and when to use each.`,
        imgUrl: '/uploads/1666542894633.png',
      },
      slug: '/blog/design-patterns-in-web-development',
    },
    {
      data: {
        date: 'September 21, 2023',
        title: 'The Digital Storefront: How a Website Boosts Your Business Visibility and Reach',
        description: `In today's digital age, having a website is not just a luxury – it's a necessity for businesses of all sizes. Your website acts as a digital storefront, and it plays a crucial role in enhancing your business's visibility and reach. In this article, we'll explore the many ways a website can help you reach a global audience and attract potential customers.`,
        imgUrl: '/uploads/1666542894632.png',
      },
      slug: '/blog/how-a-website-boosts-your-business',
    },
    {
      data: {
        date: 'August 25, 2023',
        title:
          'Demystifying Web Design vs. Web Development: Understanding Roles and Responsibilities',
        description:
          'With the rise of artificial intelligence and its potential impact on job displacement, job seekers and professionals navigating career transitions can find hope in the emergence of generative AI tools.',
        imgUrl: '/uploads/1666542894630.png',
      },
      slug: '/blog/demystifying-web-design-vs-web-development',
    },
    {
      data: {
        date: 'August 1, 2023',
        title: 'Tools for Enhancing Job Search Efforts and Career Transitions in the Age of AI',
        description:
          'With the rise of artificial intelligence and its potential impact on job displacement, job seekers and professionals navigating career transitions can find hope in the emergence of generative AI tools.',
        imgUrl: '/uploads/1666542894629.png',
      },
      slug: '/blog/tools-for-enhancing-job-search-in-the-age-of-ai',
    },
    {
      data: {
        date: 'June 14, 2023',
        title: 'Power of a Website: Bringing Attention and Customers to Your Business',
        description:
          'As the world becomes increasingly digital, people are turning to the internet for information, entertainment, and shopping. Businesses that adapt to this digital shift by establishing a strong online presence reap significant benefits.',
        imgUrl: '/uploads/1666542894628.png',
      },
      slug: '/blog/power-of-a-website-bringing-attention-and-customers-to-your-business',
    },
    {
      data: {
        date: 'May 15, 2023',
        title: 'Trimsy introduces Starter, Basic and Advanced packages',
        description:
          'Trimsy announced today launch of cutting-edge web development packages. With each package, we harness the power of the most advanced technologies to deliver exceptional results in the digital realm.',
        imgUrl: '/uploads/1666542894626.png',
      },
      slug: '/blog/trimsy-introduces-starter-basic-and-advanced-packages',
    },
    {
      data: {
        date: 'March 12, 2023',
        title: 'How To Create a Winning Social Media Strategy for Your Website',
        description:
          'Creating a winning social media strategy is a crucial component of any successful website marketing plan. It gives confident opportunities for a website grown and expansion.',
        imgUrl: 'https://trimsy.org/uploads/1556542894629.jpg',
        hashtags: ['Web', 'Social Media'],
      },
      slug: '/blog/how-to-create-a-winning-social-media-strategy',
    },
    {
      data: {
        date: 'March 9, 2023',
        title: 'Setting Up Google Analytics Fast and Easy',
        description:
          "Tracking website could give a valuable information on how it is used, how well website keeps visitors on different pages, amd even more. The importance of resource about visitors' actions while interacting with a page could play very important part for any future analysis of website's perfomance or improvements of UI/UX features.'",
        imgUrl: 'https://trimsy.org/uploads/google_analytics_logo.webp',
        hashtags: ['Web', 'Dev'],
      },
      slug: '/blog/setting-up-google-analytics-fast-and-easy',
    },
    {
      data: {
        date: 'March 2, 2023',
        title: 'How To Improve SEO of your Website in 5 Steps',
        description:
          'When SEO is set up and used correctly – it could bring lots of new traffic to the web page. It is not complex to accomplish, while optimizing your website could play important part in boosting your search presence. Google receives 90% of all online searches. That’s why we’re going to talk about setting up SEO for Googling and connect to Google Search Console for detailed analysis.',
        imgUrl: 'https://trimsy.org/uploads/1666542894623.jpg',
        hashtags: ['Web', 'Dev'],
      },
      slug: '/blog/how-to-improve-seo-of-your-website-in-5-steps',
    },
  ];

  return {
    props: { items },
  };
}
