import {LOAD_ALL_USERS_FAILED, LOAD_ALL_USERS_SEND, LOAD_ALL_USERS_SUCCESS} from "../../constants/actionTypes";

export const loadAllUsersAction = () => dispatch => {
    dispatch({
        type: LOAD_ALL_USERS_SEND
    });
    const url = "/users/all";
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
                    type: LOAD_ALL_USERS_SUCCESS,
                    users: res.users,
                })
            } else {
                dispatch({
                    type: LOAD_ALL_USERS_FAILED,
                    errorCode: res.errorCode,
                })
            }
        })
        .catch(e => {
            console.error(e);
            dispatch({
                type: LOAD_ALL_USERS_FAILED,
                errorCode: e
            })
        })
};