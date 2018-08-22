import {
    CLOSE_CREATE_MODAL,
    HIDE_SET_RATING_MODAL,
    SHOW_CREATE_MODAL,
    SHOW_SET_RATING_MODAL
} from "../../constants/actionTypes";

export const showCreateModalAction = () => ({
    type: SHOW_CREATE_MODAL
});

export const closeCreateModalAction = () => ({
    type: CLOSE_CREATE_MODAL
});

export const showSetRatingAction = party => ({
    type: SHOW_SET_RATING_MODAL,
    party
});

export const hideSetRatingAction = () => ({
    type: HIDE_SET_RATING_MODAL
});