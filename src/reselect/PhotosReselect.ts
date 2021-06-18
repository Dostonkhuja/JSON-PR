import {AppStateType} from "../state-managment/redux-store";

export const getPhotosRs=(state:AppStateType)=>{
    return state.photosPage.photos
}

export const getPhotosPageSizeRs=(state:AppStateType)=>{
    return state.photosPage.pageSize
}

export const getPhotosCurrentPageRs=(state:AppStateType)=>{
    return state.photosPage.currentPage
}