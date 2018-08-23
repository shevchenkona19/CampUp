export const showAboutLawReducer = (state, action) => ({
    ...state,
    laws: {
        ...state.laws,
        modalVisible: true,
    }
});

export const hideAboutLawReducer = (state, action) => ({
    ...state,
    laws: {
        ...state.laws,
        modalVisible: false,
        selectedLaw: {}
    }
});
