import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Footer, FormOverflow, Header } from 'components';
import type { NextComponentType } from 'next';
import React from 'react';
import Script from 'next/script';

import * as gtag from '../lib/gtag';

type CustomAppProps = AppProps & {
  Component: NextComponentType & { title: string };
};

export default function App({ Component, pageProps }: CustomAppProps) {
  const [formOpen, setFormOpen] = React.useState<boolean>(false);

  const handleFormOpenChange = () => setFormOpen(!formOpen);

  const router = useRouter();

  React.useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

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

      {/* Google Tag Manager Code */}
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        strategy="afterInteractive"
        id="google-tag-manager"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      {/* //       <Script id="google-tag-manager" strategy={'afterInteractive'}>
//         {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
// new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
// j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
// 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
// })(window,document,'script','dataLayer','GTM-WFBCBDV');
// `}
//       </Script>

//       <Script
//         strategy="afterInteractive"
//         id="google-tag-managerG"
//         dangerouslySetInnerHTML={{
//           __html: `
//           window.dataLayer = window.dataLayer || [];
//           function gtag(){dataLayer.push(arguments);}
//           gtag('js', new Date());
        
//           gtag('config', 'G-F4L8VZ3NDT');
//         `,
//         }}
//       />

//       <Script
//         strategy="afterInteractive"
//         async
//         src="https://www.googletagmanager.com/gtag/js?id=G-F4L8VZ3NDT"
//       /> */}

      {/* End */}

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
