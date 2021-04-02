const INITIALIZED_SUCCSESS = 'INITIALIZED_SUCCSESS'

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCSESS:
            return {...state, initialized: true}
        default:return state
    }
}

export const initializedSuccsess = () => ({type: INITIALIZED_SUCCSESS})

export const initializeApp = () => (dispatch) => {
    dispatch(initializedSuccsess())
}

export default appReducer;