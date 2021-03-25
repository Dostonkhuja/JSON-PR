import {applyMiddleware, combineReducers, createStore} from "redux";
import commentsReducer from "../reducers/comments-reducer";
import profileReducer from "../reducers/profile-reducer";
import photosReducer from "../reducers/photos-reducer";
import todoListReducer from "../reducers/todo-reducer";
import albumReducer from "../reducers/albums-reducer";
import postsReducers from "../reducers/posts-reducer";
import userReducer from "../reducers/users-reducer";
import thunkMiddleware from 'redux-thunk'
import authReducer from "../reducers/auth-reducer";
import {reducer as formReducer} from 'redux-form'
import dialogsReducer from "../reducers/dialogs-reducer";

const reducers = combineReducers({
    toDoListsPage:todoListReducer,
    commentsPage:commentsReducer,
    profilePage:profileReducer,
    photosPage:photosReducer,
    postsPage:postsReducers,
    albumsPage:albumReducer,
    usersPage:userReducer,
    dialogsPage:dialogsReducer,
    auth:authReducer,
    form:formReducer
})

let store=createStore(reducers,applyMiddleware(thunkMiddleware));

export default store