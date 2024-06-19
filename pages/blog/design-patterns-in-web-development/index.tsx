import React from 'react';
import Image from 'next/image';

import styles from '../Post.module.scss';
import Link from 'next/link';
import BlogWrapper from 'features/Blog/BlogWrapper/enhanced';

const info = {
  title: 'Design Patterns in Web Development',
  headerImg: '/uploads/1666542894633.png',
  date: 'September 30, 2023',
  createdAt: '2023-09-30T12:00:00+0000',
  modifiedAt: '2023-09-30T12:00:00+0000',
  minToRead: 4,
  slug: '/blog/design-patterns-in-web-development',
  description:
    "In the dynamic realm of web development, three fundamental architectural patterns reign supreme: MVC (Model-View-Controller), MVP (Model-View-Presenter), and MVVM (Model-View-ViewModel). These patterns serve as the blueprint for creating structured, maintainable, and scalable web applications. In this article, we'll demystify these patterns, outlining their key principles, differences, and when to use each.",
  author: {
    fullname: 'Oleksii Pylypenko',
    position: 'CEO',
    description: `I'm a CEO and a Co-Founder of Trimsy. I deeply appreciate the encouragment and
      mutual benefit from the associates I am given a chance to have a journey with. We are
      thinkers and doers, difficulties could be challanging, but that is the beauty of it.
      Doing things with speed does not mean doing them imperfectly, the only way to not fall
      back - is to go forward.`,
    avatarUrl:
      'https://media.licdn.com/dms/image/D4D03AQHHuaDY4z8V7A/profile-displayphoto-shrink_200_200/0/1677288102806?e=1721865600&v=beta&t=DGDiOOXgFgO7g4beK29p9Kn-6tFk2g7WOTgqOvqCI9Q',
    profileUrl: 'https://www.linkedin.com/in/alexey-pylypenko/',
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
          In the dynamic realm of web development, three fundamental architectural patterns reign
          supreme: MVC (Model-View-Controller), MVP (Model-View-Presenter), and MVVM
          (Model-View-ViewModel). These patterns serve as the blueprint for creating structured,
          maintainable, and scalable web applications. In this article, we'll demystify these
          patterns, outlining their key principles, differences, and when to use each.
        </p>

        <h3>1. MVC: Model-View-Controller</h3>

        <p>MVC, the oldest of the three, forms the backbone of many web applications.</p>

        <ul>
          <li>Model: Represents the application's data and business logic.</li>
          <li>View: Displays data and user interfaces.</li>
          <li>
            Controller: Acts as an intermediary, handling user input and managing the Model and
            View.
          </li>
        </ul>
        <h4>Key Benefits of MVC:</h4>
        <ul>
          <li>
            Separation of Concerns: Each component has distinct responsibilities, facilitating
            modularity and easier maintenance.
          </li>
          <li>
            Reusability: Models and Views can be reused in different parts of the application.
          </li>
          <li>Testability: Controllers can be unit-tested for efficient debugging.</li>
        </ul>

        <h4>Key Benefits of MVC:</h4>
        <ul>
          <li>Ideal for applications with complex business logic.</li>
          <li>Recommended for larger teams where separation of concerns is crucial.</li>
        </ul>
        <h3>2. MVP: Model-View-Presenter</h3>

        <p>MVP evolved from MVC, emphasizing a more efficient way to handle user interfaces.</p>

        <ul>
          <li>Model: Represents the application's data and business logic, just like in MVC.</li>
          <li>
            View: Handles user interfaces and is more passive, reducing its involvement in
            application logic.
          </li>
          <li>Presenter: Manages user input, communicates with the Model, and updates the View.</li>
        </ul>
        <h4>KKey Benefits of MVP:</h4>
        <ul>
          <li>
            Simplified Views: Views are more straightforward and can be reused in different
            scenarios.
          </li>
          <li>Testability: Presenters can be unit-tested, ensuring the interface's robustness.</li>
          <li>Loose Coupling: Reduces the tight coupling between View and Model found in MVC.</li>
        </ul>

        <h4>When to Use MVP:</h4>
        <ul>
          <li>
            Suitable for scenarios where View components need to be reused in different contexts.
          </li>
          <li>Ideal for applications that prioritize testability and maintainability.</li>
        </ul>

        <h3>3. MVVM: Model-View-ViewModel</h3>

        <p>
          MVVM is the new kid on the block, gaining popularity for its adaptability and efficiency.
        </p>

        <ul>
          <li>Model: Represents the application's data and business logic.</li>
          <li>View: Focuses on user interfaces.</li>
          <li>
            ViewModel: Acts as an intermediary between Model and View, managing the presentation
            logic.
          </li>
        </ul>
        <h4>KKey Benefits of MVVM:</h4>
        <ul>
          <li>
            Data Binding: MVVM excels at data binding, automating the synchronization of View and
            Model.
          </li>
          <li>
            Separation of Concerns: Similar to MVC, MVVM also emphasizes a clear separation of
            concerns.
          </li>
          <li>
            Reactive Programming: Supports reactive programming libraries, simplifying complex user
            interfaces.
          </li>
        </ul>

        <h4>When to Use MVVM:</h4>
        <ul>
          <li>Perfect for data-heavy applications and real-time user interfaces.</li>
          <li>
            Great for applications where automatic synchronization between Model and View is
            essential.
          </li>
        </ul>

        <p>
          In conclusion, the choice between MVC, MVP, and MVVM depends on your project's specific
          needs. Each pattern offers distinct advantages, and the decision often hinges on factors
          like project size, team expertise, and application requirements.
        </p>
      </section>
    </BlogWrapper>
  );
}
