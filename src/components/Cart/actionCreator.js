import kraftyKartAPI from '../../api/kraftyKartAPI';

export const removeProductFromCart = (id) => async dispatch => {
    const token = localStorage.getItem('token');

    // Axios config
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const res = await kraftyKartAPI.delete(`/users/cart/products/${id}`,config);
        const {user} = res.data;
        dispatch({type:'USER_UPDATE_SUCCESS',payload:user});
    } catch (err) {
        if (err.response) {
        dispatch({type:'USER_UPDATE_FAILED',payload:err.response.data.message});
        }
        dispatch({type:'USER_UPDATE_FAILED',payload:err.message});
    }
};

export const placeOrder = (data) => async dispatch => {
    const token = localStorage.getItem('token');

    // Axios config
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const res = await kraftyKartAPI.post('/users/orders', data, config);
        const {order} = res.data;
        dispatch({type:'ORDER_SUCCESS',payload:order});
    } catch (err) {
        if (err.response) {
        dispatch({type:'ORDER_FAILED',payload:err.response.data.message});
        }
        dispatch({type:'ORDER_FAILED',payload:err.message});
    }
};