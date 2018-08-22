export const changeLawTitleReducer = (state, action) => ({
    ...state,
    laws: {
        ...state.laws,
        createLaw: {
            ...state.laws.createLaw,
            title: action.title
        }
    }
});

export const changeLawBodyReducer = (state, action) => ({
    ...state,
    laws: {
        ...state.laws,
        createLaw: {
            ...state.laws.createLaw,
            body: action.body
        }
    }
});

export const changeLawCreatorReducer = (state, action) => ({
    ...state,
    laws: {
        ...state.laws,
        createLaw: {
            ...state.laws.createLaw,
            creator: action.creator
        }
    }
});