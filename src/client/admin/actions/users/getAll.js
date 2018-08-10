import {GET_ALL_PARTIES_FAILED, GET_ALL_USERS_SEND, GET_ALL_USERS_SUCCESS} from "../../constants/actionTypes";

export const getAllUsersAction = () => dispatch => {
    dispatch({
        type: GET_ALL_USERS_SEND
    });
    const url = "/users/all";
    fetch(url, {
        method: "get",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
        .then(res => res.json())
        .then(res => {
            if (res.success) {
                dispatch({
                    type: GET_ALL_USERS_SUCCESS,
                    users: res.users
                })
            } else {
                dispatch({
                    type: GET_ALL_PARTIES_FAILED,
                    errorCode: res.errorCode
                })
            }
        })
        .catch(err => {
            dispatch({
                type: GET_ALL_PARTIES_FAILED,
                errorCode: err
            })
        })
};