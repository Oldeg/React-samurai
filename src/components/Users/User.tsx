import React from 'react';
import {UserType} from "Redux/Reducers/usersReducer";
import s from "./User.module.scss";
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
    return <div key={id} className={s.userCard}>


        <NavLink to={'/profile/' + id}>
            <img src={props.photos.small ? props.photos.small : userPhoto} alt="avatar" className={s.image}/>
        </NavLink>

        <div className={s.nameAndBtn}>
            <span className={s.name}>
            {props.name}
        </span>
            <div>
                {props.followed ? <button onClick={() => unfollowButton(id, false)} className={s.btn}
                                          disabled={props.followingInProgress.some(number => number === id)}>Unfollow</button> :
                    <button onClick={() => followButton(id, true)} className={s.btn}
                            disabled={props.followingInProgress.some(number => number === id)}>Follow</button>}
            </div>
        </div>


    </div>
};

