const reducer = (state = {status:false}, action) => {
    switch (action.type) {
        case 'ADDRESS_FORM_ENABLED':
            return {...state,status:true};
            case 'ADDRESS_FORM_DISABLED':
            return { ...state, status: false };
        default:
            return state;
    }
};

export default reducer;