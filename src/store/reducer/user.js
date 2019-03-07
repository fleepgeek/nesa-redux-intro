const initialState = {
    currentUser: null,
    isLoading: false,
    error: null
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case "GET_USER_START":
            return {
                ...state,
                isLoading: true
            }
        case "GET_USER_SUCCESS":
            return {
                ...state,
                isLoading: false,
                currentUser: action.user
            }
        case "GET_USER_FAILURE":
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        default:
            return state;
    }
}

export default reducer;