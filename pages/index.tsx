import styles from '../styles/Home.module.scss';

import { Accomplish, ContactForm, Influence, Intro, Product } from 'containers/Home';

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
