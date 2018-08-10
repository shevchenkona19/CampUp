import {HIDE_CREATE_USER_MODAL, SHOW_CREATE_USER_MODAL} from "../../constants/actionTypes";

export const showCreateUserModalAction = () => ({
    type: SHOW_CREATE_USER_MODAL
});

export const hideCreateUserModalAction = () => ({
   type: HIDE_CREATE_USER_MODAL
});