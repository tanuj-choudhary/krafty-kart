const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGNUP_SUCCESS':
      return { status: 'success' };
    case 'SIGNUP_FAILED':
      return { status: 'failed', error: action.payload };
    default:
      return state;
  }
};

export default reducer;
