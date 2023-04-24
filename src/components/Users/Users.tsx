import React from 'react';
import {UserType} from "Redux/Reducers/usersReducer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "components/Users/User/User";
import s from './Users.module.scss'


type UsersComponentPropsType = {
    totalCount: number
    pageSize: number
    currentPage: number
    users: UserType[]
    followUnfollowFlow: (userID: number, value: boolean) => void
    onPageChanged: (pageNumber: number) => void
    followingInProgress: Array<number>
    isFriends: boolean

}
export const Users = (props: UsersComponentPropsType) => {
    const users = props.isFriends ? props.users.filter(user => user.followed) : props.users
    return (
        <div className={s.users}>
            <div className={s.container}>

                <div className={s.usersBox}>{users.map((u: UserType) => <User id={u.id} name={u.name}
                                                                              status={u.status}
                                                                              followed={u.followed}
                                                                              uniqueUrlName={u.uniqueUrlName}
                                                                              photos={u.photos} key={u.id}
                                                                              followingInProgress={props.followingInProgress}
                                                                              followUnfollowFlow={props.followUnfollowFlow}/>)}</div>

            </div>
            && <Paginator totalCount={props.totalCount} pageSize={props.pageSize}
                          onPageChanged={props.onPageChanged} currentPage={props.currentPage}/>
        </div>
    );
}


