import {
    GET_ALL_PARTIES_FAILED,
    GET_ALL_PARTIES_SEND,
    GET_ALL_PARTIES_SUCCESS,
    GET_ALL_USERS_FAILED,
    GET_ALL_USERS_SUCCESS
} from "../../constants/actionTypes";

export const getAllPartiesAction = () => dispatch => {
    dispatch({
        type: GET_ALL_PARTIES_SEND
    });
    const url = "/parties/all";
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
                    type: GET_ALL_PARTIES_SUCCESS,
                    parties: res.parties
                })
            } else {
                dispatch({
                    type: GET_ALL_PARTIES_FAILED,
                    errorCode: res.errorCode,
                })
            }
        })
        .catch(errorCode => {
            dispatch({
                type: GET_ALL_PARTIES_FAILED,
                errorCode
            })
        })
};