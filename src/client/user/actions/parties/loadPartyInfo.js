import {
    LOAD_PARTY_INFO_FAILED,
    LOAD_PARTY_INFO_SEND, LOAD_PARTY_INFO_SUCCESS,
} from "../../constants/actionTypes";

export const loadPartyInfoAction = partyId => dispatch => {
    dispatch({
        type: LOAD_PARTY_INFO_SEND
    });
    const url = "/parties/party?id=" + partyId;
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
                    type: LOAD_PARTY_INFO_SUCCESS,
                    party: res.party,
                })
            } else {
                dispatch({
                    type: LOAD_PARTY_INFO_FAILED,
                    errorCode: res.errorCode,
                })
            }
        })
        .catch(e => {
            console.error(e);
            dispatch({
                type: LOAD_PARTY_INFO_FAILED,
                errorCode: e
            })
        })
};