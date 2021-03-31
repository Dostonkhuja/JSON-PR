export const getUserMessagesRs=(state)=>{
    return state.dialogsPage.userMessages
}

export const getCurrentUserRs=(state)=>{
    return state.dialogsPage.currentUser
}

export const getOwnerRs=(state)=>{
    return state.auth.signIn
}