const reducer = (state={category:{},sizes:{},brand:{},page:1}, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS_PARAMS_SUCCESS':
            return {
                category: { ...state.category, ...action.payload.category },
                sizes: { ...state.sizes, ...action.payload.sizes },
                brand: { ...state.brand, ...action.payload.brand },
                page:action.payload.page || state.page
            };

        default:
            return state;
    }
};

export default reducer;