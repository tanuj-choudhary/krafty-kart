const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        status: 'success',
        user: action.payload.user,
        token: action.payload.token,
      };
    case 'LOGIN_FAILED':
      return { status: 'failed', error: action.payload };
    default:
      return state;
  }
};

export default reducer;
