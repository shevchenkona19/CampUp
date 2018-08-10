import {
} from "../../constants/actionTypes";
import {DELETE_USER_PARTY_SEND} from "../../constants/actionTypes";
import {DELETE_USER_PARTY_SUCCESS} from "../../constants/actionTypes";
import {DELETE_USER_PARTY_FAILED} from "../../constants/actionTypes";
import {getAllUsersForParty} from "./getAllUsersForParty";

export const deleteUserFromParty = (partyId, userId) => dispatch => {
    dispatch({
        type: DELETE_USER_PARTY_SEND
    });
    const url = `/parties/deleteFromParty`;
    fetch(url, {
        method: "delete",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({userId})
    })
        .then(res => res.json())
        .then(res => {
            if (res.success) {
                dispatch({
                    type: DELETE_USER_PARTY_SUCCESS
                });
                dispatch(getAllUsersForParty(partyId));
            } else {
                dispatch({
                    type: DELETE_USER_PARTY_FAILED,
                    errorCode: res.errorCode
                })
            }
        })
        .catch(e => {
            console.error(e);
            dispatch({
                type: DELETE_USER_PARTY_FAILED,
                errorCode: e
            })
        })
};