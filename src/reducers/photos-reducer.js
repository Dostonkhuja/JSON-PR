import React from 'react'
import {photosAPI} from "../DAL/api";

const GET_PHOTOS = 'GET_PHOTOS'
const SET_PAGE_SIZE = 'SET_PAGE_SIZE'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

const initialState = {
    photos: [],
    pageSize: 20,
    currentPage: 0,
}

const photosReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PHOTOS:
            return {...state, photos: action.photo}
        case SET_PAGE_SIZE:
            return {...state, pageSize: action.pageSize}
        case SET_CURRENT_PAGE:
            let currentPageOrginal = action.currentPage - 1
            return {...state, currentPage: currentPageOrginal}

        default:
            return state
    }
    return state;
};

//action creators start
const getPhotoSuccess = (photo) => ({type: "GET_PHOTOS", photo})
const setPageSizeSuccess = (pageSize) => ({type: "SET_PAGE_SIZE", pageSize})
const setCurrentPageSuccess = (currentPage) => ({type: "SET_CURRENT_PAGE", currentPage})
//action creators end

//thunk start
export const getPhotos = () => async dispatch => {
    const response = await photosAPI.getPhotos()
    dispatch(getPhotoSuccess(response.data))
}
export const updatePageSize = (pageSize) => dispatch => {
    dispatch(setPageSizeSuccess(pageSize));
}
export const updateCurrentPage = (currentPage) => dispatch => {
    dispatch(setCurrentPageSuccess(currentPage));
}
//thunk end

export default photosReducer;