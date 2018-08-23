import { HIDE_ABOUT_NEWS, SHOW_ABOUT_NEWS} from "../../constants/actionTypes";

export const showAboutNewsModalAction = () => ({
    type: SHOW_ABOUT_NEWS,
});

export const hideAboutNewsModalAction = () => ({
    type: HIDE_ABOUT_NEWS
});