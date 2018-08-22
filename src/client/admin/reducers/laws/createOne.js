export const createLawSendReducer = (state, action) => ({
    ...state,
    isLoading: true,
});

export const createLawFailedReducer = (state, action) => ({
    ...state,
    isLoading: false,
    laws: {
        ...state.laws,
        createLaw: {
            ...state.laws.createLaw,
            isError: true,
            errorCode: action.errorCode,
        }
    }
});

export const createLawSuccessReducer = (state, action) => ({
    ...state,
    isLoading: false,
    laws: {
        ...state.laws,
        createLaw: {
            ...state.laws.createLaw,
            isSuccess: true,
        }
    }
});