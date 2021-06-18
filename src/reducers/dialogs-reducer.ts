import {dialogsAPI} from "../DAL/api";
import {FormAction, reset} from "redux-form";
import {BaseThunkType, InferActionsTypes} from "../state-managment/redux-store";
import {UserType} from "../types/types";

const initialState = {
    userMessages: [] as Array<UserType>,
    currentUser: [] as any
}

const dialogsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'DIALOGS_GET_USER_MESSAGES':
            return {
                ...state,
                userMessages: [action.userMessages, ...state.userMessages.filter((us:UserType) => {
                    return us.id !== action.userMessages.id
                })]
            }
        case 'DIALOGS_CURRENT_USER':
            return {
                ...state, currentUser: [
                    {userId: action.userId}, {userName: action.userName},
                    {
                        messages: {
                            ...state.userMessages
                                .filter( (um:UserType) => um.id === action.userId)
                                .map((um:UserType) => {
                                    return um.messages.map((m:string) => {
                                        return m
                                    })
                                })
                        }
                    }
                ]
            }
        case 'DIALOGS_SET_MESSAGE':
            return {
                ...state, userMessages: [...state.userMessages.map((u:UserType) => {
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
const actions = {
    currentUserSuccess: (userId: number, userName: string) => {
        return {type: 'DIALOGS_CURRENT_USER', userId, userName} as const
    },
    setMessagesSuccess: (userId: number, messages: string) => {
        return {type: 'DIALOGS_SET_MESSAGE', userId, messages} as const
    },
    getUserMessagesSuccess: (userMessages: UserType) => {
        return {type: 'DIALOGS_GET_USER_MESSAGES', userMessages} as const
    }
}
//action creators end

//thunk start
export const getUserMessages = (userId: number): ThunkType => async dispatch => {
    if (userId !== undefined) {
        const response = await dialogsAPI.getUserMessages(userId)
        if (response.status === 200) {
            dispatch(actions.getUserMessagesSuccess(response.data))
        }
    }
}
export const sendMessage = (userId: number, messages: string): ThunkType => async (dispatch) => {
    const response = await dialogsAPI.sendMessage(userId, messages)
    if (response.status === 200) {
        debugger
        dispatch(actions.setMessagesSuccess(response.data.id, response.data.messages))
        dispatch(actions.currentUserSuccess(response.data.id, response.data.username))
        dispatch(reset('messages'));
    }
}
export const getCurrentUser = (userId: number, userName: string): ThunkType => async dispatch => {
    dispatch(actions.currentUserSuccess(userId, userName))
}

//thunk end

export default dialogsReducer;

type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes | FormAction>