import {AppThunk} from "../redux-store";
import {getAuthUserData} from "./authReducer";


type InitialStateType = {
    initialized: boolean
}
let InitialState: InitialStateType = {
    initialized: false
}

export const appReducer = (state = InitialState, action: AppReducerType) => {
    switch (action.type) {
        case "INITIALIZED-SUCCESS": {
            return {...state, initialized: true}
        }
        default:
            return state
    }
}
export type AppReducerType = SetUserDataType;
type SetUserDataType = ReturnType<typeof initializedSuccess>
export const initializedSuccess = () => {
    return {
        type: 'INITIALIZED-SUCCESS',

    } as const
}
export const initializeApp = (): AppThunk => (dispatch) => {
    dispatch(getAuthUserData()).then(() =>{
        dispatch(initializedSuccess())
    })

}