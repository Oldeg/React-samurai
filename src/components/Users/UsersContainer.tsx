import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {followAC,  setUsersAC, unFollowAC, UserType} from "../../Redux/Reduce/UsersReducer";
type MapStateToPropsType = {
    users: Array<UserType>
}
type MapDispatchToPropsType = {
    follow: (userID:string) => void
    unfollow: (userID:string) => void
    setUsers: (users:Array<UserType>) => void
}
export type UsersPropsType = MapDispatchToPropsType & MapStateToPropsType
const mapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        users: state.usersPage.users
    }

}
const mapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType => {
    return{
        follow: (userID: string) => dispatch(followAC(userID)),
        unfollow: (userID:string) => dispatch(unFollowAC(userID)),
        setUsers: (users:Array<UserType>) => dispatch(setUsersAC(users))
    }
}
export const UsersContainer =  connect(mapStateToProps,mapDispatchToProps ) (Users)

