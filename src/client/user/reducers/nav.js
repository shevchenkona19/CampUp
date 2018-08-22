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
            return "/users";
        case tabTypes.LAWS:
            return "/laws";
        case tabTypes.NEWS:
            return "/news";
        case tabTypes.PARTIES:
            return "/parties";
        case tabTypes.HOME:
            return "/";
        default:
            return "/"
    }
};