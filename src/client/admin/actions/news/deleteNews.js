import {
   DELETE_NEWS_FAILED, DELETE_NEWS_SEND, DELETE_NEWS_SUCCESS,
} from "../../constants/actionTypes";
import {getAllNewsAction} from "./getAll";

export const deleteNewsAction = newsId => dispatch => {
    dispatch({
        type: DELETE_NEWS_SEND
    });
    const url = '/news/news?newsId=' + newsId;
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
                    type: DELETE_NEWS_SUCCESS,
                });
                dispatch(getAllNewsAction())
            } else {
                dispatch({
                    type: DELETE_NEWS_FAILED,
                    errorCode: res.errorCode
                })
            }
        })
        .catch(e => {
            console.error(e);
            dispatch({
                type: DELETE_NEWS_FAILED,
                errorCode: e
            })
        })
};