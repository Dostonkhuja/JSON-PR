export const getUsersRs=(state)=>{
    return state.usersPage.users
}

export const getUsersPostsRs=(state)=>{
    return state.usersPage.posts
}

export const getFollowingInProgressRs=(state)=>{
    return state.usersPage.followingInProgress
}

export const getUsersSignInRs=(state)=>{
    return state.auth.signIn
}
