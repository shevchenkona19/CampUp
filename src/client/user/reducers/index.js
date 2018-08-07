import * as t from "../constants/actionTypes";
import {initState} from "../store/store";

export default function rootReducer(state = initState, action) {
    switch (action.type) {
        default:
            return {...state}
    }
}