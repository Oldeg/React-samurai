import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import axios from "axios";
import {AppStateType} from "../../Redux/redux-store";


import {
    follow, isFetching,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    unFollow,
    UserType
} from "../../Redux/Reduce/usersReducer";
import {Preloader} from "../common/Preloader";

type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetchingValue: boolean
}
type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    isFetching: (isFetching: boolean) => void
}
export type UsersPropsType = MapDispatchToPropsType & MapStateToPropsType


class UsersAPIContainer extends React.Component<UsersPropsType> {
    constructor(props: UsersPropsType) {
        super(props);

    }

    componentDidMount() {
        this.props.isFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.isFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })

    }

    onPageChanged = (p: number) => {
        this.props.isFetching(true)
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(response => {
            this.props.isFetching(false)
            this.props.setUsers(response.data.items)
        })

    }

    render() {
        return <>
            {this.props.isFetchingValue ? <Preloader/> : null}
            < Users users={this.props.users}
                    totalCount={this.props.totalCount}
                    onPageChanged={this.onPageChanged}
                    currentPage={this.props.currentPage}
                    pageSize={this.props.pageSize}
                    follow={this.props.follow}
                    unfollow={this.props.unFollow}
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
        isFetchingValue: state.usersPage.isFetchingValue
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
export const UsersContainer = connect(mapStateToProps, {follow, unFollow, setUsers, setCurrentPage,
    setTotalUsersCount, isFetching})(UsersAPIContainer)

