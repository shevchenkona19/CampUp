import {GET_EMPTY_USERS_FAILED, GET_EMPTY_USERS_SEND, GET_EMPTY_USERS_SUCCESS} from "../../constants/actionTypes";

export const getEmptyUsersAction = () => dispatch => {
    dispatch({
        type: GET_EMPTY_USERS_SEND
    });
    const url = "/users/emptyUsers";
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
                    type: GET_EMPTY_USERS_SUCCESS,
                    users: res.users
                })
            } else {
                dispatch({
                    type: GET_EMPTY_USERS_FAILED,
                    errorCode: res.errorCode,
                })
            }
        })
        .catch(e => {
            console.error(e);
            dispatch({
                type: GET_EMPTY_USERS_FAILED,
                errorCode: e
            })
        })
};