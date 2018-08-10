export const createPartySendReducer = (state, action) => ({
        ...state,
    isLoading: true,
    parties: {
        ...state,
        createParty: {
            ...state.createParty,
            isError: false,
            errorCode: ""
        }
    }
});

export const createPartySuccessReducer = (state, action) => ({
    ...state,
    isLoading: false,
    parties: {
        ...state,
        createParty: {
            ...state.createParty,
            submitSuccess: true
        }
    }
});

export const createPartyFailedReducer = (state, action) => ({
    ...state,
    isLoading: false,
    parties: {
        ...state,
        createParty: {
            ...state.createParty,
            isError: true,
            errorCode: action.errorCode
        }
    }
});