import {AppStateType} from "../state-managment/redux-store";

export const getCommentsRs=(state:AppStateType)=>{
    return state.commentsPage.comments
}

export const getCommentsPageSizeRs=(state:AppStateType)=>{
    return state.commentsPage.pageSize
}

export const getCommentsCurrentPageRs=(state:AppStateType)=>{
    return state.commentsPage.currentPage
}