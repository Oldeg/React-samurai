import {combineReducers, createStore} from "redux";
import profilePageReducer from "./Reduce/profilePageReducer";
import messagesPageReducer from "./Reduce/messagesPageReducer";
import sidebarReducer from "./Reduce/sidebarReducer";
import usersReducer from "./Reduce/usersReducer";


let rootReducer = combineReducers(
    {
        profilePage: profilePageReducer,
        messagesPage: messagesPageReducer,
        usersPage: usersReducer,
        sidebar: sidebarReducer
    })
export type AppStateType = ReturnType<typeof rootReducer>
export let store = createStore(rootReducer)