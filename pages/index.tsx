import { Accomplish, ContactForm, Influence, Intro, Product } from 'containers/Home';

Home.title = 'Web Development';

export default function Home() {
  return (
    <>
      <main>
        <Intro />

        <Product />

        <Accomplish />

        <Influence />

        <ContactForm />
      </main>
    </>
  );
}
