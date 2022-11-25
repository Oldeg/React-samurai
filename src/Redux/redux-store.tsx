import {combineReducers, createStore} from "redux";
import profilePageReducer from "./Reducers/profilePageReducer";
import messagesPageReducer from "./Reducers/messagesPageReducer";
import sidebarReducer from "./Reducers/sidebarReducer";
import usersReducer from "./Reducers/usersReducer";
import {authReducer} from "./Reducers/authReducer";


let rootReducer = combineReducers(
    {
        profilePage: profilePageReducer,
        messagesPage: messagesPageReducer,
        usersPage: usersReducer,
        sidebar: sidebarReducer,
        auth: authReducer
    })
export type AppStateType = ReturnType<typeof rootReducer>
export let store = createStore(rootReducer)

// @ts-ignore
window.store = store;