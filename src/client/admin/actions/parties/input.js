import {
    CHANGE_CREATE_PARTY_DESCRIPTION,
    CHANGE_CREATE_PARTY_IDEOLOGY,
    CHANGE_CREATE_PARTY_TITLE, CHANGE_RATING
} from "../../constants/actionTypes";

export const changeCreatePartyTitle = title => ({
    type: CHANGE_CREATE_PARTY_TITLE,
    title
});

export const changeCreatePartyDescription = description => ({
    type: CHANGE_CREATE_PARTY_DESCRIPTION,
    description
});

export const changeCreatePartyIdeology = ideology => ({
    type: CHANGE_CREATE_PARTY_IDEOLOGY,
    ideology
});

export const changeRatingAction = rating => ({
    type: CHANGE_RATING,
    rating
});