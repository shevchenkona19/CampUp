import {CREATE_PARTY_SEND} from "../../constants/actionTypes";

export const createPartyAction = params => dispatch => {
    dispatch({
        type: CREATE_PARTY_SEND
    });
    const url = "/parties/createParty";
    fetch(url, {
        method: "post",
    })
        .then(res => res.json())
        .then(res => {
            console.log("CREATE PARTY", res);
        })
};