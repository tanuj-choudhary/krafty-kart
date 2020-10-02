import React from 'react';

import './inputField.scss';

export default function InputField({
  input,
  label,
  type,
  meta: { touched, error },
}) {
  return (
    <>
      <input
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...input}
        type={type}
        placeholder={label}
        className="form__input__field px-12 py-6"
        autoComplete="off"
      />
      {touched && error && (
        <span className="form__input__field__error">{error}</span>
      )}
    </>
  );
}
