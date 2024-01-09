import { withFormik } from 'formik';
import { axios } from 'core';

import validateForm from 'utils/validate';
import ContactForm from '../components';
import useApiEndpoint from 'hooks/useApiEndpoint';
import checkApiEndpoint from 'utils/checkApiEndpoint';

interface TValues {
  fullname: string;
  email: string;
  description: string;
}

const ContactFormContainer = withFormik({
  mapPropsToValues: () => ({
    fullname: '',
    email: '',
    description: '',
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
