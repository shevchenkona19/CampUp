export const getAllLawsSendReducer = (state, action) => ({
    ...state,
    isLoading: true,
});

export const getAllLawsFailedReducer = (state, action) => ({
    ...state,
    isLoading: false,
    isError: true,
});

export const getAllLawsSuccessReducer = (state, action) => ({
    ...state,
    isLoading: false,
    laws: {
        ...state.laws,
        laws: action.laws,
    }
});