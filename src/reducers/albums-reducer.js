import {albumsAPI} from "../DAL/api";

const ALBUMS_GET_ALBUMS = 'ALBUMS_GET_ALBUMS'
const ALBUMS_SET_PAGE_SIZE = 'ALBUMS_SET_PAGE_SIZE'
const ALBUMS_SET_CURRENT_PAGE = 'ALBUMS_SET_CURRENT_PAGE'
const ALBUMS_GET_PHOTOS_ALBUM = 'ALBUMS_GET_PHOTOS_ALBUM'

const initialState = {
    albums: null,
    photosAlbum: null,
    pageSize: 10,
    currentPage: 0,
}

const albumReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALBUMS_GET_ALBUMS:
            return {...state, albums: action.albums}
        case ALBUMS_SET_PAGE_SIZE:
            return {...state, pageSize: action.pageSize}
        case ALBUMS_GET_PHOTOS_ALBUM:
            return {...state, photosAlbum: action.albumPhotos}
        case ALBUMS_SET_CURRENT_PAGE:
            let currentPageOrginal = action.currentPage - 1
            return {...state, currentPage: currentPageOrginal}

        default:
            return state
    }
    return state;
};

//action creators start
const getAlbumsSuccess = (albums) => ({type: ALBUMS_GET_ALBUMS, albums})
const setPageSizeSuccess = (pageSize) => ({type: ALBUMS_SET_PAGE_SIZE, pageSize})
const setCurrentPageSuccess = (currentPage) => ({type: ALBUMS_SET_CURRENT_PAGE, currentPage})
const getPhotosAlbumSuccess = (albumPhotos) => ({type: ALBUMS_GET_PHOTOS_ALBUM, albumPhotos})
//action creators end

//thunk start
export const getPhotosAlbum = (albumId) => async dispatch => {
    const response = await albumsAPI.getPhotosAlbum(albumId)
    dispatch(getPhotosAlbumSuccess(response.data))
}
export const getAlbums = () => async dispatch => {
    const response = await albumsAPI.getAlbums()
    dispatch(getAlbumsSuccess(response.data))
}

export const updatePageSize = (pageSize) => dispatch => {
    dispatch(setPageSizeSuccess(pageSize));
}
export const updateCurrentPage = (currentPage) => dispatch => {
    dispatch(setCurrentPageSuccess(currentPage));
}
//thunk end

export default albumReducer;