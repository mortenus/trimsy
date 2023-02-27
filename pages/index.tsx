import {
  Accomplish,
  Boost,
  ContactForm,
  FAQ,
  Here,
  Influence,
  Intro,
  Product,
} from 'components/Home';

import { useOnScroll } from 'hooks/useOnScroll';

Home.title = 'Web Development';

export default function Home() {
  const { onScrollEvent } = useOnScroll();

  return (
    <>
      <main>
        <Intro />

        <Product />

        <Accomplish onScrollEvent={onScrollEvent} />

        <Influence />

        <Boost onScrollEvent={onScrollEvent} />

        <FAQ />

        <Here onScrollEvent={onScrollEvent} />

        <ContactForm />
      </main>
    </>
  );
}
