import {
    HIDE_CREATE_NEWS_MODAL,
    SHOW_CREATE_NEWS_MODAL
} from "../../constants/actionTypes";

export const showCreateNewsModalAction = () => ({
    type: SHOW_CREATE_NEWS_MODAL
});

export const hideCreateNewsModalAction = () => ({
    type: HIDE_CREATE_NEWS_MODAL
});