import Logo from 'components/Logo';
import Link from 'next/link';
import React from 'react';

import styles from './privacy-policy.module.scss';
import FAQItemEnhanced from 'components/FAQEnhanced/Item';

TermsOfUse.title = 'Partners FAQ';
TermsOfUse.description = 'Trimsy Terms of Use.';

export function TermsOfUse() {
  return (
    <>
      <h1 className={'hidden'}>Trimsy Terms of Use</h1>
      <div className={styles.intro}>
        {/* <div className={styles.wrapper}>
          <h2 className={styles.headline}>Terms of Use</h2>
          <svg
            className={styles.key}
            width="91"
            height="118"
            viewBox="0 0 91 118"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.37658 43.8909H11.1556V35.5085C11.1556 25.7722 14.9843 16.9097 21.1541 10.4748C27.348 4.01112 35.9013 0 45.3159 0C54.7315 0 63.2838 4.01112 69.4796 10.4738C75.6485 16.9087 79.4771 25.7722 79.4771 35.5076V43.8899H82.2562C84.5619 43.8899 86.6572 44.831 88.1735 46.3482C89.6898 47.8655 90.6318 49.9599 90.6318 52.2655V109.623C90.6318 111.929 89.6908 114.024 88.1735 115.541C86.6562 117.057 84.5619 117.999 82.2562 117.999H8.37658C6.06997 117.999 3.97559 117.058 2.45833 115.541C0.941081 114.023 0 111.931 0 109.624V52.2665C0 49.9608 0.942041 47.8655 2.45833 46.3492C3.97559 44.8329 6.06997 43.8909 8.37658 43.8909ZM42.2526 83.834L38.229 94.377H52.4047L48.675 83.689C51.0421 82.4694 52.6602 80.0015 52.6602 77.1561C52.6602 73.1008 49.3712 69.8128 45.3169 69.8128C41.2616 69.8128 37.9726 73.1018 37.9726 77.1561C37.9716 80.1186 39.7261 82.672 42.2526 83.834ZM17.048 43.8909H73.5848V35.5085C73.5848 27.3355 70.3909 19.9173 65.2438 14.5493C60.1235 9.20819 53.0702 5.89328 45.3159 5.89328C37.5616 5.89328 30.5083 9.20819 25.3881 14.5483C20.2419 19.9163 17.047 27.3346 17.047 35.5076L17.048 43.8909ZM82.2562 49.7841H8.37658C7.69669 49.7841 7.07731 50.0645 6.62598 50.5159C6.17464 50.9672 5.89424 51.5875 5.89424 52.2665V109.624C5.89424 110.303 6.17464 110.924 6.62598 111.374C7.07731 111.826 7.69766 112.106 8.37658 112.106H82.2572C82.937 112.106 83.5574 111.826 84.0078 111.374C84.4591 110.923 84.7395 110.303 84.7395 109.624V52.2665C84.7395 51.5875 84.4591 50.9672 84.0078 50.5159C83.5555 50.0645 82.9361 49.7841 82.2562 49.7841Z"
              fill="white"
            />
          </svg>

          <div className={styles.logo}>
            <Logo />
          </div>
        </div> */}
      </div>
      <div className={styles.content}>
        <div className={styles.wrapper}>
          <div className={styles.center} style={{ marginBottom: '50px' }}>
            <h2>Partners Program</h2>
            <p>Frequently Asked Questions</p>
          </div>
          {/* <div className={styles.center} style={{ marginBottom: '50px' }}>
            <h4>Introduction</h4>
            <p>
              Welcome to Trimsy. The ensuing terms of utilization, herein referred to as{' '}
              <strong>"Terms,"</strong> regulate your entrance to and utilization of: (a) our online
              platform, encompassing all content and features, available on or through
              https://trimsy.org <strong>(the "Trimsy Website")</strong>"; (b) our online
              application and mobile application <strong>(the "Trimsy App")</strong>; (c)
              encompassing any written content, images, media, data, information, and other
              materials or content <strong>(collectively, the "Materials")</strong> found on or
              dispensed through (a) and (b); and (d) all additional materials, products, or services
              supplied by us to you, as more meticulously outlined on the Trimsy Platform
              {` `}
              <strong>(collectively, the "Offerings")</strong>.
            </p>
            <p>
              These Terms constitute a pact between <strong>Trimsy Inc.</strong>,{' '}
              <strong>("Trimsy," "we," "us," "our")</strong> and yourself. The expressions{' '}
              <strong>"you,"</strong>
              <strong>"your,"</strong> or <strong>"User"</strong> pertain to the individual or
              entity perusing, installing, downloading, accessing, or engaging with the Offerings (
              <strong>"use"</strong> or <strong>"using"</strong> within these Terms encompasses any
              of the aforementioned actions).
            </p>
          </div> */}
          <FAQItemEnhanced title={`What happens after I register`}>
            <p>
              Currently, we are accepting partners who can drive volume and quality that meet Trimsy
              guidelines.
            </p>

            <p>
              Once you sign in, You get the affiliate link you can post anywhere it is suitable for
              you.
            </p>
          </FAQItemEnhanced>

          <FAQItemEnhanced title={`Can I change or negotiate the Partnerize Terms and Conditions?`}>
            <p>Yes, currently we will accept such negotiations and proposals.</p>
            <p>Please, find more in</p>
          </FAQItemEnhanced>

          <FAQItemEnhanced title={`Do you have a user privacy policy?`}>
            <p>
              Yes. Tracking users at an individual level is not allowed and against our program
              terms and conditions.
            </p>
            <p>
              Partners are unable to include any user- or device-level identifiers such as IDFA,
              Android ID, publisher tracking ID, clickID, or any other data that identifies a
              particular user or device.
            </p>
            <p>
              We also do not collect PII and do not have visibility into anything related, in
              accordance with our privacy policies.
            </p>
          </FAQItemEnhanced>

          <FAQItemEnhanced title={`Why I may not receive a commission?`}>
            <h5>Commision could be terminated if:</h5>

            <ul>
              <li>
                You may not receive a commission due to promotion in any explicit, violent or any
                illegal websites or materials.
              </li>
              <li>
                Any kind of political, controversial and disastrous information, video, and hashtag
                should not be used for the promotion of brand.
              </li>
            </ul>
          </FAQItemEnhanced>

          <FAQItemEnhanced title={`How do I know if my tracking link is working properly?`}>
            <h5>
              To ensure your tracking link is working properly, click on your link(s) a few times.
            </h5>
            <p>
              Then, check Partnerize to see if the clicks appear in Analytics. If you do not see
              clicks tracked, please check the tracking link(s) to ensure that all necessary
              parameters are included. If you did not create the tracking links with the dsadsa.
              please consider doing so to ensure your links are properly configured.
            </p>

            <p>Please be aware, to our program that you get commision from CPS (Cost Per Sale)</p>
          </FAQItemEnhanced>

          <FAQItemEnhanced title={`How do I understand the link?`}>
            <p>To ensure proper tracking the link has to have affiliate token (at=)</p>
            <p>
              And if custom campaign was created for your link, CT (ct=) required in order to track.
            </p>

            <p>Example: https://trimsy.org/development/services/basic?at=123456&ct=example&ls=1</p>
          </FAQItemEnhanced>

          <FAQItemEnhanced title={`What are the payment terms and how quickly will I be paid?`}>
            <p>
              Trimsy releases funds via the payments platform with a simple, rapid bank transfer to
              the partner. After you start generating sales and have hit the minimum payment
              threshold of $30 USD or equivalent for your chosen currency, your commission payment
              will be available almost instantly.
            </p>

            <p>Please, use the link to request the release of funds</p>
          </FAQItemEnhanced>

          <FAQItemEnhanced title="How do I know how much money I’ve earned?">
            <p>
              Payout reflects the amount of commission you will earn, while Revenue is the total
              amount or value of purchases your users have made on any qualifying commissionable
              items from Apple Services.
            </p>
          </FAQItemEnhanced>

          <FAQItemEnhanced title="Once I release a payment, how long will it take to show in my bank account?">
            <p>
              This depends on your bank. Some banks have a holding period of 48 hours until they
              release funds to their customers. If you do not receive your funds after 8 days of the
              “paid date” timestamp in your platform, please reach out to our support team.
            </p>
          </FAQItemEnhanced>
          <FAQItemEnhanced title="How do I see the payments that have been made to me?">
            <p>
              In the Payments section, you can download a selfbill by checking the box(es) next to
              the desired selfbill(s), and then choosing the download option (either PDF or CSV
              format) from the Actions menu in the upper-righthand corner. The PDF contains an
              invoice for the total amount. The CSV contains a detailed view of all the individual
              approved transactions associated with the invoice total.
            </p>
          </FAQItemEnhanced>
          <FAQItemEnhanced title="Can I combine and release payments if they are under $30 USD or equivalent?">
            <p>
              No. Each tracked currency is required to hit the minimum threshold in order to be
              released.
            </p>
          </FAQItemEnhanced>
          <FAQItemEnhanced title="What currencies can I choose to be paid in?">
            <p>You can request to be paid in US dollars.</p>
          </FAQItemEnhanced>
          <FAQItemEnhanced title="Will I be charged a fee when I release funds?">
            <p>In certain situations, the bank receiving the funds may charge fees.</p>
          </FAQItemEnhanced>

          <FAQItemEnhanced title="Are there taxes on my payments?">
            <p>
              No, fortunately no taxes will be applied. Only you will be responsible for any
              applicable tax regulations outside of our platform and partners program.
            </p>
          </FAQItemEnhanced>
          <FAQItemEnhanced title="Will VAT be included?">
            <p>If you provide a VAT ID, the applicable VAT amount will be removed.</p>
          </FAQItemEnhanced>
          <FAQItemEnhanced title="Can I have my VAT number included even if you can’t pay VAT into my country?">
            <p>
              Yes. Simply select “Not registered for VAT” but include your VAT number in the box
              provided and it will appear on your selfbill, whether it is included or not.
            </p>
          </FAQItemEnhanced>
          <FAQItemEnhanced title="I’ve released a payment but my bank details aren’t correct. What should I do?">
            <p>
              Please email support@trimsy.org mmediately and we will attempt to stop the payment
              before it is processed, or an amendment will be sent.
            </p>
          </FAQItemEnhanced>
          <FAQItemEnhanced title="I’ve lost my account details. What should I do?">
            <p>Follow here to try to recover you account.</p>
            <p>Otherwise, please email to support@trimsy.org so we can help as soon as possible.</p>
          </FAQItemEnhanced>

          <h4>Contact Us</h4>
          <p>You can familiarize yourself with our privacy practices</p>
          <p>Trimsy inc.</p>
          <p>+1 587-998-1168</p>
          <Link href="mailto:support@trimsy.org">{`support@trimsy.org`}</Link>
        </div>
      </div>
    </>
  );
}

export default TermsOfUse;
