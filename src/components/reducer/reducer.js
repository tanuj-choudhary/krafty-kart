import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import signupReducer from '../signup/reducer';
import loadingReducer from './loadingReducer';

export default combineReducers({
  form: formReducer,
  signup: signupReducer,
  loadingReducer,
});
