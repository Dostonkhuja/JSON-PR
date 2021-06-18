import {postsAPI} from "../DAL/api";
import {BaseThunkType, InferActionsTypes} from "../state-managment/redux-store";
import {FormAction} from "redux-form";
import {PostType} from "../types/types";

const initialState = {
    posts: null as Array<PostType> | null,
    pageSize: 10,
    currentPage: 0,
}

const postsReducers = (state = initialState, action:ActionsTypes):InitialStateType => {
    switch (action.type) {
        case 'POSTS_GET_POSTS':
            return {...state, posts: action.posts}
        case 'POSTS_SET_PAGE_SIZE':
            return {...state, pageSize: action.pageSize}
        case 'POSTS_SET_CURRENT_PAGE':
            let currentPageOrginal = action.currentPage - 1
            return {...state, currentPage: currentPageOrginal}

        default:return state
    }
    return state;
};

//action creators start
const actions = {
 getPostsSuccess : (posts:Array<PostType>) => ({type: "POSTS_GET_POSTS", posts} as const),
 setPageSizeSuccess : (pageSize:number) => ({type: "POSTS_SET_PAGE_SIZE", pageSize}as const),
 setCurrentPageSuccess : (currentPage:number) => ({type: "POSTS_SET_CURRENT_PAGE", currentPage}as const)
}
//action creators end

//thunk start
export const getPosts = ():ThunkType => async dispatch => {
    const response = await postsAPI.getPosts()
    dispatch(actions.getPostsSuccess(response.data))
}
export const updatePageSize = (pageSize:number):ThunkType => async (dispatch) => {
    dispatch(actions.setPageSizeSuccess(pageSize));
}
export const updateCurrentPage = (currentPage:number):ThunkType =>async (dispatch) => {
    dispatch(actions.setCurrentPageSuccess(currentPage));
}
//thunk end

export default postsReducers;

type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes| FormAction>