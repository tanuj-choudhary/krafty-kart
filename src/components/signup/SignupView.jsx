import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import './signupView.scss';
import bg from '../../images/grey2.jpg';

export default function SignupView() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url("${bg}")`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
        className="signup-header"
      >
        Signup
      </div>
      <Container className="pt-70 pb-70 pb-md-100 pb-xl-200">
        <Row>
          <Col md={6}>
            <div className="d-flex flex-column justify-content-center align-items-center signup__left px-20 py-70 px-xl-70 py-xl-80">
              <h2 className="signup__left__h2 mb-17">
                Already have an account?
              </h2>
              <p className="signup__left__p mb-15">
                Lorem ipsum dolor sit amet elit. Mollitia ab quasi eos sequi,
                adipisci deserunt asperiores veritatis dolore at repudiandae.
              </p>

              <button
                type="button"
                className="already-login-btn mt-28 py-18 px-70"
              >
                Log in
              </button>
            </div>
          </Col>
          <Col md={6}>
            <div className=" signup__right p-20 p-xl-70">
              <div className="signup__right__heading mb-20">
                Welcome !
                <br />
                Sign Up now
              </div>
              <form className="signup__form">
                <div className="d-flex signup__form__name__container">
                  <div className="input__wrapper mb-16 mr-10">
                    <input
                      className="form__input px-12 py-6"
                      type="text"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="input__wrapper mb-16 ml-10">
                    <input
                      className="form__input px-12 py-6"
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                <div className="input__wrapper mb-16">
                  <input
                    className="form__input px-12 py-6"
                    type="text"
                    placeholder="Email"
                  />
                </div>

                <div className="input__wrapper mb-16">
                  <input
                    className="form__input px-12 py-6"
                    type="text"
                    placeholder="Password"
                  />
                </div>

                <div className="input__wrapper mb-16">
                  <input
                    className="form__input px-12 py-6"
                    type="text"
                    placeholder="Confirm Password"
                  />
                </div>

                <button type="button" className="signup-btn mt-30 mb-17">
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
