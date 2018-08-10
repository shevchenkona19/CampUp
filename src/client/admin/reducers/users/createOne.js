export const createUserSendReducer = (state, action) => ({
    ...state,
    isLoading: true,
    users: {
        ...state.users,
        createUser: {
            ...state.users.createUser,
            isError: false,
            errorCode: ""
        }
    }
});

export const createUserFailedReducer = (state, action) => ({
    ...state,
    isLoading: false,
    users: {
        ...state.users,
        createUser: {
            ...state.users.createUser,
            isError: true,
            errorCode: action.errorCode
        }
    }
});

export const createUserSuccessReducer = (state, action) => ({
    ...state,
    isLoading: false,
    users: {
        ...state.users,
        createUser: {
            ...state.users.createUser,
            submitSuccess: true,
        }
    }
});