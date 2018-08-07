import {tabTypes} from "../constants/tabs";

export const navToReducer = (state, action) => ({
    ...state,
    nav: {
        ...state.nav,
        selectedTab: action.tab
    },
    currentRoute: resolveRoute(action.tab)
});

const resolveRoute = tabNum => {
    switch (tabNum) {
        case tabTypes.USERS:
            return "/admin/allusers";
        case tabTypes.LAWS:
            return "/admin/laws";
        case tabTypes.NEWS:
            return "/admin/news";
        case tabTypes.PARTIES:
            return "/admin/allparties";
        default:
            return "/admin"
    }
};