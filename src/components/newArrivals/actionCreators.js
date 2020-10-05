import kraftykartAPI from '../../api/kraftyKartAPI';

export const getNewProducts = () => async (dispatch) => {
  const res = await kraftykartAPI.get('/products/newarrivals?limit=6');
  const newProducts = res.data.data.data;

  //   console.log(newProducts);

  dispatch({ type: 'GET_NEW_PRODUCTS_SUCCESS', payload: newProducts });
};
