import { push } from 'connected-react-router';

import kraftyKartAPI from '../../api/kraftyKartAPI';

export const login = (formData) => async (dispatch) => {
  try {
    const res = await kraftyKartAPI.post('/users/login', formData);

    window.localStorage.setItem('token', res.data.data.token);
    window.localStorage.setItem('user', JSON.stringify(res.data.data.user));

    dispatch({ type: 'LOGIN_SUCCESS', payload: res.data.data });

    dispatch(push('/'));
  } catch (err) {
    // API error message
    if (err.response) {
      dispatch({ type: 'LOGIN_FAILED', payload: err.response.data });
    }
    // Generic error mesage
    else {
      dispatch({
        type: 'LOGIN_FAILED',
        payload: { message: 'Internal server error' },
      });
    }
  }
};
