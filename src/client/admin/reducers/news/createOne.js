export const createNesSendReducer = (state, action) => ({
    ...state,
    isLoading: true,
});

export const createNewsFailedReducer = (state, action) => ({
    ...state,
    isLoading: false,
    news: {
        ...state.news,
        createNews: {
            ...state.news.createNews,
            isError: true,
            errorCode: action.errorCode,
        }
    }
});

export const createNewsSuccessReducer = (state, action) => ({
    ...state,
    isLoading: false,
    news: {
        ...state.news,
        createNews: {
            ...state.news.createNews,
            isSuccess: true,
        }
    }
});