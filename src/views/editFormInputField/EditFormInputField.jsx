/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import './editFormInputField.scss';

function EditFormInputField({ input, type, placeholder, disabled, meta: { touched, error } }) {
    return <>
        <input placeholder={placeholder} disabled={disabled} className="edit__form__input__field " {...input} type={type} autoComplete="off" />
        {touched && error && (
        <span className="form__input__field__error edit__form__input__field__error">{error}</span>
      )}
        </>;
       
   
}


export default EditFormInputField;