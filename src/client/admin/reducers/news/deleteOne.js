export const deleteNewsSendReducer = (state, action) => ({
    ...state,
    isLoading: true,
});

export const deleteNewsFailedReducer = (state, action) => ({
    ...state,
    isLoading: false,
    isError: true,
});

export const deleteNewsSuccessReducer = (state, action) => ({
    ...state,
    isLoading: false,
});