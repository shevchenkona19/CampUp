import {
    DELETE_LAW_FAILED,
    DELETE_LAW_SEND, DELETE_LAW_SUCCESS,
    GET_ALL_LAWS_FAILED,
    GET_ALL_LAWS_SEND,
    GET_ALL_LAWS_SUCCESS
} from "../../constants/actionTypes";
import {getAllLawsAction} from "./getAll";

export const deleteLawAction = lawId => dispatch => {
    dispatch({
        type: DELETE_LAW_SEND
    });
    const url = '/laws/news?lawId=' + lawId;
    fetch(url, {
        method: "delete",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
        .then(res => res.json())
        .then(res => {
            if (res.success) {
                dispatch({
                    type: DELETE_LAW_SUCCESS,
                });
                dispatch(getAllLawsAction())
            } else {
                dispatch({
                    type: DELETE_LAW_FAILED,
                    errorCode: res.errorCode
                })
            }
        })
        .catch(e => {
            console.error(e);
            dispatch({
                type: DELETE_LAW_FAILED,
                errorCode: e
            })
        })
};