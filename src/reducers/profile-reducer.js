import React from 'react'
import {profileAPI} from "../DAL/api";

const GET_PROFILE = 'GET_PROFILE'
const GET_POSTS = 'GET_POSTS'
const GET_COMMENTS = 'GET_COMMENTS'
const UPDATE_COMMENTS = 'UPDATE_COMMENTS'

const initialState = {
    profile: null,
    posts: null,
    comments: []
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PROFILE:
            return {...state, profile: action.profile}
        case GET_POSTS:
            return {...state, posts: action.posts}
        case GET_COMMENTS:
            return {...state, comments: [...state.comments, ...action.comments]}
        case UPDATE_COMMENTS:
            return {...state, comments: []}
        default:return state
    }
    return state;
};

//action creators start
const getCommentsSuccess = (comments) => ({type: GET_COMMENTS, comments})
const getProfileSuccess = (profile) => ({type: GET_PROFILE, profile})
const getPostsSuccess = (posts) => ({type: GET_POSTS, posts})
const updateComments = () => ({type: UPDATE_COMMENTS})
//action creators end

//thunk start
export const getProfile = (userId) => async dispatch => {
    const response = await profileAPI.getProfile(userId)
    dispatch(getProfileSuccess(response.data))
}
export const getPosts = (userId) => async dispatch => {
    const response = await profileAPI.getPosts(userId)
    dispatch(getPostsSuccess(response.data))
}
export const getComments = (postId) => async dispatch => {
    dispatch(updateComments())
    const response = await profileAPI.getComments(postId)
    dispatch(getCommentsSuccess(response.data))
}
// thunk end

export default profileReducer;