import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {Friends} from './components/Friends/Friends';
import {ActionsType} from "./Redux/State";


type AppType = {
    state: StateType
    dispatch: (action: ActionsType) => void
}
export type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
    sidebar:SideBarType
}
export type SideBarType = {
    elements: Array<ElementsType>

}
export type ElementsType = {
    name:string
}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}
export type MessagesPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody: string
}
export type MessagesType = {
    id: string
    message: string


}
export type DialogsType = {
    id: string
    name: string
}
export type PostsType = {
    id: string
    post: string
    like: number

}

const App = (props: AppType) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar sidebar={props.state.sidebar}/>
                <div className="app-wrapper-content">
                    <Route exact path="/dialogs"
                           render={() => <Dialogs messagePage={props.state.messagesPage} dispatch={props.dispatch} newMessageBody={props.state.messagesPage.newMessageBody}/>}/>
                    <Route path="/profile"
                           render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                    <Route path="/friends" render={() => <Friends/>}/>

                </div>

            </div>
        </BrowserRouter>

    );
}

export default App;
