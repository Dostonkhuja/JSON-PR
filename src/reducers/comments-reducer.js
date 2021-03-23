import React from 'react'
import {commentsAPI} from "../DAL/api";

const GET_COMMENTS='GET_COMMENTS'
const SET_PAGE_SIZE = 'SET_PAGE_SIZE'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

const initialState={
    comments:[],
    pageSize: 10,
    currentPage: 0,
}

const commentsReducer=(state=initialState,action)=>{
    switch (action.type){
        case GET_COMMENTS:
            return{...state, comments:action.comments}
        case SET_PAGE_SIZE:
            return {...state, pageSize:action.pageSize}
        case SET_CURRENT_PAGE:
            let currentPageOrginal=action.currentPage - 1
            return {...state, currentPage:currentPageOrginal}
        default:return state
    }
    return state;
};

//action creators start
const getCommentsSuccess=(comments)=>({type:"GET_COMMENTS",comments})
const setPageSizeSuccess=(pageSize)=>({type:"SET_PAGE_SIZE",pageSize})
const setCurrentPageSuccess=(currentPage)=>({type:"SET_CURRENT_PAGE",currentPage})
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