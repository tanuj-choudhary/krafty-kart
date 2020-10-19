import kraftyKartAPI from '../../api/kraftyKartAPI';

export const editMe = (data) => async dispatch => {
    const token = localStorage.getItem('token');

// Axios config
const config = {
    headers: {
        Authorization: `Bearer ${token}`,
    },
};

    try {
        const res = await kraftyKartAPI.patch('/users/updateme', data,config);
        const user = res.data.data.updatedUser;
        dispatch({type:'USER_UPDATE_SUCCESS',payload:user});
    } catch (err) {
        if (err.response) {
            dispatch({type:'USER_UPDATE_FAILED',payload:err.response.data.message});    
        }
        dispatch({type:'USER_UPDATE_FAILED',payload:err.message});
    }
};