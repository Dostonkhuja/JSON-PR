import {AppStateType} from "../state-managment/redux-store";

export const getPostsRs=(state:AppStateType)=>{
    return state.postsPage.posts
}

export const getPostsPageSizeRs=(state:AppStateType)=>{
    return state.postsPage.pageSize
}

export const getPostsCurrentPageRs=(state:AppStateType)=>{
    return state.postsPage.currentPage
}