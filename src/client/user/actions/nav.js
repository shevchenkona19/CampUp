import {NAV_TO, SET_ROUTE} from "../constants/actionTypes";

export const navToAction = tab => ({
    type: NAV_TO,
    tab
});

export const setRouteAction = route => ({
    type: SET_ROUTE,
    route
});