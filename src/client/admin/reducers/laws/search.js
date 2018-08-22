export const searchLawsSendReducer = (state, action) => ({
    ...state,
    isLoading: true,
});

export const searchLawsFailedReducer = (state, action) => ({
    ...state,
    isLoading: false,
    isError: true,
});

export const searchLawsSuccessReducer = (state, action) => ({
    ...state,
    isLoading: false,
    laws: {
        ...state.laws,
        laws: action.laws
    }
});

export const setSearchingLawsReducer = (state, action) => ({
    ...state,
    laws: {
        ...state.laws,
        isSearching: true,
    }
});