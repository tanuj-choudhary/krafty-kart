import kraftykartAPI from '../../api/kraftyKartAPI';

export const getMostRatedItems = () => async (dispatch) => {
  try {
    const res = await kraftykartAPI.get('/products', {
      params: {
        sort: '-avgRating',
        limit: 6,
      },
    });
    const mostRatedItems = res.data.data.data;

    dispatch({
      type: 'GET_MOST_RATED_PRODUCTS_SUCCESS',
      payload: mostRatedItems,
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: 'GET_MOST_RATED_PRODUCTS_FAILED',
        payload: err.response.message,
      });
    }

    dispatch({
      type: 'GET_MOST_RATED_PRODUCTS_FAILED',
      payload: 'Internal server error',
    });
  }
};
