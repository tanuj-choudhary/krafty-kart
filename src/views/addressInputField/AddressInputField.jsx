/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import './addressInputField.scss';

function AddressInputField({
    input,
    type,
    label,
    meta: { touched, error },
})

{
    return (
        <div className="address__form__input__wrapper mb-10">
          <input
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...input}
            type={type}
            className="address__form__input__field pt-20 pr-16 pl-13"
            autoComplete="off"
            />
            <label className="address__input__label">{label}</label>
          {touched && error && (
            <span className="form__input__field__error">{error}</span>
          )}
        </div>
      );
}

export default AddressInputField;
