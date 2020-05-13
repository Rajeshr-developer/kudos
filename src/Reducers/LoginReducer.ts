const initialState = {
    userName: 'Rajesh Ramaiah',
    loginCompleted: false,
    logout:false
}

export const LoginReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "LOGIN_ERROR":
        case "LOGIN_OUT":
            return { ...state, loginCompleted: false, logout: true }
        case "LOGIN_SUCCESS":
            return { ...state, loginCompleted: true }
        default:
            return state
    }
}