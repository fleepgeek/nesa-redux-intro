export const getUser = () => {
    return async (dispatch) => {
        dispatch(getUserStart())
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
            const user = await res.json();
            dispatch(getUserSuccess(user))
            console.log(user)
        }catch(error) {
            dispatch(getUserFailure(error))
        }
    }
}
const getUserStart = () => {
    return {
        type: "GET_USER_START"
    }
}
const getUserSuccess = (user) => {
    return {
        type: "GET_USER_SUCCESS",
        user: user
    }
}
const getUserFailure = (error) => {
    return {
        type: "GET_USER_FAILURE",
        error: error
    }
}