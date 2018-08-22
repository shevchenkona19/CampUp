export const getAllNewsSendReducer = (state, action) => ({
    ...state,
    isLoading: true,
});

export const getAllNewsFailedReducer = (state, action) => ({
    ...state,
    isLoading: false,
    isError: true,
});

export const getAllNewsSuccessReducer = (state, action) => ({
    ...state,
    isLoading: false,
    news: {
        ...state.news,
        news: action.news,
    }
});