import { withFormik } from 'formik';
import { axios } from 'core';

import validateForm from 'utils/validate';
import ContactForm from '../components';

const ContactFormContainer = withFormik({
  mapPropsToValues: () => ({
    fullname: '',
    email: '',
    description: '',
  }),
  validate: (values) => {
    const errors = {};

    validateForm({ values, errors });

    return errors;
  },
  handleSubmit: (values, { setSubmitting, props }) => {
    setSubmitting(true);
    console.log('values', values);

    axios
      .post('https://secure.trimsy.org/form', values)
      .then((res) => {
        console.log('response:', res);
        setSubmitting(false);
      })
      .catch((err) => {
        console.log('error:', err);
        setSubmitting(false);
      });
  },

  displayName: 'ContactForm',
})(ContactForm);

export default ContactFormContainer;
