import {CREATE_USER_FAILED, CREATE_USER_SEND, CREATE_USER_SUCCESS} from "../../constants/actionTypes";

export const createUserAction = user => dispatch => {
    dispatch({
        type: CREATE_USER_SEND
    });
    const url = "/users/create";
    fetch(url, {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .then(res => {
            if (res.success) {
                dispatch({
                    type: CREATE_USER_SUCCESS
                })
            } else {
                dispatch({
                    type: CREATE_USER_FAILED,
                    errorCode: res.errorCode
                })
            }
        })
        .catch(err => {
            dispatch({
                type: CREATE_USER_FAILED,
                errorCode: err
            })
        })
};