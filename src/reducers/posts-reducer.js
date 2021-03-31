import {postsAPI} from "../DAL/api";

const POSTS_GET_POSTS = 'POSTS_GET_POSTS'
const POSTS_SET_PAGE_SIZE = 'POSTS_SET_PAGE_SIZE'
const POSTS_SET_CURRENT_PAGE = 'POSTS_SET_CURRENT_PAGE'

const initialState = {
    posts: null,
    pageSize: 10,
    currentPage: 0,
}

const postsReducers = (state = initialState, action) => {
    switch (action.type) {
        case POSTS_GET_POSTS:
            return {...state, posts: action.posts}
        case POSTS_SET_PAGE_SIZE:
            return {...state, pageSize: action.pageSize}
        case POSTS_SET_CURRENT_PAGE:
            let currentPageOrginal = action.currentPage - 1
            return {...state, currentPage: currentPageOrginal}

        default:return state
    }
    return state;
};

//action creators start
const getPostsSuccess = (posts) => ({type: "POSTS_GET_POSTS", posts})
const setPageSizeSuccess = (pageSize) => ({type: "POSTS_SET_PAGE_SIZE", pageSize})
const setCurrentPageSuccess = (currentPage) => ({type: "POSTS_SET_CURRENT_PAGE", currentPage})
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