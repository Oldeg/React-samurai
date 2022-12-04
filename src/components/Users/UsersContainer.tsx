import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";

import {AppStateType} from "../../Redux/redux-store";


import {
    follow,
    getUsers, isFetching,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingInProgress, unfollow,

    UserType
} from "../../Redux/Reducers/usersReducer";
import {Preloader} from "../common/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetchingValue: boolean
    followingInProgress: Array<number>
}
type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
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
        users: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetchingValue: state.usersPage.isFetchingValue,
        followingInProgress: state.usersPage.followingInProgress
    }

}
/*const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userID: number) => dispatch(followAC(userID)),
        unfollow: (userID: number) => dispatch(unFollowAC(userID)),
        setUsers: (users: Array<UserType>) => dispatch(setUsersAC(users)),
        setCurrentPage: (currentPage: number) => dispatch(setCurrentPageAC(currentPage)),
        setTotalUsersCount: (totalCount: number) => dispatch(setTotalUsersCountAC(totalCount)),
        isFetching: (isFetching:boolean) => dispatch(isFetchingAC(isFetching))
    }
}*/
export const UsersContainer = compose<React.ComponentType>(withAuthRedirect, connect(mapStateToProps, {
    setUsers, setCurrentPage, setTotalUsersCount, isFetching, toggleFollowingInProgress, getUsers, follow, unfollow
}))(UsersAPIContainer)