import {
    LOAD_ALL_LAWS_FAILED,
    LOAD_ALL_LAWS_SEND, LOAD_ALL_LAWS_SUCCESS, LOAD_ALL_NEWS_FAILED, LOAD_ALL_NEWS_SEND, LOAD_ALL_NEWS_SUCCESS,
} from "../../constants/actionTypes";

export const loadAllNewsAction = () => dispatch => {
    dispatch({
        type: LOAD_ALL_NEWS_SEND
    });
    const url = "/news/all";
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
                    type: LOAD_ALL_NEWS_SUCCESS,
                    news: res.news,
                })
            } else {
                dispatch({
                    type: LOAD_ALL_NEWS_FAILED,
                    errorCode: res.errorCode,
                })
            }
        })
        .catch(e => {
            console.error(e);
            dispatch({
                type: LOAD_ALL_NEWS_FAILED,
                errorCode: e
            })
        })
};