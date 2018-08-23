import * as t from "../constants/actionTypes";
import {initState} from "../store/store";
import {navToReducer} from "../reducers/nav";
import {loadAllUsersFailedReducer, loadAllUsersSendReducer, loadAllUsersSuccessReducer} from "./users/loadAll";
import {loadUserInfoFailedReducer, loadUserInfoSendReducer, loadUserInfoSuccessReducer} from "./users/loadUserInfo";
import {hideAboutUserReducer, showAboutUserReducer} from "./users/modal";
import {loadAllPartiesFailedReducer, loadAllPartiesSendReducer, loadAllPartiesSuccessReducer} from "./parties/loadAll";
import {
    loadPartyInfoFailedReducer,
    loadPartyInfoSendReducer,
    loadPartyInfoSuccessReducer
} from "./parties/loadPartyInfo";
import {hideAboutPartyReducer, showAboutPartyReducer} from "./parties/modal";
import {loadAllLawsFailedReducer, loadAllLawsSendReducer, loadAllLawsSuccessReducer} from "./laws/loadAll";
import {loadLawInfoFailedReducer, loadLawInfoSendReducer, loadLawInfoSuccessReducer} from "./laws/loadLawInfo";
import {hideAboutLawReducer, showAboutLawReducer} from "./laws/modal";

export default function rootReducer(state = initState, action) {
    switch (action.type) {
        case t.NAV_TO:
            return navToReducer(state, action);
        case t.LOAD_ALL_USERS_SEND:
            return loadAllUsersSendReducer(state, action);
        case t.LOAD_ALL_USERS_FAILED:
            return loadAllUsersFailedReducer(state, action);
        case t.LOAD_ALL_USERS_SUCCESS:
            return loadAllUsersSuccessReducer(state, action);
        case t.LOAD_USER_INFO_SEND:
            return loadUserInfoSendReducer(state, action);
        case t.LOAD_USER_INFO_FAILED:
            return loadUserInfoFailedReducer(state, action);
        case t.LOAD_USER_INFO_SUCCESS:
            return loadUserInfoSuccessReducer(state, action);
        case t.SHOW_ABOUT_USER:
            return showAboutUserReducer(state, action);
        case t.HIDE_ABOUT_USER:
            return hideAboutUserReducer(state, action);
        case t.LOAD_ALL_PARTIES_SEND:
            return loadAllPartiesSendReducer(state, action);
        case t.LOAD_ALL_PARTIES_FAILED:
            return loadAllPartiesFailedReducer(state, action);
        case t.LOAD_ALL_PARTIES_SUCCESS:
            return loadAllPartiesSuccessReducer(state, action);
        case t.LOAD_PARTY_INFO_SEND:
            return loadPartyInfoSendReducer(state, action);
        case t.LOAD_PARTY_INFO_FAILED:
            return loadPartyInfoFailedReducer(state, action);
        case t.LOAD_PARTY_INFO_SUCCESS:
            return loadPartyInfoSuccessReducer(state, action);
        case t.SHOW_ABOUT_PARTY:
            return showAboutPartyReducer(state, action);
        case t.HIDE_ABOUT_PARTY:
            return hideAboutPartyReducer(state, action);
        case t.LOAD_ALL_LAWS_SEND:
            return loadAllLawsSendReducer(state, action);
        case t.LOAD_ALL_LAWS_FAILED:
            return loadAllLawsFailedReducer(state, action);
        case t.LOAD_ALL_LAWS_SUCCESS:
            return loadAllLawsSuccessReducer(state, action);
        case t.LOAD_LAW_INFO_SEND:
            return loadLawInfoSendReducer(state, action);
        case t.LOAD_LAW_INFO_FAILED:
            return loadLawInfoFailedReducer(state, action);
        case t.LOAD_LAW_INFO_SUCCESS:
            return loadLawInfoSuccessReducer(state, action);
        case t.SHOW_ABOUT_LAW:
            return showAboutLawReducer(state, action);
        case t.HIDE_ABOUT_LAW:
            return hideAboutLawReducer(state, action);
        default:
            return {...state}
    }
}