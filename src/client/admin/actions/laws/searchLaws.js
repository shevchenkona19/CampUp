import {
    SEARCH_LAWS_FAILED, SEARCH_LAWS_SEND, SEARCH_LAWS_SUCCESS, SET_SEARCHING_LAWS
} from "../../constants/actionTypes";

export const searchLawsAction = query => dispatch => {
    dispatch({
        type: SEARCH_LAWS_SEND
    });
    const url = '/laws/search?query=' + query;
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
                    type: SEARCH_LAWS_SUCCESS,
                    laws: res.laws
                })
            } else {
                dispatch({
                    type: SEARCH_LAWS_FAILED,
                    errorCode: res.errorCode
                })
            }
        })
        .catch(e => {
            console.error(e);
            dispatch({
                type: SEARCH_LAWS_FAILED,
                errorCode: e
            })
        })
};

export const setSearchingLawsAction = isSearching => ({
    type: SET_SEARCHING_LAWS,
    isSearching
});