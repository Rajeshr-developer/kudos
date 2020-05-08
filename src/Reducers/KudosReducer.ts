const initialState = {
    kudosData: []
}

export const KudosReducer = (state = initialState, action: any) => {
    console.log(state,action);
    switch (action.type) {
        case "ADD_JSON_DATA":
            return {
                ...state,
                kudosData: [action.payload, ...state.kudosData]
            }
            break;
        case "REMOVE_JSON_DATA":
            return {
                ...state,
                kudosData: [...state.kudosData, action.payload]
            }
            break;
        case "JSON_DATA":
            return {
                ...state,
                kudosData: action.payload
            }
            break;
        default:
            console.log('default..!');
            return {
                ...state,
                kudosData: state.kudosData
            }
    }
}