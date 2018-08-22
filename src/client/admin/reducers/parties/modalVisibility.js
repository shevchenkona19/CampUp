export const showCreateModalReducer = (state, action) => ({
    ...state,
    parties: {
        ...state.parties,
        showModal: true
    }
});

export const closeCreateModalReducer = (state, action) => ({
    ...state,
    parties: {
        ...state.parties,
        showModal: false,
        createParty: {
            ...state.parties.createParty,
            title: "",
            description: "",
            ideology: "",
            isError: false,
            errorCode: ""
        }
    }
});

export const showSetRatingModalReducer = (state, action) => ({
    ...state,
    parties: {
        ...state.parties,
        setRating: {
            ...state.parties.setRating,
            selectedParty: action.party,
            rating: action.party.rating,
            showModal: true,
        }
    }
});

export const hideSetRatingModalReducer = (state, action) => ({
    ...state,
    parties: {
        ...state.parties,
        setRating: {
            showModal: false,
            rating: -1,
            selectedParty: {},
            isSuccess: false,
            isError: false,
            errorCode: ""
        }
    }
});