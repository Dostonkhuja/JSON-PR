import {BaseThunkType, InferActionsTypes} from "../state-managment/redux-store";
import {FormAction} from "redux-form";

let initialState = {
    initialized: false
}


const appReducer = (state = initialState, action:ActionsTypes):InitialStateType => {
    switch (action.type) {
        case 'INITIALIZED_SUCCSESS':
            return {...state, initialized: true}
        default:return state
    }
}


 const actions = {
    initializedSuccsess : () => ({type: 'INITIALIZED_SUCCSESS'} as const)
}

export const initializeApp = ():ThunkType => async (dispatch) => {
    dispatch(actions.initializedSuccsess())
}

export default appReducer;

type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes | FormAction>
