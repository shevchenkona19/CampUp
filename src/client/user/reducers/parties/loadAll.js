export const loadAllPartiesSendReducer = (state, action) => ({
    ...state,
    isLoading: true,
});

export const loadAllPartiesFailedReducer = (state, action) => ({
    ...state,
    isLoading: false,
    isError: true,
});

export const loadAllPartiesSuccessReducer = (state, action) => ({
    ...state,
    isLoading: false,
    parties: {
        ...state.parties,
        parties: action.parties,
    }
});