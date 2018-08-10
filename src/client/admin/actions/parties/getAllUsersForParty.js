import {
    GET_ALL_USERS_PARTY_FAILED,
    GET_ALL_USERS_PARTY_SEND,
    GET_ALL_USERS_PARTY_SUCCESS
} from "../../constants/actionTypes";

export const getAllUsersForParty = partyId => dispatch => {
    console.warn("WTF");
    dispatch({
        type: GET_ALL_USERS_PARTY_SEND
    });
    const url = `/users/allForParty?partyId=${partyId}`;
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
                    type: GET_ALL_USERS_PARTY_SUCCESS,
                    users: res.users
                })
            } else {
                dispatch({
                    type: GET_ALL_USERS_PARTY_FAILED,
                    errorCode: res.errorCode
                })
            }
        })
        .catch(e => {
            console.error(e);
            dispatch({
                type: GET_ALL_USERS_PARTY_FAILED,
                errorCode: e
            })
        })
};