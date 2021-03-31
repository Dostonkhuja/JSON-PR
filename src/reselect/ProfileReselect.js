export const getProfileRs=(state)=>{
    return state.profilePage.profile
}

export const getProfilePostsRs=(state)=>{
    return state.profilePage.posts
}

export const getProfileSignInRs=(state)=>{
    return state.auth.signIn
}

export const getUserPhotoRs=(state)=>{
    return state.auth.userPhoto
}

export const getProfileCommentsRs=(state)=>{
    return state.profilePage.comments
}

export const getMyPostRs=(state)=>{
    return state.auth.myPost
}