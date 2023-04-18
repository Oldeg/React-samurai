import {AppThunk} from "../redux-store";
import {getAuthUserData} from "./authReducer";
import {getProfile} from 'Redux/Reducers/profilePageReducer';


type InitialStateType = {
    initialized: boolean
    cover: boolean
}
let InitialState: InitialStateType = {
    initialized: false,
    cover: false
}

export const appReducer = (state = InitialState, action: AppReducerType) => {
    switch (action.type) {
        case "INITIALIZED-SUCCESS": {
            return {...state, initialized: true}
        }
        case 'POPUP': {
            return {...state, cover: action.payload}
        }
        default:
            return state
    }
}
export type AppReducerType = ReturnType<typeof initializedSuccess> | ReturnType<typeof coverAction>;

export const initializedSuccess = () => {
    return {
        type: 'INITIALIZED-SUCCESS',

    } as const
}
export const coverAction = (value: boolean) => {
    return {
        type: 'POPUP',
        payload: value

    } as const
}
export const initializeApp = (): AppThunk => (dispatch) => {
    dispatch(getAuthUserData()).then(() => {
        dispatch(initializedSuccess())
    })

}