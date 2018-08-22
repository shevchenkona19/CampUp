export const loadAllUsersSendReducer = (state, action) => ({
    ...state,
    isLoading: true,
});

export const loadAllUsersFailedReducer = (state, action) => ({
    ...state,
    isLoading: false,
    isError: true,
});

export const loadAllUsersSuccessReducer = (state, action) => ({
    ...state,
    isLoading: false,
    users: {
        ...state.users,
        users: action.users,
    }
});