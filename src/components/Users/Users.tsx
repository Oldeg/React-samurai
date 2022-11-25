import React from 'react';
import s from "./Users.module.css";
import { UserType} from "../../Redux/Reducers/usersReducer";
import userPhoto from "../../assets/images/istockphoto-1300845620-612x612.jpg";
import {NavLink} from "react-router-dom";
import {followingAPI} from "../../api/api";

type UsersComponentPropsType = {
    totalCount: number
    pageSize: number
    currentPage: number
    users:  UserType[]
    unFollow: (userID:number) => void
    follow: (userID:number) => void
    onPageChanged: (pageNumber:number) => void
    toggleFollowingInProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: Array<number>

}
export const Users = (props: UsersComponentPropsType) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)}
    const unfollowButton = (id: number ) => {
        props.toggleFollowingInProgress(true,id )
       followingAPI.unfollow(id).then(data => {
            if(data.resultCode === 0){
                props.unFollow(id)
            }
           props.toggleFollowingInProgress(false, id)
        })

    }
    const followButton = (id: number) => {
        props.toggleFollowingInProgress(true, id)
         followingAPI.follow(id).then(data => {
            if(data.resultCode === 0){
                props.follow(id)
            }
             props.toggleFollowingInProgress(false, id)
        })

    }
        return (
            <div>

                <div className={s.pagesBox}>{pages.map((pageNumber,index) => <span key={index} onClick={() => props.onPageChanged(pageNumber)}
                                                                  className={props.currentPage === pageNumber ? s.selected : s.pages}>{pageNumber}</span>)}</div>

                {props.users.map((u: UserType) => <div key={u.id}>
                <span>
                    <div className={s.imageBox}>
                        {u.photos.small ? u.photos.small : <NavLink to={'/profile/' + u.id}><img src={userPhoto}
                                                                         alt="avatar"/></NavLink>}

                    </div>
                    <div>
                        {u.followed ? <button onClick={() => unfollowButton(u.id)} disabled={props.followingInProgress.some(id => id === u.id)}>Unfollow</button> :
                            <button onClick={() => followButton(u.id)} disabled={props.followingInProgress.some(id => id === u.id)}>Follow</button>}
                    </div>
                </span>
                    <span className={s.message}>
                    <span>
                        <div>
                            {u.name}
                        </div>
                        <div>
                            {u.status}
                        </div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>


                </span>
                </div>)}
            </div>
        );
    }


