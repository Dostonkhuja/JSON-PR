import {photosAPI} from "../DAL/api";

const PHOTOS_GET_PHOTOS = 'PHOTOS_GET_PHOTOS'
const PHOTOS_SET_PAGE_SIZE = 'PHOTOS_SET_PAGE_SIZE'
const PHOTOS_SET_CURRENT_PAGE = 'PHOTOS_SET_CURRENT_PAGE'

const initialState = {
    photos: [],
    pageSize: 20,
    currentPage: 0,
}

const photosReducer = (state = initialState, action) => {
    switch (action.type) {
        case PHOTOS_GET_PHOTOS:
            return {...state, photos: action.photo}
        case PHOTOS_SET_PAGE_SIZE:
            return {...state, pageSize: action.pageSize}
        case PHOTOS_SET_CURRENT_PAGE:
            let currentPageOrginal = action.currentPage - 1
            return {...state, currentPage: currentPageOrginal}

        default:
            return state
    }
    return state;
};

//action creators start
const getPhotoSuccess = (photo) => ({type: "PHOTOS_GET_PHOTOS", photo})
const setPageSizeSuccess = (pageSize) => ({type: "PHOTOS_SET_PAGE_SIZE", pageSize})
const setCurrentPageSuccess = (currentPage) => ({type: "PHOTOS_SET_CURRENT_PAGE", currentPage})
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