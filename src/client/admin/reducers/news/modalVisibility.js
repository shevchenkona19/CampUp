export const showCreateNewsModalReducer = (state, action) => ({
    ...state,
    news: {
        ...state.news,
        modalVisible: true,
    }
});

export const hideCreateNewsModalReducer = (state, action) => ({
    ...state,
    news: {
        ...state.news,
        modalVisible: false,
        createNews: {
            isError: false,
            errorCode: "",
            title: "",
            body: "",
            creator: "",
            isSuccess: false,
        }
    }
});

