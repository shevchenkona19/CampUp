export const loadUserInfoSendReducer = (state, action) => ({
    ...state,
    isLoading: true,
});

export const loadUserInfoFailedReducer = (state, action) => ({
    ...state,
    isLoading: false,
    isError: true,
});

export const loadUserInfoSuccessReducer = (state, action) => ({
    ...state,
    isLoading: false,
    users: {
        ...state.users,
        selectedUser: action.user,
    }
});