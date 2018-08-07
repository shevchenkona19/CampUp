export const showCreateModalReducer = (state, action) => ({
    ...state,
    parties: {
        ...state.parties,
        showModal: true
    }
});

export const closeCreateModalReducer = (state, action) => ({
    ...state,
    parties: {
        ...state.parties,
        showModal: false,
        createParty: {
            ...state.parties.createParty,
            title: "",
            description: "",
            ideology: "",
            isError: false,
            errorCode: ""
        }
    }
});