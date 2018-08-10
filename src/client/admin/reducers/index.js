import * as t from "../constants/actionTypes";
import {navToReducer} from "./nav";
import {initState} from "../store/store";
import {
    changeCreatePartyDescriptionReducer,
    changeCreatePartyIdeologyReducer,
    changeCreatePartyTitleReducer
} from "./parties/input";
import {closeCreateModalReducer, showCreateModalReducer} from "./parties/modalVisibility";
import {
    changeCreateUserLastNameReducer,
    changeCreateUserNameReducer,
    changeCreateUserStatusReducer
} from "./users/input";
import {createUserFailedReducer, createUserSendReducer, createUserSuccessReducer} from "./users/createOne";
import {getAllUsersFailedReducer, getAllUsersSendReducer, getAllUsersSuccessReducer} from "./users/getAll";
import {hideCreateUserModalReducer, showCreateUserModalReducer} from "./users/modalVisibility";
import {createPartyFailedReducer, createPartySendReducer, createPartySuccessReducer} from "./parties/createOne";
import {getAllPartiesFailedReducer, getAllPartiesSendReducer, getAllPartiesSuccessReducer} from "./parties/getAll";
import {
    getEmptyUsersFailedReducer,
    getEmptyUsersSendReducer,
    getEmptyUsersSuccessReducer
} from "./parties/getEmptyUsers";
import {addToPartyFailedReducer, addToPartySendReducer, addToPartySuccessReducer} from "./parties/addToParty";
import {
    getUsersForPartyFailedReducer,
    getUsersForPartySendReducer,
    getUsersForPartySuccessReducer
} from "./parties/getAllUsersForParty";
import {
    deleteFromPartyFailedReducer,
    deleteFromPartySendReducer,
    deleteFromPartySuccessReducer
} from "./parties/deleteFromParty";


export default function rootReducer(state = initState, action) {
    switch (action.type) {
        case t.NAV_TO:
            return navToReducer(state, action);
        case t.CHANGE_CREATE_PARTY_TITLE:
            return changeCreatePartyTitleReducer(state, action);
        case t.CHANGE_CREATE_PARTY_DESCRIPTION:
            return changeCreatePartyDescriptionReducer(state, action);
        case t.CHANGE_CREATE_PARTY_IDEOLOGY:
            return changeCreatePartyIdeologyReducer(state, action);
        case t.SHOW_CREATE_MODAL:
            return showCreateModalReducer(state, action);
        case t.CLOSE_CREATE_MODAL:
            return closeCreateModalReducer(state, action);
        case t.CHANGE_CREATE_USER_NAME:
            return changeCreateUserNameReducer(state, action);
        case t.CHANGE_CREATE_USER_LAST_NAME:
            return changeCreateUserLastNameReducer(state, action);
        case t.CHANGE_CREATE_USER_STATUS:
            return changeCreateUserStatusReducer(state, action);
        case t.CREATE_USER_SEND:
            return createUserSendReducer(state, action);
        case t.CREATE_USER_FAILED:
            return createUserFailedReducer(state, action);
        case t.CREATE_USER_SUCCESS:
            return createUserSuccessReducer(state, action);
        case t.GET_ALL_USERS_SEND:
            return getAllUsersSendReducer(state, action);
        case t.GET_ALL_USERS_FAILED:
            return getAllUsersFailedReducer(state, action);
        case t.GET_ALL_USERS_SUCCESS:
            return getAllUsersSuccessReducer(state, action);
        case t.SHOW_CREATE_USER_MODAL:
            return showCreateUserModalReducer(state, action);
        case t.HIDE_CREATE_USER_MODAL:
            return hideCreateUserModalReducer(state, action);
        case t.CREATE_PARTY_SEND:
            return createPartySendReducer(state, action);
        case t.CREATE_PARTY_FAILED:
            return createPartyFailedReducer(state, action);
        case t.CREATE_PARTY_SUCCESS:
            return createPartySuccessReducer(state, action);
        case t.GET_ALL_PARTIES_SEND:
            return getAllPartiesSendReducer(state, action);
        case t.GET_ALL_PARTIES_SUCCESS:
            return getAllPartiesSuccessReducer(state, action);
        case t.GET_ALL_PARTIES_FAILED:
            return getAllPartiesFailedReducer(state, action);
        case t.GET_EMPTY_USERS_FAILED:
            return getEmptyUsersFailedReducer(state, action);
        case t.GET_EMPTY_USERS_SEND:
            return getEmptyUsersSendReducer(state, action);
        case t.GET_EMPTY_USERS_SUCCESS:
            return getEmptyUsersSuccessReducer(state, action);
        case t.ADD_USER_FAILED:
            return addToPartyFailedReducer(state, action);
        case t.ADD_USER_SEND:
            return addToPartySendReducer(state, action);
        case t.ADD_USER_SUCCESS:
            return addToPartySuccessReducer(state, action);

        case t.GET_ALL_USERS_PARTY_SEND:
            return getUsersForPartySendReducer(state, action);
        case t.GET_ALL_USERS_PARTY_FAILED:
            return getUsersForPartyFailedReducer(state, action);
        case t.GET_ALL_USERS_PARTY_SUCCESS:
            return getUsersForPartySuccessReducer(state, action);
        case t.DELETE_USER_PARTY_FAILED:
            return deleteFromPartyFailedReducer(state, action);
        case t.DELETE_USER_PARTY_SEND:
            return deleteFromPartySendReducer(state, action);
        case t.DELETE_USER_PARTY_SUCCESS:
            return deleteFromPartySuccessReducer(state, action);
        default:
            return {...state}
    }
}