export const loadAllNewsSendReducer = (state, action) => ({
    ...state,
    isLoading: true,
});

export const loadAllNewsFailedReducer = (state, action) => ({
    ...state,
    isLoading: false,
    isError: true,
});

export const loadAllNewsSuccessReducer = (state, action) => ({
    ...state,
    isLoading: false,
    news: {
        ...state.news,
        news: action.news,
    }
});