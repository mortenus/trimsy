import React from 'react';

import styles from './ContactForm.module.scss';

import ContactInput from 'components/Form/Input';
import { Button } from 'components';

const ContactForm = (props: any) => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit, isValid, isSubmitting } =
    props;

  const [valueDescribe, setValueDescribe] = React.useState('');

  //   const textareaRef = React.useRef<HTMLTextAreaElement>(null);
  //   const [scrollHeightTextarea, setScrollHeightTextarea] = React.useState(60);

  //   const handleTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  //     setValueDescribe(e.target.value);
  //     console.log(e.target.value, valueDescribe);
  //     if (textareaRef.current !== null) {
  //       setScrollHeightTextarea(
  //         textareaRef.current.scrollHeight > 60 ? textareaRef.current.scrollHeight : 60,
  //       );
  //     }
  //   };

  return (
    <div id="contact" className={styles.contact}>
      <div className={styles.intro}>
        <h2>Contact us</h2>
        <p>
          Tell us how we can help you bring your
          <br /> ideas into reality.
        </p>
      </div>
      <div onSubmit={handleSubmit} className={styles.form}>
        <ContactInput
          size="small"
          name="fullname"
          help={!touched?.fullname ? undefined : errors.fullname}
          value={values?.fullname}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={'Type your name'}
        />
        <ContactInput
          size="big"
          name="email"
          help={!touched?.email ? undefined : errors.email}
          value={values?.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={'Type your email'}
        />
        <textarea
          //   style={{ height: `${scrollHeightTextarea}px` }}
          value={values?.description}
          name="description"
          onInput={handleChange}
          //   ref={textareaRef}
          maxLength={400}
          placeholder={'Describe your objective'}
        />
      </div>
      <Button disabled={isSubmitting} type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default ContactForm;
