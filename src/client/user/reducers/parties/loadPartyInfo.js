export const loadPartyInfoSendReducer = (state, action) => ({
    ...state,
    isLoading: true,
});

export const loadPartyInfoFailedReducer = (state, action) => ({
    ...state,
    isLoading: false,
    isError: true,
});

export const loadPartyInfoSuccessReducer = (state, action) => ({
    ...state,
    isLoading: false,
    parties: {
        ...state.parties,
        selectedParty: action.party,
    }
});