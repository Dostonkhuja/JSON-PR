import {AppStateType} from "../state-managment/redux-store";

export const getAlbumsRs=(state:AppStateType)=>{
    return state.albumsPage.albums
}

export const getPageSizeRs=(state:AppStateType)=>{
    return state.albumsPage.pageSize
}

export const getCurrentPageRs=(state:AppStateType)=>{
    return state.albumsPage.currentPage
}

export const getPhotosAlmubsRs=(state:AppStateType)=>{
    return state.albumsPage.photosAlbum
}