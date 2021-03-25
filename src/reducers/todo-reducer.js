import React from 'react'

import {todoAPI} from "../DAL/api";

const TOGGLE_IS_PATCHING = 'TOGGLE_IS_PATCHING'
const CHANGE_TODO_LIST = 'CHANGE_TODO_LIST'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const GET_TODO_LISTS = 'GET_TODO_LISTS'
const SET_TODO_LIST = 'SET_TODO_LIST'
const SET_PAGE_SIZE = 'SET_PAGE_SIZE'

const initialState = {
    patchingInProgress: [],
    toDoLists: null,
    currentPage: 0,
    pageSize: 50,
}

const todoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TODO_LISTS:
            return {...state, toDoLists: action.todoLists}
        case CHANGE_TODO_LIST:
            return {...state, toDoLists: [...action.payload.filter(t => t.completed === action.set)]}
        case SET_PAGE_SIZE:
            return {...state, pageSize: action.pageSize}
        case SET_CURRENT_PAGE:
            let currentPageOrginal = action.currentPage - 1
            return {...state, currentPage: currentPageOrginal}
        case SET_TODO_LIST:
            return {
                ...state, toDoLists: state.toDoLists.map(t => {
                        if (t["id"] === action.payload.id) {
                            return {...action.payload}
                        }
                        return t
                    }
                )
            }
        case TOGGLE_IS_PATCHING:
            return {
                ...state,
                patchingInProgress: action.isPatching
                    ? [...state.patchingInProgress, action.id]
                    : [...state.patchingInProgress.filter(id => id !== action.id)]
            }

        default:return state
    }
    return state;
};

//action creators start
const setCurrentPageSuccess = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
const changeToDolistSuccess = (payload, set) => ({type: CHANGE_TODO_LIST, payload, set})
const getTodoListSuccess = (todoLists) => ({type: GET_TODO_LISTS, todoLists})
const setPageSizeSuccess = (pageSize) => ({type: SET_PAGE_SIZE, pageSize})
const setToDoList = (payload) => ({type: SET_TODO_LIST, payload})
export const togglePatchingProgress = (isPatching, id) => {
    return {type: TOGGLE_IS_PATCHING, isPatching, id}
}
//action creators end

//thunk start
export const getToDoLists = () => async dispatch => {
    const response = await todoAPI.getTodoLists()
    dispatch(getTodoListSuccess(response.data))
}

export const updateToDo = (id, toDo) => async dispatch => {
    dispatch(togglePatchingProgress(true, id));
    const response = await todoAPI.updateTodoList(id, toDo)
    if (response.status === 200) {
        dispatch(setToDoList(response.data))
        dispatch(togglePatchingProgress(false, id));
    }
}

export const setTodoListFilter = (set) => async dispatch => {
    const response = await todoAPI.getTodoLists()
    dispatch(changeToDolistSuccess(response.data, set));
}

export const updatePageSize = (pageSize) => dispatch => {
    dispatch(setPageSizeSuccess(pageSize));
}

export const updateCurrentPage = (currentPage) => dispatch => {
    dispatch(setCurrentPageSuccess(currentPage));
}
//thunk end

export default todoListReducer;