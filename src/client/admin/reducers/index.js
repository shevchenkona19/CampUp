import * as t from "../constants/actionTypes";
import {navToReducer} from "./nav";
import {initState} from "../store/store";
import {changeCreatePartyDescriptionReducer, changeCreatePartyIdeologyReducer, changeCreatePartyTitleReducer} from "./parties/input";
import {closeCreateModalReducer, showCreateModalReducer} from "./parties/modalVisibility";


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

        default:
            return {...state}
    }
}