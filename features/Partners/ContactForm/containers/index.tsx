import { withFormik } from 'formik';
import { axios } from 'core';

import validateForm from '../utils/validateForm';
import ContactForm from '../components';
import { v4 as uuidv4 } from 'uuid';
import useApiEndpoint from 'hooks/useApiEndpoint';
import checkApiEndpoint from 'utils/checkApiEndpoint';

interface TValues {
  fullname: string;
  email: string;
  //   description: string;
  order: {
    productType: string;
    purpose: string;
    seo: string;
  };
  isConsent: boolean;
}

const ContactFormContainer = withFormik({
  mapPropsToValues: () => ({
    fullname: '',
    email: '',
    // description: '',
    order: {
      productType: '',
      purpose: '',
      seo: '',
    },
    isConsent: false,
  }),
  validate: (values: TValues) => {
    const errors = {};

    validateForm({ values, errors });

    return errors;
  },
  handleSubmit: (values: TValues, { setSubmitting, setStatus, resetForm }) => {
    setSubmitting(true);

    const API_ENDPOINT = checkApiEndpoint();

    axios
      .post(`${API_ENDPOINT}/web`, values)
      .then((res) => {
        setSubmitting(false);
        resetForm();
        setStatus('success');

        const submissionToken = uuidv4();

        localStorage.setItem('formSubmissionToken', submissionToken);
        localStorage.setItem('formSubmissionEmail', values.email);
        setSubmitting(false);

        window.location.href = `/development/services/${values.order.productType}/success?authToken=${submissionToken}`;

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
  },
  enableReinitialize: true,

  displayName: 'ContactForm',
})(ContactForm);

export default ContactFormContainer;
