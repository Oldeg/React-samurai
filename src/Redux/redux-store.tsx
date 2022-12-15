import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import profilePageReducer, {ProfilePageReducerType} from "./Reducers/profilePageReducer";
import messagesPageReducer, {MessagesPageReducerType} from "./Reducers/messagesPageReducer";
import sidebarReducer from "./Reducers/sidebarReducer";
import usersReducer, {UsersReducerType} from "./Reducers/usersReducer";
import {authReducer, AuthReducerType} from "./Reducers/authReducer";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk'
import {FormAction, reducer as formReducer} from "redux-form";
import {useDispatch} from "react-redux";

let rootReducer = combineReducers(
    {
        profilePage: profilePageReducer,
        messagesPage: messagesPageReducer,
        usersPage: usersReducer,
        sidebar: sidebarReducer,
        auth: authReducer,
        form: formReducer
    })
export type AppStateType = ReturnType<typeof rootReducer>
export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export type AppDispatch = ThunkDispatch<AppStateType, unknown, AnyAction>
export const useAppDispatch: () => AppDispatch = useDispatch
export type AppActionsType = AuthReducerType | MessagesPageReducerType | ProfilePageReducerType | UsersReducerType;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionsType | FormAction>
// @ts-ignore
window.store = store;