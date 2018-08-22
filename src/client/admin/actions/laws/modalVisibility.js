import {HIDE_CREATE_LAW_MODAL , SHOW_CREATE_LAW_MODAL} from "../../constants/actionTypes";

export const showCreateLawModalAction = () => ({
    type: SHOW_CREATE_LAW_MODAL
});

export const hideCreateLawModalAction = () => ({
    type: HIDE_CREATE_LAW_MODAL
});