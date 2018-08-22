export const showAboutUserReducer = (state, action) => ({
    ...state,
    users: {
        ...state.users,
        modalVisible: true,
    }
});

export const hideAboutUserReducer = (state, action) => ({
    ...state,
    users: {
        ...state.users,
        modalVisible: false,
        selectedUser: {}
    }
});
