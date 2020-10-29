const { act } = require("react-dom/test-utils");

const reducer = (state=null, action) => {
    switch (action.type) {
        case 'GET_PRODUCT_SUCCESS': 
            return { ...state, ...action.payload };
        case 'GET_PRODUCT_FAILED':
            return {error:action.payload};
        default:
            return state;
    }
};

export default reducer;