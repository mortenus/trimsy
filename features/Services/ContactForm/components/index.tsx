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
  productType?: string;
};

type TPurposeArr = {
  title: string;
  description?: string;
  type: TPurpose;
};

const purposeArr: TPurposeArr[] = [
  {
    title: 'Business or Corporate',
    description: 'Showcase products or services.',
    type: 'business',
  },
  {
    title: 'Portfolio or Personal',
    description: 'Work showcase, highlighting projects and achievements.',
    type: 'portfolio',
  },
  {
    title: 'Blog or Content',
    description: 'Share industry insights, knowledge and articles.',
    type: 'blog',
  },
  {
    title: 'Other',
    type: 'other',
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
    productType,
  } = props;

  const [activeStage, setActiveStage] = React.useState(0);

  const handleNextStage = () => setActiveStage(activeStage + 1);
  const handlePrevStage = () => {
    if (activeStage === 0) return;
    setActiveStage(activeStage - 1);
  };

  React.useEffect(() => {
    values.productType = productType;
  }, []);

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
    values.order.productType = productType;
    values.order.purpose = purpose;
    values.order.seo = seo;

    handleSubmit();
  };

  return (
    <div className={styles.wrapper}>
      <div className={'global-wrapper'}>
        <div
          className={clsx(styles[`pre-submit`], {
            [styles.anim]: preFormAnim,
            [styles.hidden]: preFormHidden,
          })}>
          <ButtonWrapper
            title={'Purpose'}
            description={'Choose the most relevant for your website'}>
            {purposeArr.map((obj) => (
              <ButtonServices
                {...obj}
                onClick={() => handlePurposeChange(obj.type)}
                activeType={purpose}
                key={obj.type}
              />
            ))}
          </ButtonWrapper>
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
          {activeStage >= 2 && (
            <ButtonWrapper
              title={'SEO'}
              description={'Select the one that works best for you'}
              ref={SEObuttonWrapperRef}>
              {seoArr.map((obj) => (
                <SEOButton
                  key={obj.title}
                  activeType={seo}
                  arr={obj}
                  onClick={() => handleSeoChange(obj.title.toLowerCase())}
                />
              ))}
            </ButtonWrapper>
          )}
        </div>

        <div
          className={clsx('global-wrapper--small', styles[`final-form`], {
            [styles.show]: preFormHidden,
          })}
          ref={contactComponentRef}>
          <div className={styles[`final-form-headline`]}>
            <div onClick={handleClose} className={styles.return}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                viewBox="6 6 12 12"
                style={{ rotate: '90deg' }}>
                <path d="M7 9.79a.5.5 0 0 1 .854-.353L12 13.584l4.146-4.147a.5.5 0 1 1 .708.708L12 14.998l-4.854-4.853A.5.5 0 0 1 7 9.79Z"></path>
              </svg>
              <span className={styles['subtitle']}>Return</span>
            </div>
            <h5 className={styles[`final-form-headline__title`]}>
              Perfect. Let's get your details
            </h5>
          </div>
          <div onSubmit={handleSubmit} className={styles[`final-form__items`]}>
            <ContactInput
              size="small"
              name="fullname"
              help={!touched?.fullname ? undefined : errors.fullname}
              value={values?.fullname}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={'Type your name*'}
            />

            <div className={styles[`item`]}>
              <ContactInput
                size="small"
                name="email"
                help={!touched?.email ? undefined : errors.email}
                value={values?.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder={'Type your email*'}
              />

              <p className={styles[`item__description`]}>
                We’ll get in contact through the email provided.
              </p>
            </div>
            <Button
              status={status && status}
              disabled={isSubmitting ? 'black' : false}
              //   type="submit"
              color="black-inverse"
              size="medium"
              onClick={handleSubmitDebounce}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
