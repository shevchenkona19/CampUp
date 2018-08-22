import {HIDE_ABOUT_USER, SHOW_ABOUT_USER} from "../../constants/actionTypes";

export const showAboutUserModalAction = () => ({
    type: SHOW_ABOUT_USER,
});

export const hideAboutUserModalAction = () => ({
    type: HIDE_ABOUT_USER
});