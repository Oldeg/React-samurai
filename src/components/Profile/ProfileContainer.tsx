import React from 'react';
import Profile from "./Profile";

import {connect} from "react-redux";
import {AppStateType} from "Redux/redux-store";
import {
    getProfile, getUserStatus,
    ProfileUserType, saveProfile, saveUserPhoto, updateUserStatus,
} from "Redux/Reducers/profilePageReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

import {withAuthRedirect} from "hoc/withAuthRedirect";
import {compose} from "redux";
import {EditProfileType} from 'components/Profile/ProfileForm/ProfileForm';


export type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToProps;
type MapStateToPropsType = {
    profile: ProfileUserType
    status: string
    authorizedUserId: string
    isAuth: boolean
    popup: boolean
}
type MapDispatchToProps = {
    getProfile: (id: string) => void
    getUserStatus: (userId: string) => void
    updateUserStatus: (state: string) => void
    saveUserPhoto: (photo: File) => void
    saveProfile: (profile: EditProfileType) => void
}
type PathParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

export class ProfileContainer extends React.Component<PropsType> {
    constructor(props: PropsType) {
        super(props);

    }

    refresh = () => {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId + '';
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getProfile(userId)
        this.props.getUserStatus(userId)
    }

    componentDidMount() {
        this.refresh()
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refresh()
        }
    }

    render() {

        return (
            <Profile profile={this.props.profile} status={this.props.status}
                     updateUserStatus={this.props.updateUserStatus} owner={!this.props.match.params.userId}
                     savePhoto={this.props.saveUserPhoto} saveProfile={this.props.saveProfile}
                     popup={this.props.popup}/>
        )
    }

}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth,
        popup: state.profilePage.popup
    }
}


export const ProfileContainer1 = compose<React.ComponentType>(withAuthRedirect, connect(mapStateToProps, {
    getProfile,
    getUserStatus,
    updateUserStatus,
    saveUserPhoto,
    saveProfile,
}), withRouter)(ProfileContainer)


