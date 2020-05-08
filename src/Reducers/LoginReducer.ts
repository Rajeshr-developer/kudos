const initialState = {
    userName: 'Rajesh Ramaiah',
    loginCompleted: false
}

export const LoginReducer = (state = initialState, action: any) => {
    console.log('LoginReducer = ',action.type);
    switch (action.type) {
        case "LOGIN_ERROR":
            console.log('loginerror');
            return { ...state, loginCompleted: false }
        case "LOGIN_SUCCESS":
            return { ...state, loginCompleted: true }
        default:
            return state
    }
}