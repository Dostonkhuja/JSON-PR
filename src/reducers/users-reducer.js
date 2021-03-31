import {postsAPI, usersAPI} from "../DAL/api";
import {updateObjectArray} from "../utils/object-helpers/object-helpers";

const USERS_FOLLOW = 'USERS_FOLLOW'
const USERS_UNFOLLOW = 'USERS_UNFOLLOW'
const USERS_GET_POSTS = 'USERS_GET_POSTS'
const USERS_ADD_FOLLOWED = 'USERS_ADD_FOLLOWED'
const USERS_GET_USERS_SUCCESS = 'USERS_GET_USERS_SUCCESS'
const USERS_TOGGLE_IS_FETCHING = 'USERS_TOGGLE_IS_FETCHING'

const initialState = {
    users: null,
    posts:null,
    followingInProgress:[]
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USERS_GET_USERS_SUCCESS:
            return {...state, users: action.users}
        case USERS_ADD_FOLLOWED:
            if(state.users.length >= 10){
                return {...state, users:[...state.users.map(u=>{return {...u,...action.followed}})]}
            }
        case USERS_FOLLOW:
            return {
                ...state,
                users:  updateObjectArray(state.users,action.userId,"id",{followed: true})
            }
        case USERS_UNFOLLOW:
            return {
                ...state,
                users:updateObjectArray(state.users,action.userId,"id",{followed: false})
            }
        case USERS_GET_POSTS:
            return {...state, posts: action.posts}
        case USERS_TOGGLE_IS_FETCHING:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : [...state.followingInProgress.filter(id => id !== action.userId)]
            }
        default: return state
    }
    return state;
};

//action creators start
export const followSuccess = (userId) => {
    return {type: USERS_FOLLOW, userId}
}
export const unfollowSuccess = (userId) => {
    return {type: USERS_UNFOLLOW, userId}
}
const addFollowed = (followed) => ({type: USERS_ADD_FOLLOWED, followed})
const getUsersSuccess = (users) => ({type: USERS_GET_USERS_SUCCESS, users})
const getPostsSuccess = (posts) => ({type: USERS_GET_POSTS, posts})
export const toggleFollowingProgress = (isFetching, userId) => {
    return {type: USERS_TOGGLE_IS_FETCHING, isFetching, userId}
}
//action creators end

//thunk start
export const getUsers = () => async dispatch => {
    const response = await usersAPI.getUsers()
    dispatch(getUsersSuccess(response.data))
    dispatch(addFollowed({followed: false}))
}

export const getPosts = () => async dispatch => {
    const response = await postsAPI.getPosts()
    dispatch(getPostsSuccess(response.data))
}

const followUnfollowFlow = async (dispatch, userId,apiMethod,actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId));
    let response = await apiMethod(userId);
    if (response.status === 200) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId) => async dispatch => {
    followUnfollowFlow(dispatch,userId,usersAPI.followPost.bind(userId),followSuccess)
}

export const unfollow = (userId) => async dispatch => {
    followUnfollowFlow(dispatch,userId,usersAPI.unfollowDelete.bind(userId),unfollowSuccess)
}
//thunk end

export default userReducer;