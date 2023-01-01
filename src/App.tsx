import React from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';


import {Route, withRouter} from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {Friends} from './components/Friends/Friends';

import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileContainer1} from "./components/Profile/ProfileContainer";
import {HeaderContainer1} from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/Reducers/appReducer";
import {AppStateType} from "./Redux/redux-store";
import {Preloader} from "./components/common/Preloader";

type MapDispatchToPropsType = {
    initializeApp:() => void
}
type MapStateToPropsType = {
    initialized: boolean
}
type AppCommonType = MapDispatchToPropsType & MapStateToPropsType
class App extends React.Component<AppCommonType> {
    constructor(props: AppCommonType) {
        super(props);
    }
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if(!this.props.initialized){
            return <Preloader/>
        } else {
            return <div className="app-wrapper">
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
        }

    }
}
const mapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
       initialized: state.app.initialized
    }
}
export default compose<React.ComponentType>(withRouter, connect(mapStateToProps,{initializeApp}))(App);
