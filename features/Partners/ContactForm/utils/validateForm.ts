import TPartnersData from '../types/partners.types';

type TValidationError = {
  [key in keyof TPartnersData]: string;
};

type TValidations = {
  values: TPartnersData;
  errors: TValidationError;
};

const validations = ({ values, errors }: TValidations): void => {
  const rules: Record<keyof TPartnersData, (value: any) => void> = {
    username: (value) => {
      if (typeof value === 'string') {
        if (!value.trim()) {
          errors.username = 'Please enter your username';
        } else if (value.length < 4) {
          errors.username = 'Username is too short';
        } else if (value.length > 15) {
          errors.username = 'Username is too long';
        } else if (!/^[a-zA-Z ]*$/.test(value)) {
          errors.username = 'Please do not use special characters';
        } else if (/\s{2,}/.test(value)) {
          errors.username = 'Please remove additional spaces';
        }
      }
    },

    email: (value) => {
      if (typeof value === 'string') {
        if (!value.trim()) {
          errors.email = 'Please enter a valid email address.';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
          errors.email = 'Please enter a valid email address.';
        }
      }
    },

    password: (value) => {
      if (typeof value === 'string') {
        if (!value.trim()) {
          errors.password = 'Please enter your password';
        } else if (value.length < 4) {
          errors.password = 'Password is too short';
        } else if (value.length > 20) {
          errors.password = 'Password is too long';
        } else if (!/^[a-zA-Z ]*$/.test(value)) {
          // handle the regex check
        }
      }
    },

    passwordRepeat: (value) => {
      const originalPassword = values.password;

      if (typeof value === 'string') {
        if (!originalPassword) {
          errors.password = 'Please enter your password';
          errors.passwordRepeat = 'Please enter your password first';
        } else if (!value.trim()) {
          errors.passwordRepeat = 'Please repeat your password';
        } else if (value !== originalPassword) {
          errors.passwordRepeat = 'Passwords do not match';
        }
      }
    },

    socialMedia: (value) => {
      if (typeof value === 'string') {
        if (!value.trim()) {
          errors.socialMedia = 'Please enter this field';
        }
      }
    },

    description: (value) => {},
    companyName: (value) => {},
    hearAbout: (value) => {
      if (typeof value === 'string') {
        if (!value.trim()) {
          errors.hearAbout = 'Please enter this field';
        }
      }
    },
    audienceTarget: (value) => {
      if (typeof value === 'string') {
        if (!value.trim()) {
          errors.hearAbout = 'Please enter this field';
        }
      }
    },
    details: (value) => {
      // Add validation rules for details
    },
  };

  Object.keys(values).forEach((key) => {
    const rule = rules[key as keyof TPartnersData];
    if (rule) {
      rule(values[key as keyof TPartnersData]);
    }
  });
};

export default validations;
