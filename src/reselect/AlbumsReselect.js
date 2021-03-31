export const getAlbumsRs=(state)=>{
    return state.albumsPage.albums
}

export const getPageSizeRs=(state)=>{
    return state.albumsPage.pageSize
}

export const getCurrentPageRs=(state)=>{
    return state.albumsPage.currentPage
}

export const getPhotosAlmubsRs=(state)=>{
    return state.albumsPage.photosAlbum
}