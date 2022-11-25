import React from 'react';
import Header from "./Header";

import {connect} from "react-redux";
import {setUserData} from "../../Redux/Reducers/authReducer";
import {AppStateType} from "../../Redux/redux-store";
import {authAPI} from "../../api/api";

type AuthPropsType = MapStateToPropsType & MapDispatchToPropsType;
class HeaderContainer extends React.Component<AuthPropsType> {
    constructor(props: AuthPropsType) {
        super(props);

    }
    componentDidMount() {
        authAPI.authMe().then(data => {
            if(data.resultCode === 0) {
                let {id, login, email} = data.data;
                this.props.setUserData(id, email,login)
            }
    })}

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
    setUserData: (userId:number, email:string, login:string) => void
}
const mapStateToProps = (state:AppStateType):MapStateToPropsType  => {
 return {
     isAuth: state.auth.isAuth,
     login: state.auth.login
}
}
export const HeaderContainer1 = connect(mapStateToProps,{setUserData}) (HeaderContainer);