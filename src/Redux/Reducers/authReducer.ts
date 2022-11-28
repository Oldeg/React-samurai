import {Dispatch} from "redux";
import {authAPI} from "../../api/api";

type InitialStateType = {
    userId: null | number
    email: null | string
    login: null | string
    isAuth: boolean
}
let InitialState:InitialStateType = {
    userId: null,
     email: null,
     login: null,
    isAuth: false
 };
export const authReducer = (state = InitialState, action: ActionsType) => {
    switch (action.type) {
        case "SET_USER_DATA": {
            return {...state,...action.payload, isAuth: true}
        }
        default: return state
    }
}
type ActionsType = SetUserDataType;
type SetUserDataType = ReturnType<typeof setUserData>
export const setUserData = (userId:number, email:string, login:string) => {
    return {
        type: 'SET_USER_DATA',
        payload: {
            userId,
            email,
            login
        }
    }as const
}
export const getAuthUserData = () => {
    return (dispatch: Dispatch) => {
        authAPI.authMe().then(data => {
            if(data.resultCode === 0) {
                let {id, login, email} = data.data;
               dispatch(setUserData(id, email,login))
            }
        })
    }
}