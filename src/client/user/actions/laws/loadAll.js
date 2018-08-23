import {
    LOAD_ALL_LAWS_FAILED,
    LOAD_ALL_LAWS_SEND, LOAD_ALL_LAWS_SUCCESS,
} from "../../constants/actionTypes";

export const loadAllLawsAction = () => dispatch => {
    dispatch({
        type: LOAD_ALL_LAWS_SEND
    });
    const url = "/laws/all";
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
                    type: LOAD_ALL_LAWS_SUCCESS,
                    laws: res.laws,
                })
            } else {
                dispatch({
                    type: LOAD_ALL_LAWS_FAILED,
                    errorCode: res.errorCode,
                })
            }
        })
        .catch(e => {
            console.error(e);
            dispatch({
                type: LOAD_ALL_LAWS_FAILED,
                errorCode: e
            })
        })
};