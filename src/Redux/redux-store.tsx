import {applyMiddleware, combineReducers, createStore} from "redux";
import profilePageReducer from "./Reducers/profilePageReducer";
import messagesPageReducer from "./Reducers/messagesPageReducer";
import sidebarReducer from "./Reducers/sidebarReducer";
import usersReducer from "./Reducers/usersReducer";
import {authReducer} from "./Reducers/authReducer";
import thunkMiddleware  from 'redux-thunk'


let rootReducer = combineReducers(
    {
        profilePage: profilePageReducer,
        messagesPage: messagesPageReducer,
        usersPage: usersReducer,
        sidebar: sidebarReducer,
        auth: authReducer
    })
export type AppStateType = ReturnType<typeof rootReducer>
export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

// @ts-ignore
window.store = store;