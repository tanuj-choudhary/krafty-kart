import kraftykartAPI from '../../api/kraftyKartAPI';

export const getProduct = (id) => async dispatch => {
    try {
        const res = await kraftykartAPI.get(`/products/${id}`);
        const product = res.data.data.data;
    
        dispatch({
          type: 'GET_PRODUCT_SUCCESS',
          payload: product,
        });
      } catch (err) {
        if (err.response) {
          dispatch({
            type: 'GET_PRODUCT_FAILED',
            payload: err.response.data.message,
          });
        }
    
        dispatch({
          type: 'GET_PRODUCT_FAILED',
          payload: 'Internal server error',
        });
      }
};