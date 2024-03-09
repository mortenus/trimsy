import Logo from 'components/Logo';
import Link from 'next/link';
import React from 'react';

import styles from './terms-of-use.module.scss';
import FAQItemEnhanced from 'components/FAQEnhanced/Item';

TermsOfUse.title = 'Terms of Use';
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
          <div className={styles.center}>
            <h2>Terms of Use</h2>
            <p>Last updated: Feb 24th, 2023</p>
          </div>
          <div className={styles.center} style={{ marginBottom: '50px' }}>
            <h4>Introduction</h4>
            <p>
              Welcome to Trimsy. The following terms of use, referred to as{' '}
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
          </div>
          <FAQItemEnhanced title={`Identification of the User`}>
            It is crucial to recognize that you must either qualify as an authorized user affiliated
            with an organization or another third party that is a Trimsy customer (collectively
            referred to as an "Organization Customer") or be a Trimsy customer yourself to access
            and utilize the Services. In both scenarios, it is imperative to consent to these Terms
            before engaging with the Services.
            <h5>Personal Data</h5>
            <p>
              If you are an authorized user associated with an Organization Customer, Trimsy has
              established a distinct agreement ("Contract") with the Organization Customer to
              facilitate access and furnish its personnel with the ability to use the Services. The
              Contract encompasses our commitment to deliver the Services to the Organization
              Customer, who may then acquire user accounts for each individual authorized user.
            </p>
            <p>
              In the event that you are an authorized user of an Organization Customer, you are
              explicitly prohibited from initiating or sustaining any claims against Trimsy, its
              partners, employees, officers, directors, affiliates, agents, contractors, successors,
              and assigns, as well as those of its affiliates, pertaining to any matters related to
              or associated with the subject matter of these Terms. It is pertinent to note that
              these Terms specifically pertain to the Services and do not in any manner modify the
              terms or conditions of any other agreement that may be applicable to your utilization
              of the Services, including the Contract.
            </p>
          </FAQItemEnhanced>

          <FAQItemEnhanced title={`Potential Changes to these Terms or the Services`}>
            <h5>Modifications to these Terms</h5>
            <p>
              Unless prohibited by applicable law, we retain the unilateral right to modify any
              aspect of these Terms at our discretion. In the event of such modifications, we will:
              (i) issue a notice on the Trimsy Platform and the Trimsy App, dispatch an email to
              you, and/or use any other necessary means as stipulated by applicable law; (ii)
              publish an updated version on the Trimsy Platform and the Trimsy App; and (iii) revise
              the "Last Updated" date at the commencement of these Terms. In certain instances, your
              consent may be required before further use of the Services is authorized in accordance
              with the updated Terms. Failure to agree to any such changes following notice will
              necessitate the cessation of your use of the Services. Otherwise, continued access to
              or use of the Services subsequent to modifications to these Terms will be construed as
              acceptance of the revised terms.
            </p>

            <h5>Alterations to our Service</h5>
            <p>
              We retain the prerogative to modify the Services at any time without prior
              notification. At our discretion, we may suspend your access to or use of the Services
              or any of its components: (i) for scheduled maintenance; (ii) in response to any
              violation of these Terms; or (iii) to address emergent security concerns.
            </p>

            <h5>Updates to Third-Party Software</h5>
            <p>
              Periodic updates to third-party software may be required for seamless utilization of
              the Services.
            </p>
          </FAQItemEnhanced>

          <FAQItemEnhanced title="User Account Management">
            <h5>Establishment of User Credentials</h5>
            <p>
              To unlock specific features of the Services, you may need to successfully register for
              a user account using the provided service interfaces and choose a username and
              password as your login credentials ("User ID").
            </p>

            <h5>Security of Your Account</h5>
            <p>
              Should you opt for a User ID, it is imperative to maintain the security of your User
              ID and refrain from providing access to or sharing your User ID with any other
              individual.
            </p>

            <h5>Provision of Accurate Information</h5>
            <p>
              You are obligated to furnish us with accurate, current, and complete information for
              your User ID. In the event that we have reason to believe or suspect that your
              information is inaccurate, outdated, or incomplete, we retain the right to deny or
              terminate your access to the Services.
            </p>

            <h5>Account Disabling</h5>
            <p>
              We retain the discretion to deactivate any User ID assigned to you at any time. The
              disabling of access to a User ID may result in your inability to access the Services,
              either in part or in full.
            </p>

            <h5>Utilizing Third-Party Accounts</h5>

            <p>
              To establish an Account, you will need to integrate your calendar(s). Additionally,
              specific features of the Services may be accessible using your account credentials
              from other platforms (collectively referred to as "Third-Party Accounts"). By
              connecting a Third-Party Account and utilizing the Services through it, you grant us
              permission to retrieve certain information, consistent with the settings of your
              Third-Party Account. You retain control over the extent of information accessible by
              adjusting these settings.
            </p>

            <h5>Responsible Use of Your Account</h5>
            <p>
              Trimsy is authorized to act upon instructions received through your account. Any
              actions or transactions conducted to or from your account by any third party using
              your User ID are not the responsibility of Trimsy. You bear sole responsibility for
              the use of your User ID and all activities associated with it. Without limiting any
              other rights we may have, we reserve the prerogative to take any necessary or
              reasonable actions to ensure the security of the Services and your account. This may
              include, but is not limited to, terminating your account and altering your password.
              You agree to assume responsibility for any actions or omissions of users accessing the
              Services under your User ID, which, if performed by you, would be considered a
              violation of these Terms.
            </p>
          </FAQItemEnhanced>
          <FAQItemEnhanced title="Electronic Communications">
            <h5>Communicating Together Electronically</h5>
            <p>
              When you use or view the Services or send emails, texts or other electronic messages
              to us, you are communicating with us electronically and you consent to receive
              communications from us electronically. We will communicate with you by email, instant
              messenger services, in the app or by posting notices on the Services. You agree that
              all agreements, notices, disclosures and other communications that we provide to you
              electronically satisfy any legal requirement that such communications be in writing.
            </p>

            <h5>Service-Related Emails</h5>
            <p>
              By creating an account to access the Services, you acknowledge and agree that Trimsy
              will send you service-related emails relating to your account, including service
              updates. These communications can be managed through user features made available
              through the Services from time to time. Your consent to receive communications and do
              business electronically, and our agreement to do so, applies to all of your
              interactions and transactions with us. You may withdraw your consent to receive
              communications electronically by contacting us in the manner described below. If you
              withdraw your consent (excluding consent to receive marketing communications), from
              that time forward, you must stop using the Services. The withdrawal of your consent
              will not affect the legal validity and enforceability of any obligations or any
              electronic communications provided, or business transacted between us prior to the
              time you withdraw your consent. Please keep us informed of any changes in your email
              or mailing address so that you continue to receive all communications without
              interruption.
            </p>

            <h5>Marketing Related Emails</h5>
            <p>
              If you are a member of our mailing list you may also receive email communications from
              us regarding our products, services and initiatives. If you do not wish to receive
              these communications, you can unsubscribe from such promotional emails at any time by
              clicking on the unsubscribe link in any of our email communications.
            </p>
          </FAQItemEnhanced>
          <FAQItemEnhanced title="User Data and User Submission">
            <h5>Privacy Concerns</h5>
            <p>
              At Trimsy, we place a significant emphasis on safeguarding your privacy. It is crucial
              to review our prevailing privacy policy, accessible at trimsy.org/privacy-policy,
              which furnishes essential details about our practices related to the collection,
              storage, utilization, and disclosure of information about identifiable individuals
              ("Personal Information"). This privacy policy is integrally incorporated into and
              constitutes a component of these Terms.
            </p>

            <h5>License for User Submissions and Data</h5>
            <p>
              By utilizing the Services, you grant us and our service providers, as well as their
              and our respective licensees, successors, and assigns, an irrevocable, global,
              non-exclusive, royalty-free, transferable, and sublicensable license to access,
              collect, store, and utilize any data, information, records, or files that you load,
              transmit to, or input into the Services ("User Data"). This license is granted to
              facilitate the development, improvement, and availability of the Services and to
              generate Aggregated Data, which refers to data, information, or other materials that
              are not linked to a specific individual or company.
            </p>

            <h5>Aggregated Data</h5>
            <p>
              We, along with our service providers and their and our respective licensees,
              successors, and assigns, retain the freedom to create, utilize, and disclose
              Aggregated Data during and after the Term for any purpose without any obligations.
            </p>

            <h5>Granting License to Other Users</h5>
            <p>
              By posting or publishing Content as a user on the Services ("User Submission"), you
              provide each user of the Services identified in the Services with a non-exclusive,
              perpetual license to access the User Submission through the Services. This license
              permits users to use, edit, modify, reproduce, distribute, prepare derivative works
              of, display, and perform the User Submission, even after the termination of your
              account or the Services.
            </p>

            <h5>Restricting Access</h5>
            <p>
              We retain the right to, at our sole discretion and for any or no reason, remove, edit,
              limit, or block access to User Data and User Submissions. Additionally, we may disable
              or terminate your account, username, password, or any other identifier, whether chosen
              by you or provided by us.
            </p>

            <h5>Responsibility for User Submissions</h5>
            <p>
              You acknowledge that you, and not the Trimsy Parties (as defined below), bear full
              responsibility for all User Submissions. You are fully accountable, including to any
              third party, for the content and accuracy of such submissions. The Trimsy Parties are
              not accountable or legally liable to any third party for the content or accuracy of
              User Submissions made available on the Services by any user.
            </p>

            <h5>Loss of User Data</h5>
            <p>
              Subject to applicable law, Trimsy shall not be liable for any failure to store or the
              loss or corruption of your User Data.
            </p>

            <h5>Authority to Submit Data</h5>
            <p>
              You affirm and warrant that your User Data and User Submissions will solely contain
              Personal Information for which you have provided all necessary notices, disclosures,
              obtained applicable third-party consents and permissions, and have all authority as
              mandated by applicable laws to enable us to provide the Services.
            </p>

            <h5>Rights to Submit Data</h5>
            <p>
              You represent and warrant that: (a) you own or control the necessary rights in and to
              your User Data and User Submissions, including any intellectual property owned by
              third parties; and (b) you will not submit, upload, or make available via the Services
              any User Data that you do not have the rights necessary to use, transmit, publish, or
              grant the licenses described herein. Additionally, you will not submit data that
              infringes, misappropriates, or violates any intellectual property, publicity, or other
              rights of any third party, or breaches any applicable laws or these Terms.
            </p>
          </FAQItemEnhanced>
          <FAQItemEnhanced title="Ownership of Services">
            <h5>Ownership</h5>
            <p>
              The utilization of the Services or these Terms does not confer ownership of the
              Services or the Content accessed through the Services. Additionally, these Terms do
              not extend any rights to utilize Trimsy's trademarks or other brand elements. All
              rights, titles, and interests, encompassing intellectual property rights, in the
              Services, the source code in the software employed to deliver the Services (the
              "Software"), and all other materials provided by us under these Terms, along with any
              updates, adaptations, translations, customizations, or derivative works thereof, shall
              remain the exclusive property of Trimsy (or our third-party suppliers, if applicable).
            </p>

            <h5>Provision of Services</h5>
            <p>
              The Services and all materials supplied under these Terms are made accessible to you
              and are not "sold."
            </p>

            <h5>Copyright</h5>
            <p>
              The Software and all other materials provided under these Terms, including content
              made available through or in the Services, are protected by copyright in Canada, the
              United States, and other countries as per the Berne Convention. You are expressly
              prohibited from modifying, copying, reproducing, publishing, posting, transmitting,
              distributing, creating derivative works from, decompiling, transferring, or selling
              any of the Services, the Software, or other materials provided under these Terms.
              Additionally, you are prohibited from sharing or granting access to any third party
              for any purpose.
            </p>

            <h5>Reserved Rights</h5>
            <p>
              All rights that are not explicitly granted to you in these Terms are reserved by
              Trimsy
            </p>
          </FAQItemEnhanced>

          <FAQItemEnhanced title="License to the Services">
            <p>
              Subject to compliance with these Terms, we hereby provide you with a global,
              non-exclusive, non-transferable, non-sublicensable, and revocable license throughout
              the Term to utilize the Services. This license encompasses the ability to download and
              exhibit local Content exclusively for the purpose of using the Services, in adherence
              to these Terms.
            </p>
          </FAQItemEnhanced>

          <FAQItemEnhanced title="Your Responsibilities">
            <h5>You commit to:</h5>
            <ul>
              <li>
                Implement reasonable measures to prevent unauthorized access to or utilization of
                the Services;
              </li>
              <li>
                Maintain the confidentiality of your User IDs and all other login information;
              </li>
              <li>
                Refrain from registering for more than one account, registering on behalf of an
                individual without proper authorization, or registering on behalf of any group or
                entity;
              </li>
              <li>
                Supervise and manage all activities conducted through your account concerning the
                Services;
              </li>
              <li>
                Upload and distribute only data for which you possess all necessary rights under the
                law, and do so in compliance with applicable legal regulations;
              </li>
              <li>Safeguard, protect, and create backups of your User Data;</li>
              <li>
                Ensure that your email address and, where applicable, contact details associated
                with your account are accurate and up-to-date;
              </li>
              <li>
                Promptly inform us if you become aware or reasonably suspect any illegal or
                unauthorized activity or a security breach involving your account, including any
                loss, theft, or unauthorized disclosure or use of a User ID or account;
              </li>
              <li>
                Refrain from using anyone else's User ID without the explicit permission of the User
                ID holder;
              </li>
              <li>
                Abstain from attempting, in any way, to obtain the password, account, or other
                security information from any other user;
              </li>
              <li>
                Adhere to all applicable laws and regulations, encompassing but not limited to
                intellectual property, data, and privacy laws.
              </li>
            </ul>
          </FAQItemEnhanced>

          <FAQItemEnhanced title="No Unlawful or Prohibited Use">
            <p>
              You commit not to employ the Services in contravention of these Terms or any
              applicable law. Without our prior written consent, you shall not use the Services for
              any purpose other than accessing and utilizing the Services. Specifically, you shall
              not (directly or indirectly):
            </p>

            <ul>
              <li>
                Disable, excessively burden, impair, or otherwise disrupt servers or networks
                connected to the Services (e.g., engaging in a denial-of-service attack);
              </li>
              <li>
                Attempt to gain unauthorized access to the Services or circumvent any measures
                implemented to prevent or restrict access;
              </li>
              <li>
                Transmit, upload, collect, store, use, post, publish, or communicate through the
                Services any data, information, pictures, videos, audio, or other materials that: i.
                Contains computer viruses, worms, malicious code, or any software intended to damage
                or alter a computer system or data; ii. You do not have the lawful right to
                transmit, upload, collect, store, use, post, publish, or communicate; iii. Is false,
                inaccurate, intentionally misleading, or impersonates any other person; iv. Gives
                the false impression of originating from or being endorsed by us or any other person
                or entity; v. Is defamatory, bullying, harassing, abusive, threatening, vulgar,
                exploitative, obscene, harmful, sexually explicit, inflammatory, offensive, or
                discriminatory based on legally prohibited grounds, or contains pornography, nudity,
                graphic or gratuitous violence, or promotes violence, racism, discrimination,
                bigotry, hatred, or physical harm, as determined by Trimsy's sole discretion; vi. Is
                harmful to minors or targeted at minors; vii. Infringes, violates, or otherwise
                misappropriates the intellectual property or other rights of any third party; viii.
                Violates or encourages conduct that may violate applicable laws or would lead to
                civil or criminal liability; ix. Discloses or provides information protected under
                any law, agreement, or fiduciary relationship, including proprietary or confidential
                information of others.
              </li>
              <li>
                Utilize any data mining, robots, or similar data gathering or extraction methods, or
                attempt to discover source code, copy, modify, reverse engineer, reverse assemble,
                disassemble, or decompile the Services or any part thereof;
              </li>
              <li>Use the Services to develop a similar or competitive product or service;</li>
              <li>
                Violate the terms of any linked third-party website, including but not limited to
                third-party social media websites;
              </li>
              <li>
                Impersonate Trimsy, a Trimsy employee, another user, or any other person or entity;
              </li>
              <li>
                Encourage conduct that restricts or inhibits anyone's use or enjoyment of the
                Services, as determined by us;
              </li>
              <li>Promote illegal activity or advocate, promote, or assist any unlawful act;</li>
              <li>
                Share, transfer, or provide access to your designated account to another person;
              </li>
              <li>
                Use the Services for any purpose other than the benefit of the Organization Customer
                that has entered into an agreement to access the Services and granted you the right
                of access;
              </li>
              <li>
                Cause annoyance, inconvenience, or needless anxiety or use the Services in a manner
                likely to upset, embarrass, or alarm any other person;
              </li>
              <li>
                Authorize, permit, enable, induce, or encourage any third party to engage in any of
                the above activities.
              </li>
            </ul>
          </FAQItemEnhanced>

          <FAQItemEnhanced title="Communications">
            <h5>User Interactions</h5>
            <p>
              You bear sole responsibility for your interactions with other users of the Services,
              encompassing any communications exchanged through the Services.
            </p>

            <h5>Content Exposure</h5>
            <p>
              While we endeavor to enforce the aforementioned Terms with all users, it is possible
              that you may encounter Content through the Services that violates our policies or is
              otherwise offensive. Your use of the Services is undertaken at your own risk. We
              retain the right, but are not obligated, to remove Content from the Services for any
              reason, including instances where we determine or suspect that such Content breaches
              these Terms. Our role is that of a passive conduit for distribution, and we disclaim
              any responsibility for your exposure to Content on the Services, irrespective of
              whether it violates our content policies. To the maximum extent permissible under
              applicable law, you hereby release us from all liability related to your acquisition
              or non-acquisition of Content through the Services.
            </p>
          </FAQItemEnhanced>

          <FAQItemEnhanced title="Communications Not Confidential">
            <p>
              We provide no assurance of the confidentiality of any communications initiated by you
              through the Services. Furthermore, we do not guarantee the security of data
              transmitted over the Internet or public networks concerning your use of the Services.
            </p>
          </FAQItemEnhanced>

          <FAQItemEnhanced title="Feedback">
            <h5>Confidentiality Disclaimer</h5>
            <p>
              You acknowledge and agree that any suggestions or ideas provided by you, referred to
              as "Feedback," will not be treated as confidential. Nothing in these Terms shall
              impose restrictions on our right to utilize, derive benefit from, disclose, publish,
              or otherwise exploit any Feedback without compensating you or assuming any obligation
              to you.
            </p>

            <h5>Grant of Rights</h5>
            <p>
              You hereby grant us, our affiliates, and service providers, as well as their and our
              respective licensees, successors, and assigns, a fully paid-up, perpetual,
              irrevocable, worldwide, royalty-free, non-exclusive, and fully sublicensable right
              (including any moral rights) and license to use, license, distribute, reproduce,
              modify, adapt, translate, publicly perform, publicly display, import, sell, offer for
              sale, make, have made, derive revenue or other remuneration from, and otherwise
              exploit and disclose to third parties the Feedback in any form, media, or technology,
              whether known now or developed in the future. This grant extends to permitting others
              to do the same.
            </p>

            <h5>Method of Submission</h5>
            <p>
              The grant of rights detailed above applies regardless of whether you provide the
              Feedback on the Services or through any other method of communication with us, unless
              a separate agreement has been entered into between us stipulating otherwise.
            </p>

            <h5>Waiver of Claims</h5>
            <p>
              You expressly waive any claims, including but not limited to those based on invasion
              of privacy, defamation, or right of publicity, arising from any use, alteration,
              blurring, distortion, or use in composite form of any Feedback. Unless prohibited by
              law, you hereby waive, and agree to waive, any moral and author's rights (including
              attribution and integrity) that you may have in any Feedback, even if it is altered or
              changed in a manner not agreeable to you.
            </p>
          </FAQItemEnhanced>

          <FAQItemEnhanced title="Malicious Code and Security">
            <h5>User Risk</h5>
            <p>
              The downloading and viewing of Content through the Services are undertaken at your own
              risk. We do not assure or warrant that the Services are compatible with your computer
              system or mobile device. Additionally, we do not guarantee that the Services, or any
              links from the Services, will be free of viruses, worms, trojan horses, disabling
              devices, or other code that may exhibit contaminating or destructive properties.
            </p>

            <h5>User Responsibility</h5>
            <p>
              You are responsible for implementing safeguards to ensure the security and integrity
              of your computer system and/or mobile device. Any service, repairs, or connections
              necessary for your computer system and/or mobile device resulting from your use of the
              Services are your responsibility, and you bear the entire cost associated with such
              services.
            </p>
          </FAQItemEnhanced>

          <FAQItemEnhanced title="Disclaimer">
            <h5>Legal Rights Notice</h5>
            <p>
              Certain jurisdictions, including Quebec, may not permit the exclusion or limitation of
              specific legal warranties, conditions, or representations. If such laws apply to you,
              some or all of the exclusions or limitations in these Terms, including the following
              disclaimers, may not be applicable, and you may possess additional rights. To the
              extent that, as a matter of applicable law, we cannot disclaim any implied warranty or
              condition, the extent and duration of such warranty or condition will be the minimum
              permitted under such applicable law.
            </p>

            <h5>"As Is" and "As Available"</h5>
            <p>
              To the fullest extent permitted by applicable law, you acknowledge, understand, and
              agree that the Services are provided "as is" and "as available," with all faults and
              without warranties or conditions of any kind. Except for any specific warranties
              provided or as otherwise mandated by law, we, to the fullest extent permitted by
              applicable law, disclaim all warranties, representations, and conditions of any kind
              concerning the Services. This includes, without limitation, any warranties and
              conditions of merchantability, quality, durability, compatibility, title, security,
              reliability, completeness, quiet enjoyment, accuracy, currency, timeliness,
              integration, fitness for a particular or general purpose, and non-infringement.
              Additionally, we disclaim any warranties or conditions arising out of the course of
              dealing or usage of trade, and any warranties or conditions that the Services are or
              will be error-free or will operate without interruption.
            </p>

            <h5>Third-Party Communications and Content</h5>
            <p>
              To the fullest extent permitted by applicable law, we disclaim all warranties,
              representations, and conditions of any kind regarding third-party communications and
              any third-party websites or content directly or indirectly accessed through the
              Services.
            </p>
          </FAQItemEnhanced>

          <FAQItemEnhanced title="Limitation of Liability">
            <h5>General Limitation</h5>
            <p>
              To the fullest extent permitted by applicable law, under no circumstances will we or
              our affiliates or our or their respective officers, directors, shareholders,
              employees, contractors, agents, licensors, licensees, and services providers, as well
              as any successors and assigns of the foregoing (collectively with Trimsy, the "Trimsy
              Parties"), be liable, whether based on warranty, contract, tort, negligence, strict
              liability, or any other legal theory, for any indirect, incidental, consequential,
              special, exemplary, or punitive damages. This includes, without limitation, lost
              profits, loss of use, loss of data, personal injury, fines, fees, penalties, or other
              liabilities, regardless of whether we were advised or should have known of the
              possibility of such damages. Such damages may result from or be related to the
              Services or the inability to make use of the Services, or these Terms. If you are
              dissatisfied with any portion of the Services, your sole and exclusive remedy is to
              discontinue the use of the Services.
            </p>

            <h5>Maximum Liability</h5>
            <p>
              To the fullest extent permitted by applicable law, in no event will our total
              aggregate liability in connection with or under these Terms, or your use of, or
              inability to make use of, the Trimsy Services, exceed $100 CAD. It is clarified that
              the existence of one or more claims under these Terms will not increase this maximum
              liability amount.
            </p>

            <h5>Force Majeure</h5>
            <p>
              Without limiting the foregoing, under no circumstances will any of the Trimsy Parties
              be held liable for any delay or failure in performance resulting directly or
              indirectly from acts of nature, forces, or causes beyond our or their reasonable
              control. This includes, without limitation, Internet failures, computer equipment
              failures, telecommunication equipment failures, other equipment failures, electrical
              power failures, strikes, labour disputes, riots, insurrections, civil disturbances,
              shortages of labour or materials, fires, floods, storms, explosions, pandemics, acts
              of God, war, governmental actions, orders of domestic or foreign courts or tribunals,
              or non-performance of third parties.
            </p>
          </FAQItemEnhanced>

          <FAQItemEnhanced title="Indemnification">
            <p>
              You agree to defend, indemnify, and hold harmless the Trimsy Parties from and against
              any claims, causes of action, demands, recoveries, losses, damages, fines, penalties,
              or other costs or expenses of any kind or nature, including reasonable legal and
              accounting fees. This indemnification is arising out of or in connection with:
            </p>

            <ul>
              <li>Your User Data and the User Submission</li>
              <li>Your use of the Services (except to the extent prohibited by law);</li>
              <li>
                Your breach of any provision of these Terms or any documents referenced herein;
              </li>
              <li>
                Your violation of any law or the rights of a third party (including intellectual
                property rights);
              </li>
              <li>
                In any manner, violation of the Terms of any third-party website linked to the
                Services, including, but not limited to, any third-party social media website;
              </li>
              <li>
                Any viruses, Trojan horses, worms, time bombs, spyware, malware, cancelbots, or
                other similar harmful or deleterious programming routines input by you into the
                Services.
              </li>
            </ul>

            <p>
              Trimsy reserves the right, at its own cost, to assume the exclusive defense and
              control of any matter otherwise subject to indemnification by you. In such an event,
              you will fully cooperate with us in asserting any available defenses. You acknowledge
              and agree that the provisions in this section will survive any termination of your
              account, the Terms, or your access to the Services.
            </p>
          </FAQItemEnhanced>

          <FAQItemEnhanced title="Payment">
            <h5>Submitting Payment Information</h5>
            <p>
              If you choose to subscribe to a paid Trimsy account, you are required to furnish
              Trimsy or, if applicable, a third-party payment processor ("Payment Processor") with
              the necessary information to process your payment, including billing details. The
              payment processing is subject to the terms, conditions, and privacy policies of the
              Payment Processor, if any, in addition to these Terms. We are not accountable for any
              errors, acts, or omissions of any Payment Processor.
            </p>

            <h5>Payment Authorization</h5>
            <p>
              Upon submitting your payment information to us or the Payment Processor, you grant
              authorization for us or the Payment Processor to charge the applicable payment method
              at our or their convenience (within thirty (30) days of credit card authorization).
              You affirm that you will not use any credit card or payment method without proper
              authorization. Payment terms will be based on your selected payment provider and may
              be determined by agreements between you and the financial institution, credit card
              issuer, or other provider of your chosen payment method. Failure to receive payment
              from you, whether through the Payment Processor or otherwise, obliges you to settle
              all amounts due on your billing account upon demand.
            </p>

            <h5>Accurate and Updated Billing Information</h5>
            <p>
              You are obligated to provide current, complete, and accurate information for your
              billing account. Promptly updating all information, including changes in billing
              address, credit card number, or expiration date, is essential. You must notify us or
              the Payment Processor promptly if your payment method is canceled (e.g., due to loss
              or theft) or if you suspect a potential security breach, such as the unauthorized
              disclosure or use of your username or password. Changes to this information can be
              made in your account settings. Failure to provide this information authorizes us to
              continue charging you for any use of paid services under your billing account.
            </p>

            <h5>Changes To Billing Amounts</h5>
            <p>
              If the amount charged to your billing account differs from the preauthorized amount
              (except due to the imposition or change in the amount of applicable sales taxes), you
              have the right to receive, and we will provide, notice of the amount and the date of
              the charge before the scheduled transaction date. Your agreement with your payment
              provider will govern your use of the chosen payment method. You agree that we may
              aggregate charges incurred and submit them as one or more transactions during or at
              the end of each billing cycle.
            </p>
          </FAQItemEnhanced>

          <FAQItemEnhanced title="Term and Termination">
            <p>
              These Terms become effective on the day of your initial use of the Services and will
              remain in force until the earlier of (a) termination by either party as per the
              provisions of these Terms, or (b) the termination or expiration of the Contract
              (referred to as the "Term"). We reserve the right to terminate these Terms at any time
              and with immediate effect by providing notice to you or the Organization Customer
              through email or the Services, at our discretion. You have the option to terminate
              these Terms at any time and with immediate effect by reaching out to us and making
              such a request or by deleting your account in the account settings. If you continue to
              use any publicly available portion of the Services after the termination of these
              Terms, they will still apply to the extent of such use.
            </p>

            <h5>Survival</h5>
            <p>
              The following Sections, along with any other provision explicitly or inherently
              surviving termination or expiration, or contemplating performance or observance
              subsequent to termination or expiration, will endure the expiration or termination of
              these Terms for any reason: Sections 5 (User Data and User Submission), 6 (Ownership
              of the Services), 11 (Communications Not Confidential), 13 (Malicious Code and
              Security), 14 (Disclaimer), 15 (Limitation of Liability), 16 (Indemnification), 18(b)
              (Survival), and 19 (General Provisions).
            </p>
          </FAQItemEnhanced>

          <FAQItemEnhanced title="General Provisions">
            <h5>Choice of Law</h5>
            <p>
              Except as limited by applicable law, these Terms will be governed by the laws of the
              Province of British Columbia and the federal laws of Canada applicable therein,
              without regard to any conflicts of law principles. These laws apply to your access to
              or use of the Services, regardless of your domicile, residency, or physical location.
              You may only use the Services in jurisdictions where the Services can lawfully be
              used. Except as restricted by applicable law, you consent to the exclusive
              jurisdiction and venue of courts in Vancouver, British Columbia, for all disputes
              arising out of or related to the use of the Services. The U.N. Convention on Contracts
              for the International Sale of Goods will not apply to these Terms. This choice of
              jurisdiction does not preclude us from seeking injunctive relief regarding a violation
              of intellectual property rights or confidentiality obligations in any appropriate
              jurisdiction.
            </p>

            <h5>Entire Agreement</h5>
            <p>
              These Terms constitute the entire agreement between you and us regarding the subject
              matter and supersede all prior or contemporaneous communications and proposals,
              whether electronic, oral, or written, between you and us concerning the Services. A
              printed version of these Terms and any notice provided in electronic form will be
              admissible in judicial or administrative proceedings to the same extent and subject to
              the same conditions as other business documents and records initially generated and
              maintained in printed form.
            </p>

            <h5>Waiver</h5>
            <p>
              Our failure to insist upon or enforce strict performance of any provision of these
              Terms will not be construed as a waiver of any provision or right. A waiver of any
              provision of these Terms must be in writing, and a waiver in one instance will not
              preclude enforcement of such provision on other occasions.
            </p>

            <h5>Severable</h5>
            <p>
              If any provision in these Terms is determined to be void, invalid, or otherwise
              unenforceable by a court of competent jurisdiction, that provision will be severed
              from these Terms, and all other provisions will remain in full force and effect
            </p>

            <h5>Assignment</h5>
            <p>
              You may not assign these Terms to any third party without our prior written consent.
              We reserve the right to assign these Terms or any rights under these Terms to any
              third party without your consent. Any attempted assignment, subcontract, delegation,
              or transfer in violation of this section will be null and void. The terms of these
              Terms will be binding upon permitted assignees. These Terms will inure to the benefit
              of and be binding upon the parties, their permitted successors, and permitted
              assignees.
            </p>

            <h5>Dispute Resolution</h5>
            <p>
              If you believe that Trimsy has not adhered to these Terms, please contact Trimsy using
              the contact information provided below. We will make efforts to address your concerns.
              If you feel that your complaint has not been fully addressed, you are encouraged to
              inform us for further investigation.
            </p>

            <h5>English Language</h5>

            <p>
              It is the explicit desire of the parties that these Terms and all related documents be
              written in English. C'est la volonté expresse des parties que la présente convention
              ainsi que les documents qui s'y rattachent soient rédigés en anglais.
            </p>
          </FAQItemEnhanced>

          <h4>Contact Us</h4>
          <p>
            Please, you can familiarize yourself with our terms of use practices directly with us.
          </p>
          <p>Trimsy inc.</p>
          <p>+1 587-439-2480</p>
          <Link href="mailto:support@trimsy.org">{`support@trimsy.org`}</Link>
        </div>
      </div>
    </>
  );
}

export default TermsOfUse;
