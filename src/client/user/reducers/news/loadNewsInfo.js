export const loadNewsInfoSendReducer = (state, action) => ({
    ...state,
    isLoading: true,
});

export const loadNewsInfoFailedReducer = (state, action) => ({
    ...state,
    isLoading: false,
    isError: true,
});

export const loadNewsInfoSuccessReducer = (state, action) => ({
    ...state,
    isLoading: false,
    news: {
        ...state.news,
        selectedNews: action.news,
    }
});