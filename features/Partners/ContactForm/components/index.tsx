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
  const {
    values,
    status,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    productTypeProp,
  } = props;

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
      console.log('active stage 2');
    } else if (activeStage === 3) {
      setPreFormAnim(true);
      debouncePreFormHidden();
      console.log('active stage 3');
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
    values.order.productType = productTypeProp;
    values.order.purpose = purpose;
    values.order.seo = seo;

    handleSubmit();
  };

  const [isConsent, setIsConsent] = React.useState<boolean | null>(false);

  return (
    <div className={styles.wrapper}>
      <div className={'global-wrapper'}>
        <div
          className={clsx(styles[`pre-submit`], {
            [styles.anim]: preFormAnim,
            [styles.hidden]: preFormHidden,
          })}>
          <div onSubmit={handleSubmit} className={styles[`final-form__items`]}>
            <h3 className={styles.title}>Enter your username and email:</h3>
            <div className={styles[`item`]}>
              <ContactInput
                size="small"
                name="username"
                help={!touched?.username ? undefined : errors.username}
                value={values?.username}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder={'Enter your username'}
                label={'Username'}
              />
              <p className={styles[`item__description`]}>
                Username will be used to log in and you won’t be able to change it
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
                label={'Email'}
              />

              <p className={styles[`item__description`]}>
                We’ll email you a receipt if you release the funds and send new program updates,
                promotions, and important announcements via your email address
              </p>
            </div>
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
          <div onSubmit={handleSubmit} className={styles[`final-form__items`]}>
            <ContactInput
              size="small"
              name="socialMedia"
              help={!touched?.socialMedia ? undefined : errors.socialMedia}
              value={values?.socialMedia}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={'What are your main social handles'}
            />
          </div>
          <div onSubmit={handleSubmit} className={styles[`final-form__items`]}>
            <h3 className={styles.title}>Enter your password:</h3>
            <ContactInput
              size="small"
              name="password"
              help={!touched?.password ? undefined : errors.password}
              value={values?.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={'Password'}
            />

            <ContactInput
              size="small"
              name="rpassword"
              help={!touched?.rpassword ? undefined : errors.rpassword}
              value={values?.rpassword}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={'Repeat password'}
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
            description={'I agree to the Trimsy Partner Program terms and conditions'}>
            {purposeArr.map((obj) => (
              <ButtonServices
                {...obj}
                onClick={() => setIsConsent(obj.type)}
                activeType={purpose}
                key={obj.title}
              />
            ))}
          </ButtonWrapper>
          <Button
            status={status && status}
            disabled={isSubmitting ? 'black' : false}
            //   type="submit"
            color="black-inverse"
            size="medium"
            onClick={handleSubmitDebounce}>
            Submit
          </Button>
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
