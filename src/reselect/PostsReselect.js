export const getPostsRs=(state)=>{
    return state.postsPage.posts
}

export const getPostsPageSizeRs=(state)=>{
    return state.postsPage.pageSize
}

export const getPostsCurrentPageRs=(state)=>{
    return state.postsPage.currentPage
}