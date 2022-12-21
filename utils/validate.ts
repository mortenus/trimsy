type TValidations = {
  values: {
    fullname: string;
    email: string;
  };
  errors: {
    email?: string;
    fullname?: string;
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
        errors.fullname = `Name is too short ${value.split('').length}`;
      } else if (value.split('').length > 16) {
        errors.fullname = 'Name is too long';
      } else if (!/^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/i.test(value)) {
        errors.fullname = 'No special characters';
      }
    },
  };

  // @ts-ignore
  Object.keys(values).forEach((key) => rules[key] && rules[key](values[key]));
};

export default validations;
