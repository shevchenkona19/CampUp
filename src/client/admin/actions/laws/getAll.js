import {
    GET_ALL_LAWS_FAILED,
    GET_ALL_LAWS_SEND,
    GET_ALL_LAWS_SUCCESS
} from "../../constants/actionTypes";

export const getAllLawsAction = () => dispatch => {
    dispatch({
        type: GET_ALL_LAWS_SEND
    });
    const url = '/laws/all';
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
                    type: GET_ALL_LAWS_SUCCESS,
                    laws: res.laws
                })
            } else {
                dispatch({
                    type: GET_ALL_LAWS_FAILED,
                    errorCode: res.errorCode
                })
            }
        })
        .catch(e => {
            console.error(e);
            dispatch({
                type: GET_ALL_LAWS_FAILED,
                errorCode: e
            })
        })
};