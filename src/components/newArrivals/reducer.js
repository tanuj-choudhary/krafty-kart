// Object based reducer
const reducer = (state = {}, action) => {
  const newState = {};

  switch (action.type) {
    case 'GET_NEW_PRODUCTS_SUCCESS':
      // Assign product id as key for object
      action.payload.forEach((el) => {
        newState[el._id] = el;
      });

      return { ...state, ...newState };

    default:
      return state;
  }
};

export default reducer;
