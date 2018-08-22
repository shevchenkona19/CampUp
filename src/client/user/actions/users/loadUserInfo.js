import {
    LOAD_USER_INFO_FAILED,
    LOAD_USER_INFO_SEND, LOAD_USER_INFO_SUCCESS
} from "../../constants/actionTypes";

export const loadUserInfoAction = userId => dispatch => {
    dispatch({
        type: LOAD_USER_INFO_SEND
    });
    const url = "/users/one?userId=" + userId;
    const opts = {
        method: "get",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    };
    fetch(url, opts)
        .then(res => res.json())
        .then(res => {
            if (res.success) {
                dispatch({
                    type: LOAD_USER_INFO_SUCCESS,
                    user: res.user,
                })
            } else {
                dispatch({
                    type: LOAD_USER_INFO_FAILED,
                    errorCode: res.errorCode,
                })
            }
        })
        .catch(e => {
            console.error(e);
            dispatch({
                type: LOAD_USER_INFO_FAILED,
                errorCode: e
            })
        })
};