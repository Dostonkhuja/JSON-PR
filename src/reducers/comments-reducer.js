import {commentsAPI} from "../DAL/api";

const COMMENTS_GET_COMMENTS='COMMENTS_GET_COMMENTS'
const COMMENTS_SET_PAGE_SIZE = 'COMMENTS_SET_PAGE_SIZE'
const COMMENTS_SET_CURRENT_PAGE = 'COMMENTS_SET_CURRENT_PAGE'

const initialState={
    comments:[],
    pageSize: 10,
    currentPage: 0,
}

const commentsReducer=(state=initialState,action)=>{
    switch (action.type){
        case COMMENTS_GET_COMMENTS:
            return{...state, comments:action.comments}
        case COMMENTS_SET_PAGE_SIZE:
            return {...state, pageSize:action.pageSize}
        case COMMENTS_SET_CURRENT_PAGE:
            let currentPageOrginal=action.currentPage - 1
            return {...state, currentPage:currentPageOrginal}
        default:return state
    }
    return state;
};

//action creators start
const getCommentsSuccess=(comments)=>({type:"COMMENTS_GET_COMMENTS",comments})
const setPageSizeSuccess=(pageSize)=>({type:"COMMENTS_SET_PAGE_SIZE",pageSize})
const setCurrentPageSuccess=(currentPage)=>({type:"COMMENTS_SET_CURRENT_PAGE",currentPage})
//action creators end

//thunk start
export const getComments=()=> async dispatch=>{
    const response= await commentsAPI.getComments()
    dispatch(getCommentsSuccess(response.data))
}

export const updatePageSize=(pageSize)=>  dispatch=>{
    dispatch(setPageSizeSuccess(pageSize));
}

export const updateCurrentPage=(currentPage)=>  dispatch=>{
    dispatch(setCurrentPageSuccess(currentPage));
}
//thunk end

export default commentsReducer;