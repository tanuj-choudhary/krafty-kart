const reducer = (state = {}, action) => {    
    const newObj = {};
    switch (action.type) {
        case 'ORDER_SUCCESS':  
              return { ...state, [action.payload._id]:action.payload };

        case 'GET_ORDERS_SUCCESS':
            action.payload.forEach(el => { newObj[el._id] = el; });
              return { ...state,...newObj };

        case 'GET_ORDERS_FAILED':
            return {...newObj,error:action.payload};

        default:
            return state;
    }
};

export default reducer;