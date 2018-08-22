import {
    CREATE_LAW_FAILED,
    CREATE_LAW_SEND, CREATE_LAW_SUCCESS, CREATE_NEWS_FAILED, CREATE_NEWS_SEND, CREATE_NEWS_SUCCESS,
} from "../../constants/actionTypes";

export const createNewsAction = news => dispatch => {
    dispatch({
        type: CREATE_NEWS_SEND
    });
    const url = '/news/newNews';
    fetch(url, {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(news)
    })
        .then(res => res.json())
        .then(res => {
            if (res.success) {
                dispatch({
                    type: CREATE_NEWS_SUCCESS,
                })
            } else {
                dispatch({
                    type: CREATE_NEWS_FAILED,
                    errorCode: res.errorCode
                })
            }
        })
        .catch(e => {
            console.error(e);
            dispatch({
                type: CREATE_NEWS_FAILED,
                errorCode: e
            })
        })
};