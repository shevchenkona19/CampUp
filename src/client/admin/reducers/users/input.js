export const changeCreateUserNameReducer = (state, action) => ({
    ...state,
    users: {
        ...state.users,
        createUser: {
            ...state.users.createUser,
            name: action.name
        }
    }
});

export const changeCreateUserLastNameReducer = (state, action) => ({
    ...state,
    users: {
        ...state.users,
        createUser: {
            ...state.users.createUser,
            lastName: action.lastName
        }
    }
});

export const changeCreateUserStatusReducer = (state, action) => ({
    ...state,
    users: {
        ...state.users,
        createUser: {
            ...state.users.createUser,
            status: action.status
        }
    }
});