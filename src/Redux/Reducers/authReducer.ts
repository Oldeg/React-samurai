import {Dispatch} from "redux";
import {authAPI} from "../../api/api";
import {AppThunk} from "../redux-store";
import {stopSubmit} from "redux-form";

type InitialStateType = {
    userId: null | number
    email: null | string
    login: null | string
    isAuth: boolean
}
let InitialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};
export const authReducer = (state = InitialState, action: AuthReducerType) => {
    switch (action.type) {
        case "SET_USER_DATA": {
            return {...state, ...action.payload, isAuth: action.payload.isAuth}
        }
        default:
            return state
    }
}
export type AuthReducerType = SetUserDataType;
type SetUserDataType = ReturnType<typeof setUserData>
export const setUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: 'SET_USER_DATA',
        payload: {
            userId,
            email,
            login,
            isAuth
        }
    } as const
}
export const getAuthUserData = () => {
    return (dispatch: Dispatch) => {
        authAPI.authMe().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                dispatch(setUserData(id, email, login, true))
            }
        })
    }
}
export const login = (email: string, password: string, rememberMe: boolean):AppThunk  => {

    return (dispatch) => {
        authAPI.login(email, password, rememberMe).then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
              let message =  data.messages.length > 0 ? data.messages[0] : 'Some error'
                dispatch(stopSubmit('login',{_error:message}))
            }
        })
    }
}
export const logOut = (): AppThunk => {
    return (dispatch) => {
        authAPI.logout().then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserData(null, null, null, false))
            }
        })
    }
}