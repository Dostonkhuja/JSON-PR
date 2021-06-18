import {authAPI, profileAPI} from "../DAL/api";
import {FormAction, reset} from "redux-form";
import {BaseThunkType, InferActionsTypes} from "../state-managment/redux-store";
import {Postype, UserType} from "../types/types";

const initialState = {
    signIn: null as null | UserType,
    isAuth: false,
    userPhoto:null as null | string,
    myPost:'' as any
}

const authReducer = (state = initialState, action:ActionsTypes):InitialStateType => {
    switch (action.type) {
        case 'AUTH_SIGN_IN':
            return {...state, signIn: action.signInPayload, isAuth: true}
        case 'AUTH_LOG_OUT':
            return {...state, signIn: null, isAuth: false}
            case 'AUTH_SET_MY_PROFILE':
            return {...state, signIn: action.payload, isAuth: true}
            case 'AUTH_SET_USER_PHOTO':
            return {...state, userPhoto: URL.createObjectURL(action.userPhoto)}
        case 'AUTH_ADD_NEW_POST':
            return {...state, myPost:[...state.myPost,action.post.newPost]}
        default:return state
    }
    return state;
};

//action creators start
const actions = {
     signInSuccess : (signInPayload:UserType) => ({type: 'AUTH_SIGN_IN', signInPayload} as const),
     setMyProfileSuccess : (payload:UserType) => ({type: 'AUTH_SET_MY_PROFILE', payload}as const),
     setUserPhoto : (userPhoto:File) => ({type: 'AUTH_SET_USER_PHOTO', userPhoto}as const),
     addNewPostSuccess : (post:Postype) => ({type: 'AUTH_ADD_NEW_POST', post}as const),
     logoutSuccess : () => ({type: 'AUTH_LOG_OUT'}as const)
}
//action creators end

//thunk start
export const signInRequest = (username:string, password:string, remember:boolean):ThunkType => async dispatch => {
    const response = await authAPI.signInRequest(username, password, remember)
    if (response.status === 201) {
        dispatch(actions.signInSuccess(response.data))
    }
}

export const setMyProfile = (formData:any):ThunkType => async dispatch => {
    const response = await authAPI.setMyProfile(formData)
    if (response.status === 201) {
        dispatch(actions.setMyProfileSuccess(response.data))
    }
}

export const savePhoto = (UserPhoto:File):ThunkType => async dispatch => {
    dispatch(actions.setUserPhoto(UserPhoto))
}

export const logout = (userId:number):ThunkType => async dispatch => {
    const response = await authAPI.logout(userId)
    if (response.status === 200) {
        dispatch(actions.logoutSuccess())
    }
}

export const addNewPost = (newPost:string):ThunkType => async dispatch => {
    const response = await profileAPI.addNewPost(newPost)
    if (response.status===201) {
        dispatch(actions.addNewPostSuccess(response.data))
        dispatch(reset('myPost'));
    }
}
//thunk end

export default authReducer;

type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes | FormAction>