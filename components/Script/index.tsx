import React from 'react';
import NextScript from 'next/script';

import * as gtag from 'lib/gtag';

const Script = () => {
  return (
    <>
      {/* Google Tag Manager Code */}
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <NextScript
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <NextScript
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
    </>
  );
};

export default Script;
