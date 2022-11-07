import React from 'react';
import {connect} from "react-redux";

import UsersC from "./UsersC";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {followAC,  setUsersAC, unFollowAC, UserType} from "../../Redux/Reduce/usersReducer";
type MapStateToPropsType = {
    users: Array<UserType>
}
type MapDispatchToPropsType = {
    follow: (userID:number) => void
    unfollow: (userID:number) => void
    setUsers: (users:Array<UserType>) => void
}
export type UsersPropsType = MapDispatchToPropsType & MapStateToPropsType
const mapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        users: state.usersPage.items
    }

}
const mapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType => {
    return{
        follow: (userID: number) => dispatch(followAC(userID)),
        unfollow: (userID:number) => dispatch(unFollowAC(userID)),
        setUsers: (users:Array<UserType>) => dispatch(setUsersAC(users))
    }
}
export const UsersContainer =  connect(mapStateToProps,mapDispatchToProps ) (UsersC)

