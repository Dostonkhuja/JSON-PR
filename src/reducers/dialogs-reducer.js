import {dialogsAPI} from "../DAL/api";
import {reset} from "redux-form";

const DIALOGS_GET_USER_MESSAGES = 'DIALOGS_GET_USER_MESSAGES'
const DIALOGS_CURRENT_USER = 'DIALOGS_CURRENT_USER'
const DIALOGS_SET_MESSAGE = 'DIALOGS_SET_MESSAGE'

const initialState = {
    userMessages: [],
    currentUser: []
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case DIALOGS_GET_USER_MESSAGES:
            return {
                ...state,
                userMessages: [action.userMessages, ...state.userMessages.filter(us => {
                    return us.id !== action.userMessages.id
                })]
            }
        case DIALOGS_CURRENT_USER:
            return {
                ...state, currentUser: [
                    {userId: action.userId}, {userName: action.userName},
                    {messages: {...state.userMessages
                                .filter(um=>um.id === action.userId)
                                .map(um => {return um.messages.map(m => {return m})} )
                        }}]
            }
        case DIALOGS_SET_MESSAGE:
            return {
                ...state, userMessages: [...state.userMessages.map(u => {
                    if (u.id === action.userId) {
                        return {...u, messages: [...u.messages, action.messages]}
                    }
                    return u
                })],
            }
        default:
            return state
    }
    return state;
};

//action creators start
export const currentUserSuccess = (userId, userName) => {
    return {type: DIALOGS_CURRENT_USER, userId, userName}
}
export const setMessagesSuccess = (userId, messages) => {
    return {type: DIALOGS_SET_MESSAGE, userId, messages}
}
export const getUserMessagesSuccess = (userMessages) => {
    return {type: DIALOGS_GET_USER_MESSAGES, userMessages}
}
//action creators end

//thunk start
export const getUserMessages = (userId) => async dispatch => {
    if(userId !== undefined) {
        const response = await dialogsAPI.getUserMessages(userId)
        if (response.status === 200) {
            dispatch(getUserMessagesSuccess(response.data))
        }
    }
}
export const sendMessage = (userId, messages) => async dispatch => {
    const response = await dialogsAPI.sendMessage(userId, messages)
    if (response.status === 200) {
        dispatch(setMessagesSuccess(response.data.id, response.data.messages))
        dispatch(currentUserSuccess(response.data.id, response.data.username))
        dispatch(reset('messages'));
    }
}
export const getCurrentUser = (userId, userName) => dispatch => {
    dispatch(currentUserSuccess(userId, userName))
}

//thunk end

export default dialogsReducer;