import React from 'react';
import Profile from "./Profile";

import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {
    ProfileUserType,
    setUserProfile
} from "../../Redux/Reducers/profilePageReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {profileAPI} from "../../api/api";


export type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToProps;
type MapStateToPropsType = {
    profile: ProfileUserType

}
type MapDispatchToProps = {
    setUserProfile: (userProfile: ProfileUserType) => void

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
        if(!userId){
            userId = '2'
        }
        profileAPI.getProfile(userId).then(data => {
            this.props.setUserProfile(data)
        })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }

}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}
let WithUrlDataContainerComponent = withRouter(ProfileContainer)
export const ProfileContainer1 = connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)


