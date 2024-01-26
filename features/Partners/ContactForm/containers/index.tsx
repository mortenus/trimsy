import { withFormik } from 'formik';
import { axios } from 'core';

import validateForm from '../utils/validateForm';
import ContactForm from '../components';
import { v4 as uuidv4 } from 'uuid';
import useApiEndpoint from 'hooks/useApiEndpoint';
import checkApiEndpoint from 'utils/checkApiEndpoint';

import TPartnersData from '../types/partners.types';

interface TValues extends TPartnersData {
  isConsent: boolean;
}

const ContactFormContainer = withFormik({
  mapPropsToValues: () => ({
    username: '',
    email: '',
    description: '',
    password: '',
    passwordRepeat: '',
    socialMedia: '',
    companyName: '',
    hearAbout: '',
    audienceTarget: '',
    details: '',
    isConsent: false,
  }),
  validate: (values: TValues) => {
    const errors: any = {};

    validateForm({ values, errors });

    return errors;
  },
  handleSubmit: (values: TValues, { setSubmitting, setStatus, resetForm }) => {
    setSubmitting(true);

    const API_ENDPOINT = checkApiEndpoint();

    const postData = {
      user: {
        username: values.username,
        email: values.email,
        description: values.description,
        password: values.password,
      },
      additional: {
        socialMedia: values.socialMedia,
        companyName: values.companyName,
        heartAbout: values.hearAbout,
        audienceTarget: values.audienceTarget,
        details: values.details,
      },
    };

    axios
      .post(`${API_ENDPOINT}/auth/partners/signup`, postData)
      .then((res) => {
        setSubmitting(false);
        resetForm();
        setStatus('success');

        const submissionToken = uuidv4();

        localStorage.setItem('formSubmissionToken', submissionToken);
        localStorage.setItem('formSubmissionEmail', values.email);
        setSubmitting(false);

        window.location.href = `/partners/signup/success?authToken=${submissionToken}`;

        setTimeout(() => {
          setStatus(null);
        }, 5000);
      })
      .catch((err) => {
        setSubmitting(false);
        setStatus('fail');

        setTimeout(() => {
          setStatus(null);
        }, 5000);
      });
    //     axios
    //       .post(`${API_ENDPOINT}/web`, values)
    //       .then((res) => {
    //         setSubmitting(false);
    //         resetForm();
    //         setStatus('success');

    //         const submissionToken = uuidv4();

    //         localStorage.setItem('formSubmissionToken', submissionToken);
    //         localStorage.setItem('formSubmissionEmail', values.email);
    //         setSubmitting(false);

    //         window.location.href = `/development/services/${values.order.productType}/success?authToken=${submissionToken}`;

    //         setTimeout(() => {
    //           setStatus(null);
    //         }, 5000);
    //       })
    //       .catch((err) => {
    //         setSubmitting(false);
    //         setStatus('fail');

    //         setTimeout(() => {
    //           setStatus(null);
    //         }, 5000);
    //       });
  },
  enableReinitialize: true,

  displayName: 'ContactForm',
})(ContactForm);

export default ContactFormContainer;
