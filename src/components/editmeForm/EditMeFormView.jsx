/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { ToastContainer } from 'react-toastify';

import EditFormInputField from '../../views/editFormInputField/EditFormInputField';
import Faqs from '../../views/faqs/Faqs';
import { validate } from './utils';
import './editMeFormView.scss';

function EditMeFormView({handleEdit,handleSubmit,onSubmit, inputDisabled,user}) {

    const renderField = (name,label,placeholder,type) => {
        
        if (inputDisabled) {
            return <Field placeholder={placeholder} disabled={inputDisabled} name={`${name}d`}  type={type} component={EditFormInputField} />;
        }
        
        return <>
            <Field disabled={inputDisabled} name={name} type={type} component={EditFormInputField} />
            <label className="edit__form__input__label">{label}</label>
        </>;
        
    };

    const renderEditButton = () => {
        if (inputDisabled) {
            return <button onClick={handleEdit} type="button" className="profile__box__form__edit-btn">edit</button>;
        }        
        return <button onClick={handleEdit} type="button" className="profile__box__form__edit-btn">cancel</button>;
    };

    const renderSubmitButton = () => {
        if (!inputDisabled) {
            return <button type="submit" className="edit__form__submit-btn">Save</button>;
        }
        return null;
    };


    return (
        <>
            
            <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
        <div className="profile__box__info__form___wrapper" >
             
            <div className="d-flex pb-24">
                <div className="profile__box__form__heading pr-24">Personal information</div>
                {renderEditButton()}
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)} className="edit__me__form pb-40">
                <div className="d-md-flex ">
                    <div className="edit__me__form__input__wrapper mb-10 pr-md-12">
                        {renderField('firstName','First Name',user.firstName,'text')}
                    </div>
                    
                    <div className="edit__me__form__input__wrapper mb-10 pr-md-22">                    
                        {renderField('lastName','Last Name',user.lastName,'text')}
                    </div>    
                </div>

                <div className="edit__me__form__input__wrapper mb-10 pr-md-12">
                        {renderField('mobileNumber','Mobile Number',user.mobileNumber,'number')}
                </div>

                <div className="edit__form__btn__wrapper mb-10">
                        {renderSubmitButton()}
                </div>
            </form>

            <Faqs />
            </div>
            </>
    );
}

const wrappedEditMeFormView = reduxForm({
    form: 'editme',
    validate
  })(EditMeFormView);


export default wrappedEditMeFormView;