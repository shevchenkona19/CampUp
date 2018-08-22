import {CHANGE_CREATELAW_BODY, CHANGE_CREATELAW_CREATOR, CHANGE_CREATELAW_TITLE} from "../../constants/actionTypes";

export const changeLawTitleAction = title => ({
    type: CHANGE_CREATELAW_TITLE,
    title
});

export const changeLawBodyAction = body => ({
    type: CHANGE_CREATELAW_BODY,
    body
});

export const changeLawCreatorAction = creator => ({
    type: CHANGE_CREATELAW_CREATOR,
    creator
});