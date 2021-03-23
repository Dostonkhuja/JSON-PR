import React from 'react'
import {postsAPI} from "../DAL/api";

const GET_POSTS = 'GET_POSTS'
const SET_PAGE_SIZE = 'SET_PAGE_SIZE'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

const initialState = {
    posts: null,
    pageSize: 10,
    currentPage: 0,
}

const postsReducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {...state, posts: action.posts}
        case SET_PAGE_SIZE:
            return {...state, pageSize: action.pageSize}
        case SET_CURRENT_PAGE:
            let currentPageOrginal = action.currentPage - 1
            return {...state, currentPage: currentPageOrginal}

        default:return state
    }
    return state;
};

//action creators start
const getPostsSuccess = (posts) => ({type: "GET_POSTS", posts})
const setPageSizeSuccess = (pageSize) => ({type: "SET_PAGE_SIZE", pageSize})
const setCurrentPageSuccess = (currentPage) => ({type: "SET_CURRENT_PAGE", currentPage})
//action creators end

//thunk start
export const getPosts = () => async dispatch => {
    const response = await postsAPI.getPosts()
    dispatch(getPostsSuccess(response.data))
}
export const updatePageSize = (pageSize) => dispatch => {
    dispatch(setPageSizeSuccess(pageSize));
}
export const updateCurrentPage = (currentPage) => dispatch => {
    dispatch(setCurrentPageSuccess(currentPage));
}
//thunk end

export default postsReducers;