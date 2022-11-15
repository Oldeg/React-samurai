import React from 'react';
import s from "./Users.module.css";
import {UserType} from "../../Redux/Reduce/usersReducer";
import userPhoto from "../../assets/images/istockphoto-1300845620-612x612.jpg";
import {NavLink} from "react-router-dom";

type UsersComponentPropsType = {
    totalCount: number
    pageSize: number
    currentPage: number
    users:  UserType[]
    unfollow: (userID:number) => void
    follow: (userID:number) => void
    onPageChanged: (p:number) => void

}
export const Users = (props: UsersComponentPropsType) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)}
        return (
            <div>

                <div className={s.pagesBox}>{pages.map(p => <span onClick={() => props.onPageChanged(p)}
                                                                  className={props.currentPage === p ? s.selected : s.pages}>{p}</span>)}</div>

                {props.users.map((u: UserType) => <div key={u.id}>
                <span>
                    <div className={s.imageBox}>
                        {u.photos.small ? u.photos.small : <NavLink to={'/profile/' + u.id}><img src={userPhoto}
                                                                         alt="avatar"/></NavLink>}

                    </div>
                    <div>
                        {u.followed ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button> :
                            <button onClick={() => props.follow(u.id)}>Follow</button>}
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


