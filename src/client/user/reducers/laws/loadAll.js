export const loadAllLawsSendReducer = (state, action) => ({
    ...state,
    isLoading: true,
});

export const loadAllLawsFailedReducer = (state, action) => ({
    ...state,
    isLoading: false,
    isError: true,
});

export const loadAllLawsSuccessReducer = (state, action) => ({
    ...state,
    isLoading: false,
    laws: {
        ...state.laws,
        laws: action.laws,
    }
});