const reducer = (state=null, action) => {
    switch (action.type) {
        case 'IS_SIGNED_IN_SUCCESS':
            return { ...state, ...action.payload };
        case 'IS_SIGNED_IN_FAILED':
                return {...action.payload};
        default:
            return state;
    }
};

export default reducer;