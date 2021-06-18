import {AppStateType} from "../state-managment/redux-store";

export const getPatchingInProgressRs=(state:AppStateType)=>{
    return state.toDoListsPage.patchingInProgress
}

export const getTodoListsCurrentPageRs=(state:AppStateType)=>{
    return state.toDoListsPage.currentPage
}

export const getTodoListsRs=(state:AppStateType)=>{
    return state.toDoListsPage.toDoLists
}

export const getTodoListsPageSizeRs=(state:AppStateType)=>{
    return state.toDoListsPage.pageSize
}
