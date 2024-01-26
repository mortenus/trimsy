import React from 'react';

import styles from './ContactForm.module.scss';

import ContactInput from 'components/Form/Input';
// import { Button } from 'components';
import clsx from 'clsx';
import ButtonServices from './Button';
import { TPurpose } from './index.types';
import ButtonWrapper from './ButtonWrapper';
import SEOButton from './SEOButton';
import { TSeoArr } from './SEOButton/SEOButton.types';
import { Button } from 'components';
import useDebounce from 'hooks/useDebounce';

type TContactForm = {
  productTypeProp?: string;
};

type TPurposeArr = {
  title: string;
  description?: string;
  type: TPurpose;
};

const purposeArr: TPurposeArr[] = [
  {
    title: 'Yes',
    type: true,
  },
  {
    title: 'No',
    type: false,
  },
];

const seoArr: TSeoArr[] = [
  {
    title: 'Advanced',
    price: 399,
    keyPoints: [
      'Everything in Basic.',
      'In-depth analysis to identify high-performing and niche-specific keywords.',
      'Advanced content optimization for improved relevancy and user engagement.',
      'Detailed audit of website structure, crawlability, and technical elements',
    ],
    svgLinks: {
      svgOriginal: '/static/img/services/custom-seo.png',
      svgInverted: '/static/img/services/custom-seo3.png',
    },
  },
  {
    title: 'Custom',
    price: 1499,
    keyPoints: [
      `Everything in Adavanced SEO.`,
      `Customized strategy aligned with specific business goals and challenges.`,
      `Industry-focused optimization strategies for unique requirements.`,
      `Strategies for websites targeting multiple countries and languages.`,
    ],
    svgLinks: {
      svgOriginal: '/static/img/services/custom-seo.png',
      svgInverted: '/static/img/services/custom-seo3.png',
    },
  },
  {
    title: 'Basic',
    keyPoints: [
      'Identification of relevant keywords related to the business and industry.',
      'Content optimization for targeted keywords and user readability.',
      'Optimization of meta titles, meta descriptions, header tags, and URL structures.',
      'Listing the business on local directories to improve local search visibility.',
    ],
  },
];

const ContactForm = (props: any & TContactForm) => {
  const { values, status, touched, errors, handleChange, handleBlur, handleSubmit, isSubmitting } =
    props;

  const [activeStage, setActiveStage] = React.useState(0);

  const handleNextStage = () => setActiveStage(activeStage + 1);
  const handlePrevStage = () => {
    if (activeStage === 0) return;
    setActiveStage(activeStage - 1);
  };

  // Orders
  const [purpose, setPurpose] = React.useState<TPurpose>(null);

  const handlePurposeChange = (type: TPurpose) => {
    setPurpose(type);
    setActiveStage(2);
  };

  const [seo, setSeo] = React.useState<string | null>(null);
  const handleSeoChange = (type: string) => {
    setSeo(type);
    setActiveStage(3);
  };

  const SEObuttonWrapperRef = React.useRef<HTMLDivElement>(null);
  const contactComponentRef = React.useRef<HTMLDivElement>(null);

  const [preFormAnim, setPreFormAnim] = React.useState(false);
  const [preFormHidden, setPreFormHidden] = React.useState(false);

  const debounceScrollToRefContact = useDebounce(
    () => {
      scrollToRef(contactComponentRef);
    },
    100,
    [],
  );

  const debouncePreFormHidden = useDebounce(
    () => {
      setPreFormHidden(true);
      debounceScrollToRefContact();
    },
    200,
    [],
  );

  React.useEffect(() => {
    if (activeStage === 2) {
      scrollToRef(SEObuttonWrapperRef);
    } else if (activeStage === 3) {
      setPreFormAnim(true);
      debouncePreFormHidden();
    }

    // Add more conditions for other stages
  }, [activeStage]);

  const handleClose = () => {
    setPreFormHidden(false);
    setPreFormAnim(false);

    handlePrevStage();
  };

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      const { top } = ref.current.getBoundingClientRect();
      const viewportHeight = ref.current.clientHeight;
      const currentPositionFromTheBottom = top - viewportHeight;

      const targetPosition = currentPositionFromTheBottom;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  };

  const handleSubmitDebounce = () => {
    // values.order.productType = productTypeProp;
    // values.order.purpose = purpose;
    // values.order.seo = seo;

    handleSubmit();
  };

  const [isConsent, setIsConsent] = React.useState<boolean | null>(null);

  const handleIsConsent = (bool: boolean | null) => {
    setIsConsent(bool);
  };

  return (
    <div className={styles.wrapper}>
      <div className={'global-wrapper'}>
        <div
          className={clsx(styles[`pre-submit`], {
            [styles.anim]: preFormAnim,
            [styles.hidden]: preFormHidden,
          })}>
          <div onSubmit={handleSubmit} className={styles[`final-form__items`]}>
            {/* <Button
              status={status && status}
              disabled={isSubmitting ? 'black' : false}
              //   type="submit"
              color="black-inverse"
              size="medium"
              onClick={handleSubmitDebounce}>
              Submit
            </Button> */}
            <div className={styles[`final-form__items`]}>
              <ContactInput
                size="small"
                name="socialMedia"
                help={!touched?.socialMedia ? undefined : errors.socialMedia}
                value={values?.socialMedia}
                onChange={handleChange}
                onBlur={handleBlur}
                label={'Where would you like to promote Trimsy? *'}
                placeholder={'Twitter: @example, Instagram: @example'}
              />

              <ContactInput
                size="small"
                name="companyName"
                help={!touched?.companyName ? undefined : errors.companyName}
                value={values?.companyName}
                onChange={handleChange}
                onBlur={handleBlur}
                label={'Company Name (if applicable)'}
                placeholder={'Company Name'}
              />

              <ContactInput
                size="small"
                name="hearAbout"
                help={!touched?.hearAbout ? undefined : errors.hearAbout}
                value={values?.hearAbout}
                onChange={handleChange}
                onBlur={handleBlur}
                label={'How did you hear about Trimsy? *'}
                placeholder={'Your answer'}
              />

              <ContactInput
                size="small"
                name="audienceTarget"
                help={!touched?.audienceTarget ? undefined : errors.audienceTarget}
                value={values?.audienceTarget}
                onChange={handleChange}
                onBlur={handleBlur}
                label={`What are the target audience you want to target? *`}
                placeholder={'Your answer'}
              />

              <ContactInput
                size="small"
                name="details"
                help={!touched?.details ? undefined : errors.details}
                value={values?.details}
                onChange={handleChange}
                onBlur={handleBlur}
                label={`More details you would want us to know?`}
                placeholder={'Your answer'}
              />
            </div>
          </div>

          <div className={styles[`final-form__items`]}>
            <h3 className={styles.title}>Account</h3>
            <div className={styles[`item`]}>
              <ContactInput
                size="small"
                name="username"
                help={!touched?.username ? undefined : errors.username}
                value={values?.username}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder={'Enter your username'}
                label={'Username *'}
              />
              <p className={styles[`item__description`]}>
                Username will be used to log in to your account, you won’t be able to change it
                later
              </p>
            </div>

            <div className={styles[`item`]}>
              <ContactInput
                size="small"
                help={!touched?.email ? undefined : errors.email}
                value={values?.email}
                onChange={handleChange}
                onBlur={handleBlur}
                name="email"
                placeholder={'Enter your email'}
                label={'Email *'}
              />

              <p className={styles[`item__description`]}>
                In case of releasing the funds, any important information or updates, and important
                announcements - We'll send it to your email address
              </p>
            </div>

            <ContactInput
              size="small"
              name="password"
              help={!touched?.password ? undefined : errors.password}
              value={values?.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={'Password'}
              label={'Password *'}
            />

            <ContactInput
              size="small"
              name="passwordRepeat"
              help={!touched?.passwordRepeat ? undefined : errors.passwordRepeat}
              value={values?.passwordRepeat}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={'Repeat password'}
              label={'Repeat password *'}
            />

            {/* <Button
              status={status && status}
              disabled={isSubmitting ? 'black' : false}
              //   type="submit"
              color="black-inverse"
              size="medium"
              onClick={handleSubmitDebounce}>
              Submit
            </Button> */}
          </div>
          <ButtonWrapper
            title={'Terms and Conditions'}
            description={'I agree to the Trimsy Partner Program terms and conditions'}
            help={
              !isConsent ? 'Partners program requires agreement with terms and conditions' : ''
            }>
            {purposeArr.map((obj) => (
              <ButtonServices
                {...obj}
                onClick={() => handleIsConsent(obj.type)}
                activeType={isConsent}
                key={obj.title}
              />
            ))}
          </ButtonWrapper>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              status={status && status}
              disabled={
                Object.values(errors).length !== 0 || !isConsent || isSubmitting ? true : false
              }
              //   type="submit"
              type="submit"
              size="medium"
              onClick={handleSubmitDebounce}>
              Join
            </Button>
          </div>
          {/* {activeStage >= 2 && (
          <ButtonWrapper title={'SEO.'} description={'Select the one that works best for you.'}>
            {purposeArr.map((obj) => (
              <div className={clsx(styles[`item`], { [styles.active]: type === activeType })}>
                <div className={styles[`item-`]}>
                  <h3 className={styles[`item-title`]}>{obj.title}</h3>
                  <span className={styles[`item-price`]}></span>
                </div>

                <div className={styles[`item-description`]}>{obj.description}</div>
              </div>
            ))}
          </ButtonWrapper>
        )} */}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
