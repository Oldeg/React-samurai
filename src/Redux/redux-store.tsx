import {combineReducers, createStore} from "redux";
import profilePageReducer from "./Reduce/ProfilePageReducer";
import messagesPageReducer from "./Reduce/MessagesPageReducer";
import sidebarReducer from "./Reduce/SidebarReducer";
import usersReducer from "./Reduce/UsersReducer";


let rootReducer = combineReducers(
    {
        profilePage: profilePageReducer,
        messagesPage: messagesPageReducer,
        usersPage: usersReducer,
        sidebar: sidebarReducer
    })
export type AppStateType = ReturnType<typeof rootReducer>
export let store = createStore(rootReducer)