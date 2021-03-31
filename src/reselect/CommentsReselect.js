export const getCommentsRs=(state)=>{
    return state.commentsPage.comments
}

export const getCommentsPageSizeRs=(state)=>{
    return state.commentsPage.pageSize
}

export const getCommentsCurrentPageRs=(state)=>{
    return state.commentsPage.currentPage
}