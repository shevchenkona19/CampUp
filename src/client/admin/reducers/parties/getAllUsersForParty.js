export const getUsersForPartySendReducer = (state, action) => ({
    ...state,
    isLoading: true,
});

export const getUsersForPartyFailedReducer = (state, action) => ({
    ...state,
    isLoading: false,
});

export const getUsersForPartySuccessReducer = (state, action) => ({
    ...state,
    isLoading: false,
    parties: {
        ...state.parties,
        partyUsers: action.users
    }
});