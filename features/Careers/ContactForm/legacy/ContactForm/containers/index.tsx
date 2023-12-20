import { withFormik } from 'formik';
import { axios } from 'core';

import validateForm from 'utils/validate';
import ContactForm from '../components';
import checkApiEndpoint from 'utils/checkApiEndpoint';

interface TValues {
  fullname: string;
  email: string;
  type: string;
}

const ContactFormWrapper = withFormik({
  mapPropsToValues: () => ({
    fullname: '',
    email: '',
    type: 'Career Opportunities',
  }),
  validate: (values: TValues) => {
    const errors = {};

    validateForm({ values, errors });

    return errors;
  },
  handleSubmit: (values: TValues, { setSubmitting, setStatus, resetForm }) => {
    setSubmitting(true);

    const API_ENDPOINT = checkApiEndpoint();

    // remove unnecessary spacing the end
    if (values.fullname.match(/\s$/)?.[0]) {
      values.fullname = values.fullname.slice(0, -1);
    }

    axios
      .post(`${API_ENDPOINT}/careers`, values)
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
  //   validateOnChange: false,

  displayName: 'ContactFormWrapper',
})(ContactForm);

export default ContactFormWrapper;
