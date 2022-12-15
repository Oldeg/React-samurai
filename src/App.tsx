import React from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';


import {Route} from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {Friends} from './components/Friends/Friends';

import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileContainer1} from "./components/Profile/ProfileContainer";
import {HeaderContainer1} from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";


const App = () => {
    return (

        <div className="app-wrapper">
            <HeaderContainer1/>
            <Navbar/> {/*sidebar={props.store.getState().sidebar}*/}
            <div className="app-wrapper-content">
                <Route exact path="/dialogs"
                       render={() => <DialogsContainer/>}/>
                <Route path="/profile/:userId?"
                       render={() => <ProfileContainer1/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
                <Route path="/friends" render={() => <Friends/>}/>
                <Route path="/users" render={() => <UsersContainer/>}/>
                <Route path="/login" render={() => <Login/>}/>

            </div>

        </div>


    );
}

export default App;
