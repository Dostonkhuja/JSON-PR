import {AppStateType} from "../state-managment/redux-store";

export const getIsAuth=(state:AppStateType)=>{
    return state.auth.isAuth
}