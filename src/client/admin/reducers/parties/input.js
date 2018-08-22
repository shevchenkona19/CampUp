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

export const changePartyRatingReducer = (state, action) => {
    let rating = state.parties.setRating.rating;
    const reg = /^\d+$/;
    if (reg.test(action.rating)) {
        if (action.rating < 101 && action.rating >= 0)
            rating = action.rating;
    }
    return ({
        ...state,
        parties: {
            ...state.parties,
            setRating: {
                ...state.parties.setRating,
                rating
            }
        }
    });
};