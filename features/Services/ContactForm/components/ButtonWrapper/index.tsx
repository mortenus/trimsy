import React, { forwardRef } from 'react';

import styles from './ButtonWrapper.module.scss';

type TButtonWrapper = {
  title: string;
  description: string;
  children: React.ReactNode;
};

const ButtonWrapper: React.ForwardRefRenderFunction<HTMLDivElement, TButtonWrapper> = (
  { title, description, children },
  ref,
) => {
  return (
    <div className={styles['wrap']} ref={ref}>
      <div className={styles.text}>
        <h3 className={styles[`text__title`]}>
          <strong>{title}. </strong>
          {description}.
        </h3>
        {/* <p className={styles[`text__description`]}>{description}</p> */}
      </div>
      {/* <div onSubmit={handleSubmit} className={styles.form}>
        <ContactInput
          size="small"
          name="fullname"
          help={!touched?.fullname ? undefined : errors.fullname}
          value={values?.fullname}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={'Type your name*'}
        />
        <ContactInput
          size="big"
          name="email"
          help={!touched?.email ? undefined : errors.email}
          value={values?.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={'Type your email*'}
        />
        <textarea
          value={values?.description}
          name="description"
          id="description"
          onInput={handleChange}
          maxLength={400}
          placeholder={'Describe your objective'}
        />
      </div> */}
      <div className={styles[`wrap-buttons`]}>{children}</div>

      {/* <Button
              status={status && status}
              disabled={isSubmitting ? 'black' : false}
              // type="submit"
              style={{ border: `2px solid #000` }}
              color="white"
              size="large"
              onClick={handleNextStage}>
              Next
            </Button> */}
    </div>
  );
};

export default forwardRef(ButtonWrapper);
