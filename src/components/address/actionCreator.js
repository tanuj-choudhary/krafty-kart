import kraftyKartAPI from '../../api/kraftyKartAPI';

export const deleteAddress = id => async dispatch => {
    const token = localStorage.getItem('token');

    // Axios config
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const res = await kraftyKartAPI.delete(`/users/address/${id}`,config);
        const {user} = res.data;
        dispatch({type:'USER_UPDATE_SUCCESS',payload:user});
    } catch (err) {
        // console.log(err);
    }
};

export const setFormState = state => {
    if (state === true) {
        return {type:'ADDRESS_FORM_ENABLED'};   
    }
    return { type: 'ADDRESS_FORM_DISABLED' };

};