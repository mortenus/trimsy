import { withFormik } from 'formik';
import { axios } from 'core';

import validateForm from 'utils/validate';
import ContactForm from '../components';

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

    axios
      .post('https://secure.trimsy.org/form', values)
      .then((res) => {
        setSubmitting(false);
        setStatus('success');
      })
      .catch((err) => {
        setSubmitting(false);
        setStatus('fail');
      });
  },
  enableReinitialize: true,

  displayName: 'ContactForm',
})(ContactForm);

export default ContactFormContainer;
