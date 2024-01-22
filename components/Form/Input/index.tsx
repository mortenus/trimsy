import clsx from 'clsx';
import React from 'react';

import styles from './ContactInput.module.scss';
import { useField } from 'formik';

type TContactInput = {
  placeholder: string;
  size?: 'small' | 'big' | 'text';
  value: string | undefined;
  onChange: () => string;
  onBlur: (e: any) => void;
  name: string;
  help?: boolean;
  tabIndex?: number;
  label?: string;
};

const ContactInput = ({
  placeholder,
  name,
  size,
  value,
  onChange,
  help = false,
  onBlur,
  tabIndex,
  label,
}: TContactInput) => {
  const [field, meta] = useField(name);
  return (
    <div
      className={clsx(
        styles.input,
        { [styles.small]: size === 'small' },
        { [styles.big]: size === 'big' },
        { [styles.text]: size === 'text' },
      )}>
      {label && (
        <label htmlFor={name} className={clsx(styles.label, { [styles[`label--error`]]: help })}>
          {label}
        </label>
      )}
      <input
        placeholder={placeholder}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        type="text"
        tabIndex={tabIndex}
        className={clsx(styles.input, { [styles[`input--error`]]: help })}
      />
      {meta.touched && meta.error && help && (
        <label htmlFor={name} className={styles.error}>
          {help}
        </label>
      )}
    </div>
  );
};

export default React.memo(ContactInput);
