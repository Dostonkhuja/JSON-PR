import {AppStateType} from "../state-managment/redux-store";

export const getUsersRs=(state:AppStateType)=>{
    return state.usersPage.users
}

export const getUsersPostsRs=(state:AppStateType)=>{
    return state.usersPage.posts
}

export const getFollowingInProgressRs=(state:AppStateType)=>{
    return state.usersPage.followingInProgress
}

export const getUsersSignInRs=(state:AppStateType)=>{
    return state.auth.signIn
}
