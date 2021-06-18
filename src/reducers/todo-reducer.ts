import {todoAPI} from "../DAL/api";
import {BaseThunkType, InferActionsTypes} from "../state-managment/redux-store";
import {FormAction} from "redux-form";
import {TodoType} from "../types/types";

const initialState = {
    patchingInProgress: [] as Array<number>,
    toDoLists: [] as Array<TodoType>,
    currentPage: 0,
    pageSize: 50,
}

const todoListReducer = (state = initialState, action:ActionsTypes):InitialStateType => {
    switch (action.type) {
        case 'TODO_GET_TODO_LISTS':
            return {...state, toDoLists: action.todoLists}
        case 'TODO_CHANGE_TODO_LIST':
            return {...state, toDoLists: [...action.payload.filter((t:TodoType) => t.completed === action.set)]}
        case 'TODO_SET_PAGE_SIZE':
            return {...state, pageSize: action.pageSize}
        case 'TODO_SET_CURRENT_PAGE':
            let currentPageOrginal = action.currentPage - 1
            return {...state, currentPage: currentPageOrginal}
        case 'TODO_SET_TODO_LIST':
            return {
                ...state, toDoLists: state.toDoLists.map((t:TodoType) => {
                        if (t["id"] === action.payload.id) {
                            return {...action.payload}
                        }
                        return t
                    }
                )
            }
        case 'TODO_TOGGLE_IS_PATCHING':
            return {
                ...state,
                patchingInProgress: action.isPatching
                    ? [...state.patchingInProgress, action.id]
                    : [...state.patchingInProgress.filter((id:number) => id !== action.id)]
            }
        default:return state
    }
    return state;
};


//action creators start
const actions = {
     changeToDolistSuccess : (payload:Array<TodoType>, set:boolean) => ({type: 'TODO_CHANGE_TODO_LIST', payload, set} as const),
     setCurrentPageSuccess : (currentPage:number) => ({type: 'TODO_SET_CURRENT_PAGE', currentPage} as const),
     getTodoListSuccess : (todoLists:Array<TodoType>) => ({type: 'TODO_GET_TODO_LISTS', todoLists} as const),
     setPageSizeSuccess : (pageSize:number) => ({type: 'TODO_SET_PAGE_SIZE', pageSize} as const),
     setToDoList : (payload:TodoType) => ({type: 'TODO_SET_TODO_LIST', payload} as const),
    togglePatchingProgress : (isPatching:boolean, id:number) => {return {type: 'TODO_TOGGLE_IS_PATCHING', isPatching, id} as const}
}
//action creators end

//thunk start
export const getToDoLists = ():ThunkType => async dispatch => {
    const response = await todoAPI.getTodoLists()
    dispatch(actions.getTodoListSuccess(response.data))
}

export const updateToDo = (id:number, toDo:TodoType):ThunkType => async dispatch => {
    dispatch(actions.togglePatchingProgress(true, id));
    const response = await todoAPI.updateTodoList(id, toDo)
    if (response.status === 200) {
        dispatch(actions.setToDoList(response.data))
        dispatch(actions.togglePatchingProgress(false, id));
    }
}

export const setTodoListFilter = (set:boolean):ThunkType => async (dispatch) => {
    const response = await todoAPI.getTodoLists()
    dispatch(actions.changeToDolistSuccess(response.data, set));
}

export const updatePageSize = (pageSize:number):ThunkType => async (dispatch) => {
    dispatch(actions.setPageSizeSuccess(pageSize));
}

export const updateCurrentPage = (currentPage:number):ThunkType =>async (dispatch) => {
    dispatch(actions.setCurrentPageSuccess(currentPage));
}
//thunk end

export default todoListReducer;

type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes|FormAction>