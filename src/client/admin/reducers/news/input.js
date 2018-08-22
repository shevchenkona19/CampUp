export const changeNewsTitleReducer = (state, action) => ({
    ...state,
    news: {
        ...state.news,
        createNews: {
            ...state.news.createNews,
            title: action.title
        }
    }
});

export const changeNewsBodyReducer = (state, action) => ({
    ...state,
    news: {
        ...state.news,
        createNews: {
            ...state.news.createNews,
            body: action.body
        }
    }
});

export const changeNewsCreatorReducer = (state, action) => ({
    ...state,
    news: {
        ...state.news,
        createNews: {
            ...state.news.createNews,
            creator: action.creator
        }
    }
});