import {authAPI, profileAPI} from "../DAL/api";
import {reset} from "redux-form";

const AUTH_SIGN_IN = 'AUTH_SIGN_IN'
const AUTH_LOG_OUT = 'AUTH_LOG_OUT'
const AUTH_ADD_NEW_POST = 'AUTH_ADD_NEW_POST'
const AUTH_SET_MY_PROFILE = 'AUTH_SET_MY_PROFILE'
const AUTH_SET_USER_PHOTO = 'AUTH_SET_USER_PHOTO'

const initialState = {
    signIn: null,
    isAuth: false,
    userPhoto:null,
    myPost:''
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_SIGN_IN:
            return {...state, signIn: action.signInPayload, isAuth: true}
        case AUTH_LOG_OUT:
            return {...state, signIn: null, isAuth: false}
            case AUTH_SET_MY_PROFILE:
            return {...state, signIn: action.payload, isAuth: true}
            case AUTH_SET_USER_PHOTO:
            return {...state, userPhoto: URL.createObjectURL(action.userPhoto)}
        case AUTH_ADD_NEW_POST:
            return {...state, myPost:[...state.myPost,action.post.newPost]}
        default:return state
    }
    return state;
};

//action creators start
const signInSuccess = (signInPayload) => ({type: AUTH_SIGN_IN, signInPayload})
const setMyProfileSuccess = (payload) => ({type: AUTH_SET_MY_PROFILE, payload})
const setUserPhoto = (userPhoto) => ({type: AUTH_SET_USER_PHOTO,userPhoto})
const addNewPostSuccess = (post) => ({type: AUTH_ADD_NEW_POST, post})
const logoutSuccess = () => ({type: AUTH_LOG_OUT})
//action creators end

//thunk start
export const signInRequest = (username, password, remember) => async dispatch => {
    const response = await authAPI.signInRequest(username, password, remember)
    if (response.status === 201) {
        dispatch(signInSuccess(response.data))
    }
}

export const setMyProfile = (formData) => async dispatch => {
    const response = await authAPI.setMyProfile(formData)
    if (response.status === 201) {
        dispatch(setMyProfileSuccess(response.data))
    }
}

export const savePhoto = (UserPhoto) => dispatch => {
    dispatch(setUserPhoto(UserPhoto))
}

export const logout = (userId) => async dispatch => {
    const response = await authAPI.logout(userId)
    if (response.status === 200) {
        dispatch(logoutSuccess())
    }
}

export const addNewPost = (newPost) => async dispatch => {
    const response = await profileAPI.addNewPost(newPost)
    if (response.status===201) {
        dispatch(addNewPostSuccess(response.data))
        dispatch(reset('myPost'));
    }
}
//thunk end

export default authReducer;