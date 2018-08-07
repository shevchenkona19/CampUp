import {CLOSE_CREATE_MODAL, SHOW_CREATE_MODAL} from "../../constants/actionTypes";

export const showCreateModalAction = () => ({
   type: SHOW_CREATE_MODAL
});

export const closeCreateModalAction = () => ({
    type: CLOSE_CREATE_MODAL
});