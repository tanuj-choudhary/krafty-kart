import { reset } from 'redux-form';
import kraftyKartAPI from '../../api/kraftyKartAPI';

/**
 * Dispatch success on succesful API call
 * Dispatch failure on error
 */
const signup = (formData) => async (dispatch) => {
  try {
    await kraftyKartAPI.post('/users/signup', formData);

    dispatch({ type: 'SIGNUP_SUCCESS' });
    dispatch(reset('signup'));
  } catch (err) {
    // API error message
    if (err.response) {
      dispatch({ type: 'SIGNUP_FAILED', payload: err.response.data });
    }
    // Generic error mesage
    else {
      dispatch({
        type: 'SIGNUP_FAILED',
        payload: { message: 'Internal server error' },
      });
    }
  }
};

export { signup };
