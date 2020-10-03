import React from 'react';
import { connect } from 'react-redux';

import { login } from './actionCreators';
import LoginView from './LoginView';
import { renderToast } from './utils';

function LoginContainer({ login, loginRes }) {
  const onSubmit = (values) => {
    login(values);
  };

  return (
    <>
      {renderToast(loginRes.status, loginRes.error)}
      <LoginView onSubmit={onSubmit} />
    </>
  );
}

const mapStateToProps = (state) => {
  return { loginRes: state.login };
};

const mapDispatchToProps = { login };

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
