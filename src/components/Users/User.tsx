import React from 'react';
import {UserType} from "../../Redux/Reducers/usersReducer";
import s from "./Users.module.css";
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/images/istockphoto-1300845620-612x612.jpg";

type UserPropsType = {
    followingInProgress: Array<number>
    followUnfollowFlow: (userID: number, value: boolean) => void
}
export const User: React.FC<UserType & UserPropsType> = ({id, ...props}) => {
    const unfollowButton = (id: number, value: boolean) => {
        props.followUnfollowFlow(id, value)

    }
    const followButton = (id: number, value: boolean) => {
        props.followUnfollowFlow(id, value)

    }
    return <div key={id}>
                <span>
                    <div className={s.imageBox}>
                        {props.photos.small ? props.photos.small : <NavLink to={'/profile/' + id}><img src={userPhoto}
                                                                                                       alt="avatar"/></NavLink>}

                    </div>
                    <div>
                        {props.followed ? <button onClick={() => unfollowButton(id, false)}
                                                  disabled={props.followingInProgress.some(number => number === id)}>Unfollow</button> :
                            <button onClick={() => followButton(id, true)}
                                    disabled={props.followingInProgress.some(number => number === id)}>Follow</button>}
                    </div>
                </span>
        <span className={s.message}>
                    <span>
                        <div>
                            {props.name}
                        </div>
                        <div>
                            {props.status}
                        </div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>


                </span>
    </div>
};

