export const getEmptyUsersSendReducer = (state, action) => ({
    ...state,
    isLoading: true,
});

export const getEmptyUsersFailedReducer = (state, action) => ({
    ...state,
    isLoading: false,
    parties: {
        ...state.parties,
        emptyUsers: []
    }
});

export const getEmptyUsersSuccessReducer = (state, action) => ({
    ...state,
    isLoading: false,
    parties: {
        ...state.parties,
        emptyUsers: action.users,
    }
});