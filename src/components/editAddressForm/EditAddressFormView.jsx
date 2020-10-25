import React from 'react';
import { Field, reduxForm } from 'redux-form';

import addressInputField from '../../views/addressInputField/AddressInputField';
import './editAddressFormView.scss';
import { validate } from './utils';

function EditAddressFormView({onSubmit,handleSubmit,setFormState}) {
    return (
        <div className="address__form__wrapper p-20 mb-20">
            <div className="address__form__heading">Add a new address</div> 
        <form onSubmit={handleSubmit(onSubmit)} className="address__form mt-16">
           <Field
                name="name"
                type="text"
                component={addressInputField}
                label="Name"
            />

            <Field
                name="mobileNumber"
                type="number"
                component={addressInputField}
                label="10-digit mobile number"
            />

            <Field
                name="address"
                type="text"
                component={addressInputField}
                label="Address"
            />

            <Field
                name="pincode"
                type="text"
                component={addressInputField}
                label="Pincode"
            />

            <Field
                name="type"
                type="text"
                component={addressInputField}
                label="Type"
                />
                
                <div className="d-md-flex">
                    <button className="address__form__save-btn mb-10 mb-md-0" type="submit">save</button>
                    <button onClick={() => setFormState(false)} className="address__form__cancel-btn" type="button">cancel</button>    
                </div>
                </form>
            </div>
    );
}

const editAddressFormWrapper = reduxForm({
    form: 'address',
    validate
})(EditAddressFormView);

export default editAddressFormWrapper;
