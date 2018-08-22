import {
    LOAD_ALL_PARTIES_FAILED,
    LOAD_ALL_PARTIES_SEND, LOAD_ALL_PARTIES_SUCCESS,
} from "../../constants/actionTypes";

export const loadAllPartiesAction = () => dispatch => {
    dispatch({
        type: LOAD_ALL_PARTIES_SEND
    });
    const url = "/parties/all";
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
                    type: LOAD_ALL_PARTIES_SUCCESS,
                    parties: res.parties,
                })
            } else {
                dispatch({
                    type: LOAD_ALL_PARTIES_FAILED,
                    errorCode: res.errorCode,
                })
            }
        })
        .catch(e => {
            console.error(e);
            dispatch({
                type: LOAD_ALL_PARTIES_FAILED,
                errorCode: e
            })
        })
};