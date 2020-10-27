import kraftykartAPI from '../../api/kraftyKartAPI';

export const getProductsList = (values) => async (dispatch) => {

  const params = { limit: 12, ...values };
  
  console.log(params);

  try {
    const res = await kraftykartAPI.get('/products', {
      params
    });
    const products = res.data.data.data;

    dispatch({
      type: 'GET_PRODUCTS_SUCCESS',
      payload: products,
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: 'GET_PRODUCTS_FAILED',
        payload: err.response.message,
      });
    }

    dispatch({
      type: 'GET_PRODUCTS_FAILED',
      payload: 'Internal server error',
    });
  }
};
