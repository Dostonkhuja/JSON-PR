import {AppStateType} from "../state-managment/redux-store";

export const getSignInRs=(state:AppStateType)=>{
    return state.auth.signIn
}