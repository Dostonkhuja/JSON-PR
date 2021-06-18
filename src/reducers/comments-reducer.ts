import {commentsAPI} from "../DAL/api";
import {BaseThunkType, InferActionsTypes} from "../state-managment/redux-store";
import {FormAction} from "redux-form";
import {CommentsType} from "../types/types";

const initialState={
    comments:[] as Array<CommentsType>,
    pageSize: 10,
    currentPage: 0,
}

const commentsReducer=(state=initialState,action:ActionsTypes):InitialStateType =>{
    switch (action.type){
        case 'COMMENTS_GET_COMMENTS':
            return{...state, comments:action.comments}
        case 'COMMENTS_SET_PAGE_SIZE':
            return {...state, pageSize:action.pageSize}
        case 'COMMENTS_SET_CURRENT_PAGE':
            let currentPageOrginal=action.currentPage - 1
            return {...state, currentPage:currentPageOrginal}
        default:return state
    }
    return state;
};

//action creators start

const actions = {
 getCommentsSuccess :(comments:Array<CommentsType>) => ({type: "COMMENTS_GET_COMMENTS", comments} as const),
 setPageSizeSuccess : (pageSize:number) => ({type: "COMMENTS_SET_PAGE_SIZE", pageSize}as const),
  setCurrentPageSuccess : (currentPage:number) => ({type: "COMMENTS_SET_CURRENT_PAGE", currentPage} as const)
}
//action creators end

//thunk start
export const getComments=():ThunkType => async dispatch=>{
    const response= await commentsAPI.getComments()
    dispatch(actions.getCommentsSuccess(response.data))
}

export const updatePageSize=(pageSize:number):ThunkType => async dispatch=>{
    dispatch(actions.setPageSizeSuccess(pageSize));
}

export const updateCurrentPage=(currentPage:number):ThunkType => async dispatch=>{
    dispatch(actions.setCurrentPageSuccess(currentPage));
}
//thunk end

export default commentsReducer;

type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes | FormAction>