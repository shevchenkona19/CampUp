import {
    CHANGE_CREATE_NEWS_BODY, CHANGE_CREATE_NEWS_CREATOR,
    CHANGE_CREATE_NEWS_TITLE,
} from "../../constants/actionTypes";

export const changeNewsTitleAction = title => ({
    type: CHANGE_CREATE_NEWS_TITLE,
    title
});

export const changeNewsBodyAction = body => ({
    type: CHANGE_CREATE_NEWS_BODY,
    body
});

export const changeNewsCreatorAction = creator => ({
    type: CHANGE_CREATE_NEWS_CREATOR,
    creator
});