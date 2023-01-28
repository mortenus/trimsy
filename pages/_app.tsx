import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Footer, FormOverflow, Header } from 'components';
import type { NextComponentType } from 'next';
import React from 'react';

type CustomAppProps = AppProps & {
  Component: NextComponentType & { title: string };
};

export default function App({ Component, pageProps }: CustomAppProps) {
  const [formOpen, setFormOpen] = React.useState<boolean>(false);

  const handleFormOpenChange = () => setFormOpen(!formOpen);

  const router = useRouter();

  return (
    <>
      <Head>
        <title>{Component.title + ' - Trimsy'}</title>
        <meta
          name="description"
          content="Discover your presence in Web the way you want. Trimsy has developers to help you achieve anything in the world of Web"
        />
        <meta name="robots" content="noodp,noydir" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      {router.pathname === '/stands-with-ukraine' ? (
        <Header clean />
      ) : (
        //   ) : router.pathname === '/' ? (
        //     <Header />
        <Header handleFormChange={handleFormOpenChange} />
      )}
      <Component {...pageProps} />
      <Footer />

      <FormOverflow open={formOpen} handleOpen={handleFormOpenChange} />
    </>
  );
}
