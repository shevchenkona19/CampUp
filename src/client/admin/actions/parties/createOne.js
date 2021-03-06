import {
    CREATE_PARTY_FAILED,
    CREATE_PARTY_SEND,
    CREATE_PARTY_SUCCESS,
} from "../../constants/actionTypes";

export const createPartyAction = party => dispatch => {
    dispatch({
        type: CREATE_PARTY_SEND
    });
    const url = "/parties/create";
    fetch(url, {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(party)
    })
        .then(res => res.json())
        .then(res => {
            if (res.success) {
                dispatch({
                    type: CREATE_PARTY_SUCCESS
                })
            } else {
                dispatch({
                    type: CREATE_PARTY_FAILED,
                    errorCode: res.errorCode
                })
            }
        })
        .catch(err => {
            dispatch({
                type: CREATE_PARTY_FAILED,
                errorCode: err
            })
        })
};