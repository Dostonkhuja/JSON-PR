import {profileAPI} from "../DAL/api";
import {BaseThunkType, InferActionsTypes} from "../state-managment/redux-store";
import {FormAction} from "redux-form";
import {CommentsType, PostType, UserType} from "../types/types";

const initialState = {
    profile: null as UserType | null,
    posts: null as Array<PostType> | null,
    comments: [] as Array<CommentsType>
}

const profileReducer = (state = initialState, action:ActionsTypes):InitialStateType => {
    switch (action.type) {
        case 'PROFILE_GET_PROFILE':
            return {...state, profile: action.profile}
        case 'PROFILE_GET_POSTS':
            return {...state, posts: action.posts}
        case 'PROFILE_GET_COMMENTS':
            return {...state, comments: [...state.comments, ...action.comments]}
        case 'PROFILE_UPDATE_COMMENTS':
            return {...state, comments: []}
        default:return state
    }
    return state;
};

//action creators start
const actions = {
     getCommentsSuccess : (comments:Array<CommentsType>) => ({type: 'PROFILE_GET_COMMENTS', comments} as const),
     getProfileSuccess : (profile:UserType) => ({type: 'PROFILE_GET_PROFILE', profile}as const),
     getPostsSuccess : (posts:Array<PostType>) => ({type: 'PROFILE_GET_POSTS', posts}as const),
     updateComments : () => ({type: 'PROFILE_UPDATE_COMMENTS'} as const)
}
//action creators end

//thunk start
export const getProfile = (userId:number):ThunkType => async dispatch => {
    const response = await profileAPI.getProfile(userId)
    if(response.status === 200) {
        dispatch(actions.getProfileSuccess(response.data))
    }
}
export const getPosts = (userId:number):ThunkType => async dispatch => {
    const response = await profileAPI.getPosts(userId)
    dispatch(actions.getPostsSuccess(response.data))
}
export const getComments = (postId:number):ThunkType => async dispatch => {
    dispatch(actions.updateComments())
    const response = await profileAPI.getComments(postId)
    dispatch(actions.getCommentsSuccess(response.data))
}
// thunk end

export default profileReducer;

type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes|FormAction>