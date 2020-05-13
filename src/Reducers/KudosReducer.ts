import { asyncReducer } from '../Middleware/index';

const initialState = {
    kudosData: [],
    tweetRemoved: false,
    tweetUpdated: false,
}

export const KudosReducer = (state = initialState, action: any) => {
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
                tweetRemoved: true
            }
            break;
        case "UPDATE_JSON_DATA":
            return {
                ...state,
                tweetUpdated: true
            }
            break;
        case "JSON_DATA":
            return {
                ...state,
                kudosData: action.payload,
                tweetUpdated: false,
                tweetRemoved: false,
            }
            break;
        default:
            return {
                ...state,
                kudosData: state.kudosData
            }
    }
}