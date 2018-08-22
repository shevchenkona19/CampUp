export const createPartySendReducer = (state, action) => ({
    ...state,
    isLoading: true,
    parties: {
        ...state.parties,
        createParty: {
            ...state.parties.createParty,
            isError: false,
            errorCode: ""
        }
    }
});

export const createPartySuccessReducer = (state, action) => ({
    ...state,
    isLoading: false,
    parties: {
        ...state.parties,
        createParty: {
            ...state.parties.createParty,
            submitSuccess: true
        }
    }
});

export const createPartyFailedReducer = (state, action) => ({
    ...state,
    isLoading: false,
    parties: {
        ...state.parties,
        createParty: {
            ...state.parties.createParty,
            isError: true,
            errorCode: action.errorCode
        }
    }
});