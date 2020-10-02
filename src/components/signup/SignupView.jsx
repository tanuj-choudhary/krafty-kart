// Third party imports
import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Project imports
import Card from '../../views/Card/Card';
import InputField from '../../views/inputField/InputField';
import FormHeader from '../../views/formHeader/FormHeader';
import { formBlockText, validate } from './utils';

function SignupView({ onSubmit, handleSubmit }) {
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
      <FormHeader text="login" />
      <Container className="pt-70 pb-70 pb-md-100 ">
        <Row>
          <Col md={6}>
            <Card
              heading={formBlockText.heading}
              para={formBlockText.para}
              link={formBlockText.link}
              linkText={formBlockText.linkText}
            />
          </Col>
          <Col md={6}>
            <div className=" form__wrapper p-20 p-xl-70">
              <div className="form__heading mb-20">
                Welcome !
                <br />
                Sign Up now
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className="form">
                <div className="d-md-flex">
                  <div className="input__wrapper mb-16 mr-md-10">
                    <Field
                      name="firstname"
                      type="text"
                      component={InputField}
                      label="firstname"
                    />
                  </div>
                  <div className="input__wrapper mb-16 ml-md-10">
                    <Field
                      name="lastname"
                      type="text"
                      component={InputField}
                      label="lastname"
                    />
                  </div>
                </div>

                <div className="input__wrapper mb-16">
                  <Field
                    name="email"
                    type="text"
                    component={InputField}
                    label="email"
                  />
                </div>

                <div className="input__wrapper mb-16">
                  <Field
                    name="password"
                    type="password"
                    component={InputField}
                    label="password"
                  />
                </div>

                <div className="input__wrapper mb-16">
                  <Field
                    name="confirmPassword"
                    type="password"
                    component={InputField}
                    label="confirmPassword"
                  />
                </div>

                <button type="submit" className="form-submit-btn mt-30 mb-17">
                  Sign up
                </button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

const wrapperSignup = reduxForm({
  form: 'signup',
  validate,
})(SignupView);

export default wrapperSignup;
