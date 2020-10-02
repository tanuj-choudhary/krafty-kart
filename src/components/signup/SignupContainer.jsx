// Third Party Imports
import React from 'react';
import { connect } from 'react-redux';

// Project Imports
import { renderToast } from './utils';
import { signup } from './actionCreators';
import SignupView from './SignupView';

function SignupContainer({ signup, signupStatus }) {
  // Signup on submit
  const onSubmit = (values) => {
    const formData = {
      firstName: values.firstname,
      lastName: values.lastname,
      email: values.email,
      password: values.password,
      passwordConfirm: values.confirmPassword,
    };

    signup(formData);
  };

  return (
    <>
      {/* Render toast on signup success or failure */}
      {renderToast(signupStatus.status, signupStatus.error)}
      <SignupView onSubmit={onSubmit} />
    </>
  );
}

/**
 * error exists if status failed
 * Signupstatus = {status:'suceess || failed', error:'error messsage'}
 */
const mapStateToProps = (state) => {
  return { signupStatus: state.signup };
};

const mapDispatchToProps = { signup };

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);
