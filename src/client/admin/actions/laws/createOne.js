import {
    CREATE_LAW_FAILED,
    CREATE_LAW_SEND, CREATE_LAW_SUCCESS,
} from "../../constants/actionTypes";

export const createLawAction = law => dispatch => {
    dispatch({
        type: CREATE_LAW_SEND
    });
    const url = '/laws/newLaw';
    fetch(url, {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(law)
    })
        .then(res => res.json())
        .then(res => {
            if (res.success) {
                dispatch({
                    type: CREATE_LAW_SUCCESS,
                })
            } else {
                dispatch({
                    type: CREATE_LAW_FAILED,
                    errorCode: res.errorCode
                })
            }
        })
        .catch(e => {
            console.error(e);
            dispatch({
                type: CREATE_LAW_FAILED,
                errorCode: e
            })
        })
};