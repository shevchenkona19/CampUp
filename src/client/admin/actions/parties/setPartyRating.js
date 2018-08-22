import {
    CREATE_PARTY_FAILED,
    CREATE_PARTY_SEND,
    CREATE_PARTY_SUCCESS, SET_PARTY_RATING_FAILED, SET_PARTY_RATING_SEND, SET_PARTY_RATING_SUCCESS,
} from "../../constants/actionTypes";
import {getAllPartiesAction} from "./getAll";

export const setRatingAction = params => dispatch => {
    dispatch({
        type: SET_PARTY_RATING_SEND
    });
    const url = "/parties/setRating";
    fetch(url, {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    })
        .then(res => res.json())
        .then(res => {
            if (res.success) {
                dispatch({
                    type: SET_PARTY_RATING_SUCCESS
                })
                dispatch(getAllPartiesAction())
            } else {
                dispatch({
                    type: SET_PARTY_RATING_FAILED,
                    errorCode: res.errorCode
                })
            }
        })
        .catch(err => {
            dispatch({
                type: SET_PARTY_RATING_FAILED,
                errorCode: err
            })
        })
};