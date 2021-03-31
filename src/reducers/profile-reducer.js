import {profileAPI} from "../DAL/api";

const PROFILE_GET_PROFILE = 'PROFILE_GET_PROFILE'
const PROFILE_GET_POSTS = 'PROFILE_GET_POSTS'
const PROFILE_GET_COMMENTS = 'PROFILE_GET_COMMENTS'
const PROFILE_UPDATE_COMMENTS = 'PROFILE_UPDATE_COMMENTS'

const initialState = {
    profile: null,
    posts: null,
    comments: []
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_GET_PROFILE:
            return {...state, profile: action.profile}
        case PROFILE_GET_POSTS:
            return {...state, posts: action.posts}
        case PROFILE_GET_COMMENTS:
            return {...state, comments: [...state.comments, ...action.comments]}
        case PROFILE_UPDATE_COMMENTS:
            return {...state, comments: []}
        default:return state
    }
    return state;
};

//action creators start
const getCommentsSuccess = (comments) => ({type: PROFILE_GET_COMMENTS, comments})
const getProfileSuccess = (profile) => ({type: PROFILE_GET_PROFILE, profile})
const getPostsSuccess = (posts) => ({type: PROFILE_GET_POSTS, posts})
const updateComments = () => ({type: PROFILE_UPDATE_COMMENTS})
//action creators end

//thunk start
export const getProfile = (userId) => async dispatch => {
    const response = await profileAPI.getProfile(userId)
    if(response.status === 200) {
        dispatch(getProfileSuccess(response.data))
    }
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