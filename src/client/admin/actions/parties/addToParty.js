import {ADD_USER_FAILED, ADD_USER_SEND, ADD_USER_SUCCESS} from "../../constants/actionTypes";

export const addUserToParty = (partyId, userId) => dispatch => {
    dispatch({
        type: ADD_USER_SEND
    });
    console.warn("papsapsadp", partyId, userId);
    const url = '/parties/addToParty?';
    fetch(url, {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            partyId,
            userId
        })
    })
        .then(res => res.json())
        .then(res => {
            if (res.success) {
                dispatch({
                    type: ADD_USER_SUCCESS
                })
            } else {
                dispatch({
                    type: ADD_USER_FAILED,
                    errorCode: res.errorCode
                })
            }
        })
        .catch(e => {
            console.error(e);
            dispatch({
                type: ADD_USER_FAILED,
                errorCode: e
            })
        })
};