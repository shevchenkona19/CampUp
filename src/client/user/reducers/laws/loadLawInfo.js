export const loadLawInfoSendReducer = (state, action) => ({
    ...state,
    isLoading: true,
});

export const loadLawInfoFailedReducer = (state, action) => ({
    ...state,
    isLoading: false,
    isError: true,
});

export const loadLawInfoSuccessReducer = (state, action) => ({
    ...state,
    isLoading: false,
    laws: {
        ...state.laws,
        selectedLaw: action.law,
    }
});