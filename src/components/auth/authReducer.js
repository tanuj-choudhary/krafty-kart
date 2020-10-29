const reducer = (state=null, action) => {
    let newObj;
    switch (action.type) {
        case 'IS_SIGNED_IN_SUCCESS':
            return { ...state, ...action.payload };
        case 'IS_SIGNED_IN_FAILED':
            return { ...action.payload };
        case 'USER_UPDATE_SUCCESS':
            newObj = {status:'success',user:action.payload};
            return { ...state, ...newObj };
        case 'USER_UPDATE_FAILED':
            newObj = {status:'failed',error:action.payload};
            return { ...state, ...newObj };
        default:
            return state;
    }
};

export default reducer;