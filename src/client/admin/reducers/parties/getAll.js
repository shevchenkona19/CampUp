export const getAllPartiesSendReducer = (state, action) => ({
    ...state,
    isLoading: true,
});

export const getAllPartiesFailedReducer = (state, action) => ({
    ...state,
    isLoading: false,
    isError: true,
});

export const getAllPartiesSuccessReducer = (state, action) => ({
    ...state,
    isLoading: false,
    parties: {
        ...state.parties,
        parties: action.parties,
    }
});