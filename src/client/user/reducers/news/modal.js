export const showAboutNewsReducer = (state, action) => ({
    ...state,
    news: {
        ...state.news,
        modalVisible: true,
    }
});

export const hideAboutNewsReducer = (state, action) => ({
    ...state,
    news: {
        ...state.news,
        modalVisible: false,
        selectedNews: {}
    }
});
