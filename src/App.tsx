import React from 'react';
import 'App.module.scss';

import s from 'App.module.scss'
import {BrowserRouter, Redirect, Route, Switch, withRouter} from 'react-router-dom';
import {Friends} from 'components/Friends/Friends';
import {DialogsContainer} from "components/Dialogs/DialogsContainer";
import {UsersContainer} from "components/Users/UsersContainer";
import {ProfileContainer1} from "components/Profile/ProfileContainer";
import {HeaderContainer1} from "components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {coverAction, initializeApp} from "Redux/Reducers/appReducer";
import {AppStateType, store} from "Redux/redux-store";
import {Preloader} from "components/common/Preloader";
import {HomePage} from 'components/Home/HomePage';
import {openPopup} from 'Redux/Reducers/profilePageReducer';

type MapDispatchToPropsType = {
    initializeApp: () => void
    coverAction: (value: boolean) => void
    openPopup: (value: boolean) => void

}
type MapStateToPropsType = {
    initialized: boolean
    isLoggedIn: boolean
    coverValue: boolean

}
type AppCommonType = MapDispatchToPropsType & MapStateToPropsType

class App extends React.Component<AppCommonType> {
    constructor(props: AppCommonType) {
        super(props);

    }

    coverOff = () => {
        this.props.coverAction(false)
        this.props.openPopup(false)
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
                    <div className={s.app}>
                        {this.props.coverValue && <div className={s.popupCover} onClick={this.coverOff}/>}
                        <HeaderContainer1/>

                        <div className={s.appContent}>
                            <Switch>
                                <Route exact path="/React-samurai"
                                       render={() => <Redirect to={'/home'}/>}/>
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
        isLoggedIn: state.auth.isAuth,
        coverValue: state.app.cover
    }
}
const AppContainer = compose<React.ComponentType>(withRouter, connect(mapStateToProps, {
    initializeApp,
    coverAction,
    openPopup
}))(App);
export const SamuraiJsApp = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}