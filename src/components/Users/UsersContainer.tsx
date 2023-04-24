import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";

import {AppStateType} from "Redux/redux-store";


import {
    followUnfollowFlow,
    requestUsers,
    isFetching,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleFollowingInProgress,

    UserType
} from "Redux/Reducers/usersReducer";
import {Preloader} from "../common/Preloader";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetchingValue,
    getPageSize,
    getTotalCount,
    getUsers
} from "Redux/Reducers/users-selector";


type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetchingValue: boolean
    followingInProgress: Array<number>
    isFriends: boolean
}
type MapDispatchToPropsType = {
    followUnfollowFlow: (userID: number, value:boolean) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    isFetching: (isFetching: boolean) => void
    toggleFollowingInProgress: (isFetching: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}
export type UsersPropsType = MapDispatchToPropsType & MapStateToPropsType


class UsersAPIContainer extends React.Component<UsersPropsType> {
    constructor(props: UsersPropsType) {
        super(props);

    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)


    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)


    }

    render() {
        return <>
            {this.props.isFetchingValue ? <Preloader/> : null}
            < Users {...this.props} onPageChanged={this.onPageChanged}


            />
        </>
    }

}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: getUsers(state),
        pageSize:getPageSize(state),
        totalCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        isFetchingValue: getIsFetchingValue(state),
        followingInProgress: getFollowingInProgress(state),
        isFriends: state.usersPage.friends
    }

}

export const UsersContainer = compose<React.ComponentType>( connect(mapStateToProps, {
    setUsers, setCurrentPage, setTotalUsersCount, isFetching, toggleFollowingInProgress, getUsers: requestUsers,followUnfollowFlow
}))(UsersAPIContainer)