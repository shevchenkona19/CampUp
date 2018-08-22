import {HIDE_ABOUT_PARTY, SHOW_ABOUT_PARTY} from "../../constants/actionTypes";

export const showAboutPartyModalAction = () => ({
    type: SHOW_ABOUT_PARTY,
});

export const hideAboutPartyModalAction = () => ({
    type: HIDE_ABOUT_PARTY
});