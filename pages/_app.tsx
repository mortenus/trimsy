import React from 'react';
import type { AppProps } from 'next/app';
import type { NextComponentType } from 'next';

import '../styles/globals.scss';

import Head from 'next/head';

import useGtag from 'hooks/useGtag';
import useHideScrollOnTrue from 'hooks/useHideScrollOnTrue';
import Footer from 'features/Footer';
import Header from 'features/Header';
import FormOverflow from 'features/FormOverflow';
import Script from 'features/Script';
import { useRouter } from 'next/router';
import useChangeStateOnSpace from 'hooks/useChangeStateOnSpace';

type CustomAppProps = AppProps & {
  Component: NextComponentType & { title: string; description?: string };
};

const defaultDescription =
  'Discover your presence in Web the way you want. Trimsy has developers to help you achieve anything in the world of Web.';

export default function App({ Component, pageProps }: CustomAppProps) {
  const {
    handleStateChange: handleFormOverflowChange,
    handleKeyDown: handleKeyDownOverflowChange,
    state: formOpen,
  } = useChangeStateOnSpace();

  useHideScrollOnTrue(formOpen);
  useGtag();

  const router = useRouter();

  return (
    <>
      <Script />
      <Head>
        <meta charSet="UTF-8" />
        <title>{Component.title + ' - Trimsy'}</title>
        <meta name="description" content={Component.description || defaultDescription} />
        <meta content={Component.title} property={'og:title'} />
        <meta content={Component.description || defaultDescription} property={'og:description'} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header
        handleFormChange={handleFormOverflowChange}
        handleKeyDownOverflowChange={handleKeyDownOverflowChange}
      />

      <Component {...pageProps} />
      <Footer />

      {router.pathname === '/' && (
        <FormOverflow
          open={formOpen}
          handleOpen={handleFormOverflowChange}
          handleKeyDownOverflowChange={handleKeyDownOverflowChange}
        />
      )}
    </>
  );
}
