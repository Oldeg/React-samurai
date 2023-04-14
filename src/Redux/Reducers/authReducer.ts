import {Dispatch} from "redux";
import {authAPI, securityAPI} from "api/api";
import {AppThunk} from "../redux-store";
import {stopSubmit} from "redux-form";

type InitialStateType = {
    userId: null | number
    email: null | string
    login: null | string
    isAuth: boolean
    captcha: string
}
let InitialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captcha: ''
};
export const authReducer = (state = InitialState, action: AuthReducerType) => {
    switch (action.type) {
        case "SET_USER_DATA": {
            return {...state, ...action.payload, isAuth: action.payload.isAuth}
        }
        case 'SET-CAPTCHA-URL': {
            return {...state, captcha: action.payload}
        }
        default:
            return state
    }
}
export type AuthReducerType = ReturnType<typeof setUserData> | ReturnType<typeof setCaptchaUrl>;

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
export const setCaptchaUrl = (url: string) => {
    return {
        type: 'SET-CAPTCHA-URL',
        payload: url
    } as const
}

export const getAuthUserData = () => async (dispatch: Dispatch) => {
    let data = await authAPI.authMe()
    if (data.resultCode === 0) {
        let {id, login, email} = data.data;
        dispatch(setUserData(id, email, login, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): AppThunk => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe, captcha)
    if (data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        let message = data.messages.length > 0 ? data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: message}))
    }

}

export const logOut = (): AppThunk => async (dispatch) => {
    let data = await authAPI.logout()
    if (data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false))
    }
}

export const getCaptchaUrl = (): AppThunk => async (dispatch) => {
    let data = await securityAPI.getCaptchaUrl()
    const captcha = data.url
    dispatch(setCaptchaUrl(captcha))

}

