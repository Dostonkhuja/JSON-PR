import {postsAPI, usersAPI} from "../DAL/api";
import {updateObjectArray} from "../utils/object-helpers/object-helpers";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const GET_POSTS = 'GET_POSTS'
const ADD_FOLLOWED = 'ADD_FOLLOWED'
const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

const initialState = {
    users: null,
    posts:null,
    followingInProgress:[]
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS_SUCCESS:
            return {...state, users: action.users}
        case ADD_FOLLOWED:
            if(state.users.length >= 10){
                return {...state, users:[...state.users.map(u=>{return {...u,...action.followed}})]}
            }
        case FOLLOW:
            return {
                ...state,
                users:  updateObjectArray(state.users,action.userId,"id",{followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users:updateObjectArray(state.users,action.userId,"id",{followed: false})
            }
        case GET_POSTS:
            return {...state, posts: action.posts}
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : [...state.followingInProgress.filter(id => id != action.userId)]
            }
        default: return state
    }
    return state;
};

//action creators start
export const followSuccess = (userId) => {
    return {type: FOLLOW, userId}
}
export const unfollowSuccess = (userId) => {
    return {type: UNFOLLOW, userId}
}
const addFollowed = (followed) => ({type: ADD_FOLLOWED, followed})
const getUsersSuccess = (users) => ({type: GET_USERS_SUCCESS, users})
const getPostsSuccess = (posts) => ({type: GET_POSTS, posts})
export const toggleFollowingProgress = (isFetching, userId) => {
    return {type: TOGGLE_IS_FETCHING, isFetching, userId}
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