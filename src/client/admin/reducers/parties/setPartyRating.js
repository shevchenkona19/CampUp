export const setRatingSendReducer = (state, action) => ({
    ...state,
    isLoading: true,
});

export const setRatingFailedReducer = (state, action) => ({
    ...state,
    isLoading: false,
    isError: true
});

export const setRatingSuccessReducer = (state, action) => ({
    ...state,
    isLoading: false,
    parties: {
        ...state.parties,
        setRating: {
            ...state.parties.setRating,
            isSuccess: true,
        }
    }
});