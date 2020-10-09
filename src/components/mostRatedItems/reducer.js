const reducer = (state = {}, action) => {
  const newState = {};

  switch (action.type) {
    case 'GET_MOST_RATED_PRODUCTS_SUCCESS':
      action.payload.forEach((el) => {
        newState[el._id] = el;
      });

      return { ...state, ...newState };

    case 'GET_MOST_RATED_PRODUCTS_FAILED':
      newState.status = 'failed';
      return { ...newState, error: action.payload };

    default:
      return state;
  }
};

export default reducer;
