import {
    LOAD_LAW_INFO_FAILED,
    LOAD_LAW_INFO_SEND, LOAD_LAW_INFO_SUCCESS,
} from "../../constants/actionTypes";

export const loadLawInfoAction = lawId => dispatch => {
    dispatch({
        type: LOAD_LAW_INFO_SEND
    });
    const url = "/laws/law?id=" + lawId;
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
                    type: LOAD_LAW_INFO_SUCCESS,
                    law: res.law,
                })
            } else {
                dispatch({
                    type: LOAD_LAW_INFO_FAILED,
                    errorCode: res.errorCode,
                })
            }
        })
        .catch(e => {
            console.error(e);
            dispatch({
                type: LOAD_LAW_INFO_FAILED,
                errorCode: e
            })
        })
};