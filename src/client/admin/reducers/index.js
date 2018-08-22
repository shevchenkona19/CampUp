import * as t from "../constants/actionTypes";
import {navToReducer} from "./nav";
import {initState} from "../store/store";
import {
    changeCreatePartyDescriptionReducer,
    changeCreatePartyIdeologyReducer,
    changeCreatePartyTitleReducer, changePartyRatingReducer
} from "./parties/input";
import {
    closeCreateModalReducer,
    hideSetRatingModalReducer,
    showCreateModalReducer,
    showSetRatingModalReducer
} from "./parties/modalVisibility";
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
import {getAllLawsFailedReducer, getAllLawsSendReducer, getAllLawsSuccessReducer} from "./laws/getAll";
import {createLawFailedReducer, createLawSendReducer, createLawSuccessReducer} from "./laws/createOne";
import {deleteLawFailedReducer, deleteLawSendReducer, deleteLawSuccessReducer} from "./laws/deleteOne";
import {
    searchLawsFailedReducer,
    searchLawsSendReducer,
    searchLawsSuccessReducer,
    setSearchingLawsReducer
} from "./laws/search";
import {hideCreateLawModalReducer, showCreateLawModalReducer} from "./laws/modalVisibility";
import {changeLawBodyReducer, changeLawCreatorReducer, changeLawTitleReducer} from "./laws/input";
import {getAllNewsFailedReducer, getAllNewsSendReducer, getAllNewsSuccessReducer} from "./news/getAll";
import {createNesSendReducer, createNewsFailedReducer, createNewsSuccessReducer} from "./news/createOne";
import {deleteNewsFailedReducer, deleteNewsSendReducer, deleteNewsSuccessReducer} from "./news/deleteOne";
import {hideCreateNewsModalReducer, showCreateNewsModalReducer} from "./news/modalVisibility";
import {changeNewsBodyReducer, changeNewsCreatorReducer, changeNewsTitleReducer} from "./news/input";
import {setRatingFailedReducer, setRatingSendReducer, setRatingSuccessReducer} from "./parties/setPartyRating";


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
        case t.GET_ALL_LAWS_SEND:
            return getAllLawsSendReducer(state, action);
        case t.GET_ALL_LAWS_FAILED:
            return getAllLawsFailedReducer(state, action);
        case t.GET_ALL_LAWS_SUCCESS:
            return getAllLawsSuccessReducer(state, action);

        case t.CREATE_LAW_SEND:
            return createLawSendReducer(state, action);
        case t.CREATE_LAW_FAILED:
            return createLawFailedReducer(state, action);
        case t.CREATE_LAW_SUCCESS:
            return createLawSuccessReducer(state, action);

        case t.DELETE_LAW_SEND:
            return deleteLawSendReducer(state, action);
        case t.DELETE_LAW_FAILED:
            return deleteLawFailedReducer(state, action);
        case t.DELETE_LAW_SUCCESS:
            return deleteLawSuccessReducer(state, action);

        case t.SEARCH_LAWS_SEND:
            return searchLawsSendReducer(state, action);
        case t.SEARCH_LAWS_FAILED:
            return searchLawsFailedReducer(state, action);
        case t.SEARCH_LAWS_SUCCESS:
            return searchLawsSuccessReducer(state, action);

        case t.SET_SEARCHING_LAWS:
            return setSearchingLawsReducer(state, action);

        case t.SHOW_CREATE_LAW_MODAL:
            return showCreateLawModalReducer(state, action);
        case t.HIDE_CREATE_LAW_MODAL:
            return hideCreateLawModalReducer(state, action);

        case t.CHANGE_CREATELAW_TITLE:
            return changeLawTitleReducer(state, action);
        case t.CHANGE_CREATELAW_BODY:
            return changeLawBodyReducer(state, action);
        case t.CHANGE_CREATELAW_CREATOR:
            return changeLawCreatorReducer(state, action);

        case t.GET_ALL_NEWS_SEND:
            return getAllNewsSendReducer(state, action);
        case t.GET_ALL_NEWS_FAILED:
            return getAllNewsFailedReducer(state, action);
        case t.GET_ALL_NEWS_SUCCESS:
            return getAllNewsSuccessReducer(state, action);

        case t.CREATE_NEWS_SEND:
            return createNesSendReducer(state, action);
        case t.CREATE_NEWS_FAILED:
            return createNewsFailedReducer(state, action);
        case t.CREATE_NEWS_SUCCESS:
            return createNewsSuccessReducer(state, action);

        case t.DELETE_NEWS_FAILED:
            return deleteNewsFailedReducer(state, action);
        case t.DELETE_NEWS_SEND:
            return deleteNewsSendReducer(state, action);
        case t.DELETE_NEWS_SUCCESS:
            return deleteNewsSuccessReducer(state, action);

        case t.SHOW_CREATE_NEWS_MODAL:
            return showCreateNewsModalReducer(state, action);
        case t.HIDE_CREATE_NEWS_MODAL:
            return hideCreateNewsModalReducer(state, action);

        case t.CHANGE_CREATE_NEWS_TITLE:
            return changeNewsTitleReducer(state, action);
        case t.CHANGE_CREATE_NEWS_BODY:
            return changeNewsBodyReducer(state, action);
        case t.CHANGE_CREATE_NEWS_CREATOR:
            return changeNewsCreatorReducer(state, action);

        case t.SET_PARTY_RATING_SEND:
            return setRatingSendReducer(state, action);
        case t.SET_PARTY_RATING_FAILED:
            return setRatingFailedReducer(state, action);
        case t.SET_PARTY_RATING_SUCCESS:
            return setRatingSuccessReducer(state, action);
        case t.SHOW_SET_RATING_MODAL:
            return showSetRatingModalReducer(state, action);
        case t.HIDE_SET_RATING_MODAL:
            return hideSetRatingModalReducer(state, action);
        case t.CHANGE_RATING:
            return changePartyRatingReducer(state, action);

        default:
            return {...state}
    }
}