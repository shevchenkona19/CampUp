export const addToPartySendReducer = (state, action) => ({
    ...state,
    isLoading: true,
});

export const addToPartyFailedReducer = (state, action) => ({
    ...state,
    isLoading: false,
});

export const addToPartySuccessReducer = (state, action) => ({
    ...state,
    isLoading: false,
});