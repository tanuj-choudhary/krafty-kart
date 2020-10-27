import kraftyKartAPI from '../../api/kraftyKartAPI';

export const getOrders = () => async dispatch => {
    const token = localStorage.getItem('token');

    // Axios config
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const res = await kraftyKartAPI.get('/users/orders',config);
        const { orders } = res.data.data;
        dispatch({type:'GET_ORDERS_SUCCESS',payload:orders});
    } catch (err) {
        if (err.response) {
            dispatch({ type: 'GET_ORDERS_FAILED', payload: err.response.data.message });
        }
        dispatch({ type: 'GET_ORDERS_FAILED', payload: err.message });
    }
};