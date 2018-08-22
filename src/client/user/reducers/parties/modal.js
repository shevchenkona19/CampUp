export const showAboutPartyReducer = (state, action) => ({
    ...state,
    parties: {
        ...state.parties,
        modalVisible: true,
    }
});

export const hideAboutPartyReducer = (state, action) => ({
    ...state,
    parties: {
        ...state.parties,
        modalVisible: false,
        selectedParty: {}
    }
});
