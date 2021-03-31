import {applyMiddleware, combineReducers, createStore} from "redux";
import commentsReducer from "../reducers/comments-reducer";
import dialogsReducer from "../reducers/dialogs-reducer";
import profileReducer from "../reducers/profile-reducer";
import photosReducer from "../reducers/photos-reducer";
import todoListReducer from "../reducers/todo-reducer";
import postsReducers from "../reducers/posts-reducer";
import albumReducer from "../reducers/albums-reducer";
import userReducer from "../reducers/users-reducer";
import authReducer from "../reducers/auth-reducer";
import {reducer as formReducer} from 'redux-form'
import appReducer from "../reducers/app-reducer";
import thunkMiddleware from 'redux-thunk'

const reducers = combineReducers({
    toDoListsPage:todoListReducer,
    commentsPage:commentsReducer,
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    photosPage:photosReducer,
    postsPage:postsReducers,
    albumsPage:albumReducer,
    usersPage:userReducer,
    form:formReducer,
    auth:authReducer,
    app:appReducer
})

let store=createStore(reducers,applyMiddleware(thunkMiddleware));

export default store