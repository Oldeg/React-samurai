import React from 'react';
import Header from "./Header";

import {connect} from "react-redux";

import {AppStateType} from "../../Redux/redux-store";
import {logOut} from "../../Redux/Reducers/authReducer";


type AuthPropsType = MapStateToPropsType & MapDispatchToPropsType;
class HeaderContainer extends React.Component<AuthPropsType> {
    constructor(props: AuthPropsType) {
        super(props);

    }
    render() {
        return (
           <Header {...this.props}/>
        );
    }


}
type MapStateToPropsType = {
    isAuth: boolean
    login: null | string
}
type MapDispatchToPropsType = {
    logOut: () => void
}
const mapStateToProps = (state:AppStateType):MapStateToPropsType  => {
 return {
     isAuth: state.auth.isAuth,
     login: state.auth.login
}
}
export const HeaderContainer1 = connect(mapStateToProps,{logOut}) (HeaderContainer);