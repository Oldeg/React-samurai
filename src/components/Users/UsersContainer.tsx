import React from 'react';

import {connect} from "react-redux";


import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    UserType
} from "../../Redux/Reduce/usersReducer";
import UsersC from "./UsersC";
type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalCount: number
    currentPage: number
}
type MapDispatchToPropsType = {
    follow: (userID:number) => void
    unfollow: (userID:number) => void
    setUsers: (users:Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}
export type UsersPropsType = MapDispatchToPropsType & MapStateToPropsType
const mapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        users: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage
    }

}
const mapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType => {
    return{
        follow: (userID: number) => dispatch(followAC(userID)),
        unfollow: (userID:number) => dispatch(unFollowAC(userID)),
        setUsers: (users:Array<UserType>) => dispatch(setUsersAC(users)),
        setCurrentPage: (currentPage: number) => dispatch(setCurrentPageAC(currentPage)),
        setTotalUsersCount: (totalCount: number) => dispatch(setTotalUsersCountAC(totalCount))
    }
}
export const UsersContainer =  connect(mapStateToProps,mapDispatchToProps ) (UsersC)

