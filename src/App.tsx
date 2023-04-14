import React from 'react';
import 'App.module.css';

import s from './App.module.css'
import {BrowserRouter, Route, Switch, withRouter} from 'react-router-dom';
import {Friends} from 'components/Friends/Friends';
import {DialogsContainer} from "components/Dialogs/DialogsContainer";
import {UsersContainer} from "components/Users/UsersContainer";
import {ProfileContainer1} from "components/Profile/ProfileContainer";
import {HeaderContainer1} from "components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "Redux/Reducers/appReducer";
import {AppStateType, store} from "Redux/redux-store";
import {Preloader} from "components/common/Preloader";
import {HomePage} from 'components/Home/HomePage';

type MapDispatchToPropsType = {
    initializeApp: () => void
}
type MapStateToPropsType = {
    initialized: boolean
    isLoggedIn: boolean
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
        if (!this.props.initialized) {
            return <Preloader/>
        } else {
            return <div>
                {!this.props.isLoggedIn ? <Login/> :
                    <div>
                        <HeaderContainer1/>

                        <div className={s.appContent}>
                            <Switch>
                                <Route exact path="/home"
                                       render={() => <HomePage/>}/>
                                <Route exact path="/dialogs"
                                       render={() => <DialogsContainer/>}/>
                                <Route path="/profile/:userId?"
                                       render={() => <ProfileContainer1/>}/>
                                <Route exact path={'/'} render={() => <HomePage/>}/>
                                <Route path="/friends" render={() => <Friends/>}/>
                                <Route path="/users" render={() => <UsersContainer/>}/>
                                <Route path="/*" render={() => <div> 404 Not found</div>}/>
                            </Switch>
                        </div>

                    </div>}
            </div>
        }

    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        initialized: state.app.initialized,
        isLoggedIn: state.auth.isAuth
    }
}
const AppContainer = compose<React.ComponentType>(withRouter, connect(mapStateToProps, {initializeApp}))(App);
export const SamuraiJsApp = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}