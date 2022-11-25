import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";

import {AppStateType} from "../../Redux/redux-store";


import {
    follow, isFetching,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingInProgress,
    unFollow,
    UserType
} from "../../Redux/Reducers/usersReducer";
import {Preloader} from "../common/Preloader";
import {usersAPI} from "../../api/api";


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
    unFollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    isFetching: (isFetching: boolean) => void
    toggleFollowingInProgress: (isFetching: boolean, userId:number) => void
}
export type UsersPropsType = MapDispatchToPropsType & MapStateToPropsType


class UsersAPIContainer extends React.Component<UsersPropsType> {
    constructor(props: UsersPropsType) {
        super(props);

    }

    componentDidMount() {
        this.props.isFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.isFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })

    }

    onPageChanged = (pageNumber: number) => {
        this.props.isFetching(true)
        this.props.setCurrentPage(pageNumber)
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.isFetching(false)
                this.props.setUsers(data.items)
            })

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
export const UsersContainer = connect(mapStateToProps, {
    follow, unFollow, setUsers, setCurrentPage,
    setTotalUsersCount, isFetching, toggleFollowingInProgress
})(UsersAPIContainer)

