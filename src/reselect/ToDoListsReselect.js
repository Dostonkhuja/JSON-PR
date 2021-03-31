export const getPatchingInProgressRs=(state)=>{
    return state.toDoListsPage.patchingInProgress
}

export const getTodoListsCurrentPageRs=(state)=>{
    return state.toDoListsPage.currentPage
}

export const getTodoListsRs=(state)=>{
    return state.toDoListsPage.toDoLists
}

export const getTodoListsPageSizeRs=(state)=>{
    return state.toDoListsPage.pageSize
}
