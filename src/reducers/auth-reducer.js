import {authAPI, profileAPI} from "../DAL/api";
import {reset} from "redux-form";

const SIGN_IN = 'SIGN_IN'
const LOG_OUT = 'LOG_OUT'
const SET_MY_PROFILE = 'SET_MY_PROFILE'
const SET_USER_PHOTO = 'SET_USER_PHOTO'
const ADD_NEW_POST = 'ADD_NEW_POST'

const initialState = {
    signIn: null,
    isAuth: false,
    userPhoto:null,
    myPost:''
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {...state, signIn: action.signInPayload, isAuth: true}
        case LOG_OUT:
            return {...state, signIn: null, isAuth: false}
            case SET_MY_PROFILE:
            return {...state, signIn: action.payload, isAuth: true}
            case SET_USER_PHOTO:
            return {...state, userPhoto: URL.createObjectURL(action.userPhoto)}
        case ADD_NEW_POST:
            return {...state, myPost:[...state.myPost,action.post.newPost]}
        default:
            return state
    }
    return state;
};

//action creators start
const signInSuccess = (signInPayload) => ({type: SIGN_IN, signInPayload})
const setMyProfileSuccess = (payload) => ({type: SET_MY_PROFILE, payload})
const logoutSuccess = () => ({type: LOG_OUT})
const setUserPhoto = (userPhoto) => ({type: SET_USER_PHOTO,userPhoto})
const addNewPostSuccess = (post) => ({type: ADD_NEW_POST, post})
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
    // const response = await authAPI.savePhoto(UserPhoto)
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