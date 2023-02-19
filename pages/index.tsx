import { Accomplish, ContactForm, Influence, Intro, Product } from 'components/Home';

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

        <ContactForm />
      </main>
    </>
  );
}
