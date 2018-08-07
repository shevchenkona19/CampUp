export const changeCreatePartyTitleReducer = (state, action) => ({
    ...state,
    parties: {
        ...state.parties,
        createParty: {
            ...state.parties.createParty,
            title: action.title,
        }
    }
});

export const changeCreatePartyDescriptionReducer = (state, action) => ({
    ...state,
    parties: {
        ...state.parties,
        createParty: {
            ...state.parties.createParty,
            description: action.description,
        }
    }
});

export const changeCreatePartyIdeologyReducer = (state, action) => ({
    ...state,
    parties: {
        ...state.parties,
        createParty: {
            ...state.parties.createParty,
            ideology: action.ideology,
        }
    }
});