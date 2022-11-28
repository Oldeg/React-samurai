import React from 'react';
import Profile from "./Profile";

import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {
    getProfile,
    ProfileUserType,
} from "../../Redux/Reducers/profilePageReducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";


export type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToProps;
type MapStateToPropsType = {
    profile: ProfileUserType
    isAuth: boolean
}
type MapDispatchToProps = {
    getProfile: (id: string) => void

}
type PathParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

export class ProfileContainer extends React.Component<PropsType> {
    constructor(props: PropsType) {
        super(props);

    }

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        this.props.getProfile(userId)
    }

    render() {
        if(!this.props.isAuth){
            return <Redirect to={'/login'} />
        }
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }

}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}
let WithUrlDataContainerComponent = withRouter(ProfileContainer)
export const ProfileContainer1 = connect(mapStateToProps, {getProfile})(WithUrlDataContainerComponent)


