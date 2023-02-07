import React from 'react';

import styles from './ContactFormOverflow.module.scss';

import ContactInput from 'components/Form/Input';
import ButtonType from 'components/Careers/Button';
import { Button } from 'components';

const ContactForm = (props: any) => {
  const { values, status, touched, errors, handleChange, handleBlur, handleSubmit, isSubmitting } =
    props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div onSubmit={handleSubmit} className={styles.form}>
          <ContactInput
            name="fullname"
            help={!touched?.fullname ? undefined : errors.fullname}
            value={values?.fullname}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={'Type your name*'}
          />
          <ContactInput
            name="email"
            help={!touched?.email ? undefined : errors.email}
            value={values?.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={'Type your email*'}
          />
          <div className={styles.buttons}>
            <ButtonType value={values?.type} name={'type'} handleChange={handleChange} />
          </div>
        </div>
        <Button
          status={status && status}
          size={'medium'}
          disabled={isSubmitting}
          type="submit"
          color="white"
          onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default ContactForm;
