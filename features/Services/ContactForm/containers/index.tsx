import { withFormik } from 'formik';
import { axios } from 'core';

import validateForm from 'utils/validate';
import ContactForm from '../components';
import { v4 as uuidv4 } from 'uuid';
import useApiEndpoint from 'hooks/useApiEndpoint';
import checkApiEndpoint from 'utils/checkApiEndpoint';

interface TValues {
  fullname: string;
  email: string;
  //   description: string;
  order: {
    websiteType: string;
    websitePurpose: string;
    seoPackage: string;
  };
}

const ContactFormContainer = withFormik({
  mapPropsToValues: () => ({
    fullname: '',
    email: '',
    // description: '',
    order: {
      websiteType: '',
      websitePurpose: '',
      seoPackage: '',
    },
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

        window.location.href = `/development/services/${values.order.websiteType}/success?authToken=${submissionToken}`;

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
