export const deleteFromPartySendReducer = (state, action) => ({
    ...state,
    isLoading: true,
});

export const deleteFromPartyFailedReducer = (state, action) => ({
    ...state,
    isLoading: false,
});

export const deleteFromPartySuccessReducer = (state, action) => ({
    ...state,
    isLoading: false,
});