import React from 'react';
import type { AppProps } from 'next/app';
import type { NextComponentType } from 'next';

import '../styles/globals.scss';

import Head from 'next/head';

import { Footer, FormOverflow, Header, Script } from 'components';

import useGtag from 'hooks/useGtag';
import useHideScrollOnTrue from 'hooks/useHideScrollOnTrue';

type CustomAppProps = AppProps & {
  Component: NextComponentType & { title: string };
};

export default function App({ Component, pageProps }: CustomAppProps) {
  const [formOpen, setFormOpen] = React.useState<boolean>(false);

  const handleFormOverflowChange = () => setFormOpen(!formOpen);

  useHideScrollOnTrue(formOpen);
  useGtag();

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

      <Script />

      <Header handleFormChange={handleFormOverflowChange} />

      <Component {...pageProps} />
      <Footer />

      <FormOverflow open={formOpen} handleOpen={handleFormOverflowChange} />
    </>
  );
}
