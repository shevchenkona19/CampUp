export const showCreateUserModalReducer = (state, action) => ({
    ...state,
    users: {
        ...state.users,
        showModal: true,
    }
});

export const hideCreateUserModalReducer = (state, action) => ({
    ...state,
    users: {
        ...state.users,
        showModal: false,
        createUser: {
            ...state.users.createUser,
            name: "",
            lastName: "",
            status: "",
            isError: false,
            errorCode: "",
            submitSuccess: false
        }
    }
});