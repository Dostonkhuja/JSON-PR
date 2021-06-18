import {photosAPI} from "../DAL/api";
import {BaseThunkType, InferActionsTypes} from "../state-managment/redux-store";
import {FormAction} from "redux-form";
import {PhotoType} from "../types/types";

const initialState = {
    photos: [] as Array<PhotoType>,
    pageSize: 20,
    currentPage: 0,
}

const photosReducer = (state = initialState, action:ActionsTypes):InitialStateType => {
    switch (action.type) {
        case 'PHOTOS_GET_PHOTOS':
            return {...state, photos: action.photo}
        case 'PHOTOS_SET_PAGE_SIZE':
            return {...state, pageSize: action.pageSize}
        case 'PHOTOS_SET_CURRENT_PAGE': debugger
            let currentPageOrginal = action.currentPage - 1
            return {...state, currentPage: currentPageOrginal}

        default:
            return state
    }
    return state;
};

//action creators start
const actions = {
  getPhotoSuccess : (photo:Array<PhotoType>) => ({type: 'PHOTOS_GET_PHOTOS', photo} as const),
  setPageSizeSuccess : (pageSize:number) => ({type: 'PHOTOS_SET_PAGE_SIZE', pageSize} as const),
  setCurrentPageSuccess : (currentPage:number) => ({type: 'PHOTOS_SET_CURRENT_PAGE', currentPage} as const)
}
//action creators end

//thunk start
export const getPhotos = ():ThunkType => async (dispatch) => {
    const response = await photosAPI.getPhotos()
    dispatch(actions.getPhotoSuccess(response.data))
}

export const updatePageSize = (pageSize:number):ThunkType =>async (dispatch) => {
    dispatch(actions.setPageSizeSuccess(pageSize));
}

export const updateCurrentPage = (currentPage:number):ThunkType =>async (dispatch) => {
    dispatch(actions.setCurrentPageSuccess(currentPage));
}
//thunk end

export default photosReducer;

type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes|FormAction>