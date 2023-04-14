import {AnyAction, applyMiddleware, combineReducers, compose, createStore} from "redux";
import profilePageReducer, {ProfilePageReducerType} from "./Reducers/profilePageReducer";
import messagesPageReducer, {MessagesPageReducerType} from "./Reducers/messagesPageReducer";
import usersReducer, {UsersReducerType} from "./Reducers/usersReducer";
import {authReducer, AuthReducerType} from "./Reducers/authReducer";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk'
import {FormAction, reducer as formReducer} from "redux-form";
import {useDispatch} from "react-redux";
import {appReducer} from "./Reducers/appReducer";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
let rootReducer = combineReducers(
    {
        profilePage: profilePageReducer,
        messagesPage: messagesPageReducer,
        usersPage: usersReducer,
        app: appReducer,
        auth: authReducer,
        form: formReducer
    })
export type AppStateType = ReturnType<typeof rootReducer>
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

export type AppDispatch = ThunkDispatch<AppStateType, unknown, AnyAction>
export const useAppDispatch: () => AppDispatch = useDispatch
export type AppActionsType = AuthReducerType | MessagesPageReducerType | ProfilePageReducerType | UsersReducerType;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionsType | FormAction>
// @ts-ignore
window.store = store;