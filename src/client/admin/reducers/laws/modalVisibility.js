export const showCreateLawModalReducer = (state, action) => ({
    ...state,
    laws: {
        ...state.laws,
        modalVisible: true,
    }
});

export const hideCreateLawModalReducer = (state, action) => ({
    ...state,
    laws: {
        ...state.laws,
        modalVisible: false,
        createLaw: {
            isError: false,
            errorCode: "",
            title: "",
            body: "",
            creator: "",
            isSuccess: false,
        }
    }
});

