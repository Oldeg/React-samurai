import {Dispatch} from "redux";
import {authAPI, securityAPI} from "api/api";
import {AppDispatch, AppThunk} from "../redux-store";
import {stopSubmit} from "redux-form";
import {getProfile, ProfileUserType} from 'Redux/Reducers/profilePageReducer';

type InitialStateType = {
    userId: string
    email: string
    login: string
    isAuth: boolean
    captcha: string
    image: string
}
let InitialState: InitialStateType = {
    userId: '',
    email: '',
    login: '',
    isAuth: false,
    image: '',
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

export const setUserData = (userId: string, email: string, login: string, isAuth: boolean, image: string) => {
    return {
        type: 'SET_USER_DATA',
        payload: {
            userId,
            email,
            login,
            isAuth,
            image
        }
    } as const
}
export const setCaptchaUrl = (url: string) => {
    return {
        type: 'SET-CAPTCHA-URL',
        payload: url
    } as const
}

export const getAuthUserData = () => async (dispatch: AppDispatch) => {
    let data = await authAPI.authMe()
    if (data.resultCode === 0) {
        let {id, login, email} = data.data;

        const profile = await dispatch(getProfile(id))
        dispatch(setUserData(id, email, login, true, profile.photos.small))
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
        dispatch(setUserData('', '', '', false, ''))
    }
}

export const getCaptchaUrl = (): AppThunk => async (dispatch) => {
    let data = await securityAPI.getCaptchaUrl()
    const captcha = data.url
    dispatch(setCaptchaUrl(captcha))

}

