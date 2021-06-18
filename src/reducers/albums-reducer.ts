import {albumsAPI} from "../DAL/api";
import {BaseThunkType, InferActionsTypes} from "../state-managment/redux-store";
import {FormAction, stopSubmit} from "redux-form";
import {AlbumType, PhotosType} from "../types/types";

const initialState = {
    albums: null as null | AlbumType[],
    photosAlbum: null as null | PhotosType[],
    pageSize: 10 as number,
    currentPage: 0,
}

const albumReducer = (state:InitialStatetype = initialState, action:ActionsTypes):InitialStatetype => {
    switch (action.type) {
        case 'JP/ALBUMS_GET_ALBUMS':
            return {...state, albums: action.albums}
        case 'JP/ALBUMS_SET_PAGE_SIZE':
            return {...state, pageSize: action.pageSize}
        case 'JP/ALBUMS_GET_PHOTOS_ALBUM':
            return {...state, photosAlbum: action.albumPhotos}
        case 'JP/ALBUMS_SET_CURRENT_PAGE':
             let currentPageOrginal = action.currentPage - 1
            return {...state, currentPage: currentPageOrginal}
        default:
            return state
    }
    return state;
};

//action creators start
const actions = {
     getAlbumsSuccess : (albums:AlbumType[]) => ({type: 'JP/ALBUMS_GET_ALBUMS', albums} as const),
     setPageSizeSuccess : (pageSize:number) => ({type: 'JP/ALBUMS_SET_PAGE_SIZE', pageSize} as const),
     setCurrentPageSuccess : (currentPage:number) => ({type:  'JP/ALBUMS_SET_CURRENT_PAGE', currentPage} as const),
     getPhotosAlbumSuccess : (albumPhotos:PhotosType[]) => ({type:'JP/ALBUMS_GET_PHOTOS_ALBUM' , albumPhotos} as const)
}
//action creators end

//thunk start
export const getPhotosAlbum = (albumId:number):ThunkType => async (dispatch) => {
    const response = await albumsAPI.getPhotosAlbum(albumId)
    dispatch(actions.getPhotosAlbumSuccess(response.data))
}
export const getAlbums = ():ThunkType => async (dispatch) => {
    const response = await albumsAPI.getAlbums()
    dispatch(actions.getAlbumsSuccess(response.data))
}
export const updatePageSize = (pageSize:number):ThunkType => async (dispatch) => {
    dispatch(actions.setPageSizeSuccess(pageSize));
}
export const updateCurrentPage = (currentPage:number):ThunkType => async (dispatch) => {
    dispatch(actions.setCurrentPageSuccess(currentPage));
}
//thunk end

export default albumReducer;

type InitialStatetype = typeof initialState
type ActionsTypes =InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes | FormAction>