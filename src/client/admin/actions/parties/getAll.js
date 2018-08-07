import {GET_ALL_PARTIES_SEND} from "../../constants/actionTypes";

export const getAllPartiesAction = () => dispatch => {
    dispatch({
        type: GET_ALL_PARTIES_SEND
    });
    const url = "/parties/allParties";
    fetch(url, {
        method: "get"
    })
        .then(res => res.json())
        .then(res => {
            console.log("GET_PT", res)
        });
};