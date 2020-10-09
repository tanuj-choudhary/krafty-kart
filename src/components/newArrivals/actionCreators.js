import kraftykartAPI from '../../api/kraftyKartAPI';

export const getNewProducts = () => async (dispatch) => {
  try {
    const res = await kraftykartAPI.get('/products/newarrivals?limit=6');
    const newProducts = res.data.data.data;

    dispatch({ type: 'GET_NEW_PRODUCTS_SUCCESS', payload: newProducts });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: 'GET_NEW_PRODUCTS_FAILED',
        payload: err.response.message,
      });
    }

    dispatch({
      type: 'GET_NEW_PRODUCTS_FAILED',
      payload: 'Internal server error',
    });
  }
};
