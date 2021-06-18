import {AppStateType} from "../state-managment/redux-store";

export const getProfileRs=(state:AppStateType)=>{
    return state.profilePage.profile
}

export const getProfilePostsRs=(state:AppStateType)=>{
    return state.profilePage.posts
}

export const getProfileSignInRs=(state:AppStateType)=>{
    return state.auth.signIn
}

export const getUserPhotoRs=(state:AppStateType)=>{
    return state.auth.userPhoto
}

export const getProfileCommentsRs=(state:AppStateType)=>{
    return state.profilePage.comments
}

export const getMyPostRs=(state:AppStateType)=>{
    return state.auth.myPost
}