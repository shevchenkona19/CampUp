export const deleteLawSendReducer = (state, action) => ({
    ...state,
    isLoading: true,
});

export const deleteLawFailedReducer = (state, action) => ({
    ...state,
    isLoading: false,
    isError: true,
});

export const deleteLawSuccessReducer = (state, action) => ({
    ...state,
    isLoading: false,
});