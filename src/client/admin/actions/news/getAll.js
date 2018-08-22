import {
    GET_ALL_LAWS_FAILED,
    GET_ALL_LAWS_SEND,
    GET_ALL_LAWS_SUCCESS, GET_ALL_NEWS_FAILED, GET_ALL_NEWS_SEND, GET_ALL_NEWS_SUCCESS
} from "../../constants/actionTypes";

export const getAllNewsAction = () => dispatch => {
    dispatch({
        type: GET_ALL_NEWS_SEND
    });
    const url = '/news/all';
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
                    type: GET_ALL_NEWS_SUCCESS,
                    news: res.news
                })
            } else {
                dispatch({
                    type: GET_ALL_NEWS_FAILED,
                    errorCode: res.errorCode
                })
            }
        })
        .catch(e => {
            console.error(e);
            dispatch({
                type: GET_ALL_NEWS_FAILED,
                errorCode: e
            })
        })
};