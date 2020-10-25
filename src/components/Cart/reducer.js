const reducer = (state = {}, action) => {    
    switch (action.type) {
        case 'ORDER_SUCCESS':  
              return { ...state, [action.payload._id]:action.payload };

        default:
            return state;
    }
};

export default reducer;