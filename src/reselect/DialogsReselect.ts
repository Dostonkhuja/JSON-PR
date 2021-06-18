import {AppStateType} from "../state-managment/redux-store";

export const getUserMessagesRs=(state:AppStateType)=>{
    return state.dialogsPage.userMessages
}

export const getCurrentUserRs=(state:AppStateType)=>{
    return state.dialogsPage.currentUser
}

export const getOwnerRs=(state:AppStateType)=>{
    return state.auth.signIn
}