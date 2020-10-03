import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router';

import signupReducer from '../signup/reducer';
import loginReducer from '../login/reducer';
import loadingReducer from './loadingReducer';

const createRootReducer = (history) =>
  combineReducers({
    form: formReducer,
    signup: signupReducer,
    login: loginReducer,
    loadingReducer,
    router: connectRouter(history),
  });

export default createRootReducer;
