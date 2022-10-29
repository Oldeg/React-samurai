import {combineReducers, createStore} from "redux";
import profilePageReducer from "./Reduce/ProfilePageReducer";
import messagesPageReducer from "./Reduce/MessagesPageReducer";
import sidebarReducer from "./Reduce/SidebarReducer";
import {StoreType} from "./Store";

let reducers = combineReducers(
    {
        profilePage: profilePageReducer,
        messagesPage: messagesPageReducer,
        sidebar: sidebarReducer
    })
export let store: StoreType = createStore(reducers)