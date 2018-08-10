import {
    CHANGE_CREATE_USER_LAST_NAME,
    CHANGE_CREATE_USER_NAME,
    CHANGE_CREATE_USER_STATUS
} from "../../constants/actionTypes";

export const changeCreateUserNameAction = name => ({
    type: CHANGE_CREATE_USER_NAME,
    name
});

export const changeCreateUserLastNameAction = lastName => ({
    type: CHANGE_CREATE_USER_LAST_NAME,
    lastName
});

export const changeCreateUserStatusAction = status => ({
    type: CHANGE_CREATE_USER_STATUS,
    status
});
