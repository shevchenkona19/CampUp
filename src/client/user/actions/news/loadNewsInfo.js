import {
    LOAD_NEWS_INFO_FAILED, LOAD_NEWS_INFO_SEND, LOAD_NEWS_INFO_SUCCESS,
} from "../../constants/actionTypes";

export const loadNewsInfoAction = newsId => dispatch => {
    dispatch({
        type: LOAD_NEWS_INFO_SEND
    });
    const url = "/news/news?id=" + newsId;
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
                    type: LOAD_NEWS_INFO_SUCCESS,
                    news: res.news,
                })
            } else {
                dispatch({
                    type: LOAD_NEWS_INFO_FAILED,
                    errorCode: res.errorCode,
                })
            }
        })
        .catch(e => {
            console.error(e);
            dispatch({
                type: LOAD_NEWS_INFO_FAILED,
                errorCode: e
            })
        })
};