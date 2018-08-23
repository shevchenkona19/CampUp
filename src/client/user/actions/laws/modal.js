import {HIDE_ABOUT_LAW, SHOW_ABOUT_LAW} from "../../constants/actionTypes";

export const showAboutLawModalAction = () => ({
    type: SHOW_ABOUT_LAW,
});

export const hideAboutLawModalAction = () => ({
    type: HIDE_ABOUT_LAW
});