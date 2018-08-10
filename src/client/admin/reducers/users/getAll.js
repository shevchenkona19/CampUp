export const getAllUsersSendReducer = (state, action) => ({
    ...state,
    isLoading: true
});

export const getAllUsersSuccessReducer = (state, action) => ({
    ...state,
    isLoading: false,
    users: {
        ...state.users,
        users: action.users
    }
});

export const getAllUsersFailedReducer = (state, action) => ({
    ...state,
    isLoading: false,
    isError: true,
});