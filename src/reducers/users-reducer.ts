import {postsAPI, usersAPI} from "../DAL/api";
import {updateObjectArray} from "../utils/object-helpers/object-helpers";
import {BaseThunkType, InferActionsTypes} from "../state-managment/redux-store";
import {FormAction} from "redux-form";
import {Postype, UserType} from "../types/types";
import {Dispatch} from "redux";

const initialState = {
    users: [] as Array<UserType>,
    posts:null as Array<Postype> | null,
    followingInProgress:[] as Array<number>
}

const userReducer = (state = initialState, action:ActionsTypes):InitialStateType => {
    switch (action.type) {
        case 'USERS_GET_USERS_SUCCESS':
            return {...state, users: action.users}
        case 'USERS_ADD_FOLLOWED':
            if(state.users.length >= 10){
                return {...state, users:[...state.users.map(u=>{return {...u,...action.followed}})]}
            }
            return state
        case 'USERS_FOLLOW':
            return {
                ...state,
                users:  updateObjectArray(state.users,action.userId,"id",{followed: true})
            }
        case 'USERS_UNFOLLOW':
            return {
                ...state,
                users:updateObjectArray(state.users,action.userId,"id",{followed: false})
            }
        case 'USERS_GET_POSTS':
            return {...state, posts: action.posts}
        case 'USERS_TOGGLE_IS_FETCHING':
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
const actions = {
      followSuccess : (userId:number) => {
        return {type: 'USERS_FOLLOW', userId} as const
    },
      unfollowSuccess : (userId:number) => {
        return {type: 'USERS_UNFOLLOW', userId} as const
    },
     addFollowed : (followed:{followed:boolean}) => ({type: 'USERS_ADD_FOLLOWED', followed} as const),
     getUsersSuccess : (users:Array<UserType>) => ({type: 'USERS_GET_USERS_SUCCESS', users} as const ),
     getPostsSuccess : (posts:Array<Postype>) => ({type: 'USERS_GET_POSTS', posts} as const ),
      toggleFollowingProgress : (isFetching:boolean, userId:number) => {
        return {type: 'USERS_TOGGLE_IS_FETCHING', isFetching, userId} as const
    },
}
//action creators end

//thunk start
export const getUsers = ():ThunkType => async (dispatch) => {
    const response = await usersAPI.getUsers()
    dispatch(actions.getUsersSuccess(response.data))
    dispatch(actions.addFollowed({followed: false}))
}

export const getPosts = ():ThunkType => async (dispatch) => {
    const response = await postsAPI.getPosts()
    dispatch(actions.getPostsSuccess(response.data))
}

const _followUnfollowFlow = async (dispatch:Dispatch, userId:any,apiMethod:any,actionCreator:(userId:number)=> ActionsTypes) => {
    dispatch(actions.toggleFollowingProgress(true, userId));
    let response = await apiMethod(userId);
    if (response.status === 200) {
        dispatch(actionCreator(userId));
    }
    dispatch(actions.toggleFollowingProgress(false, userId));
}

export const follow = (userId:number):ThunkType => async dispatch => {
    _followUnfollowFlow(dispatch,userId,usersAPI.followPost.bind(userId),actions.followSuccess)
}

export const unfollow = (userId:number):ThunkType => async dispatch => {
    _followUnfollowFlow(dispatch,userId,usersAPI.unfollowDelete.bind(userId),actions.unfollowSuccess)
}
//thunk end

export default userReducer;

type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
    type ThunkType = BaseThunkType<ActionsTypes|FormAction>