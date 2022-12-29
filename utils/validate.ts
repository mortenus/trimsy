type TValidations = {
  values: {
    fullname: string;
    email: string;
    description?: string;
  };
  errors: {
    fullname?: string;
    email?: string;
  };
};

const validations = ({ values, errors }: TValidations) => {
  const rules = {
    email: (value: string) => {
      if (!value) {
        errors.email = 'Enter E-Mail';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        errors.email = 'Wrong E-Mail';
      }
    },
    fullname: (value: string) => {
      if (!value) {
        errors.fullname = 'Fill your name';
      } else if (value.split('').length < 4) {
        errors.fullname = 'Name is too short';
      } else if (value.split('').length > 16) {
        errors.fullname = 'Name is too long';
      } else if (!/^(?=[a-zA-Z]*$)(?!.*[<>'"/;`%])/i.test(value)) {
        errors.fullname = 'No special characters';
      }
    },
  };

  Object.keys(values).forEach(
    (key) =>
      rules[key as keyof typeof rules] &&
      rules[key as keyof typeof rules](values[key as keyof typeof rules]),
  );
};

export default validations;
