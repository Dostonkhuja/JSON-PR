import {todoAPI} from "../DAL/api";

const TODO_TOGGLE_IS_PATCHING = 'TODO_TOGGLE_IS_PATCHING'
const TODO_CHANGE_TODO_LIST = 'TODO_CHANGE_TODO_LIST'
const TODO_SET_CURRENT_PAGE = 'TODO_SET_CURRENT_PAGE'
const TODO_GET_TODO_LISTS = 'TODO_GET_TODO_LISTS'
const TODO_SET_TODO_LIST = 'TODO_SET_TODO_LIST'
const TODO_SET_PAGE_SIZE = 'TODO_SET_PAGE_SIZE'

const initialState = {
    patchingInProgress: [],
    toDoLists: null,
    currentPage: 0,
    pageSize: 50,
}

const todoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case TODO_GET_TODO_LISTS:
            return {...state, toDoLists: action.todoLists}
        case TODO_CHANGE_TODO_LIST:
            return {...state, toDoLists: [...action.payload.filter(t => t.completed === action.set)]}
        case TODO_SET_PAGE_SIZE:
            return {...state, pageSize: action.pageSize}
        case TODO_SET_CURRENT_PAGE:
            let currentPageOrginal = action.currentPage - 1
            return {...state, currentPage: currentPageOrginal}
        case TODO_SET_TODO_LIST:
            return {
                ...state, toDoLists: state.toDoLists.map(t => {
                        if (t["id"] === action.payload.id) {
                            return {...action.payload}
                        }
                        return t
                    }
                )
            }
        case TODO_TOGGLE_IS_PATCHING:
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
const setCurrentPageSuccess = (currentPage) => ({type: TODO_SET_CURRENT_PAGE, currentPage})
const changeToDolistSuccess = (payload, set) => ({type: TODO_CHANGE_TODO_LIST, payload, set})
const getTodoListSuccess = (todoLists) => ({type: TODO_GET_TODO_LISTS, todoLists})
const setPageSizeSuccess = (pageSize) => ({type: TODO_SET_PAGE_SIZE, pageSize})
const setToDoList = (payload) => ({type: TODO_SET_TODO_LIST, payload})
export const togglePatchingProgress = (isPatching, id) => {
    return {type: TODO_TOGGLE_IS_PATCHING, isPatching, id}
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