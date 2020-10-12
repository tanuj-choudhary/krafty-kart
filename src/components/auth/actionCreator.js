import kraftyKartAPI from "../../api/kraftyKartAPI";

export const isSignedIn = (token) => async dispatch => {
    // Axios config
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    
    try {
        const res = await kraftyKartAPI.get('/users/isSignedIn', config);
        const {user} = res.data.data;
        
        const data = {isSignedIn:true,user};

        dispatch({type:'IS_SIGNED_IN_SUCCESS',payload:data});
    } catch (err) {
        if (err.response) {
            dispatch({type:'IS_SIGNED_IN_FAILED',payload:err.response.data.message});
        }
        dispatch({type:'IS_SIGNED_IN_FAILED',payload:err.message});
    }
};