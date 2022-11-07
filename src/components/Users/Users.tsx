import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from './Users.module.css'
import userPhoto from '../../assets/images/istockphoto-1300845620-612x612.jpg'

import axios from "axios";



export const Users = (props: UsersPropsType) => {
    if(props.users.length === 1){
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)
        })
    }
    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div className={s.imageBox}>
                        {u.photos.small ? u.photos.small :  <img src={userPhoto}
                            alt="avatar"/> }

                    </div>
                    <div>
                        {u.followed ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button> : <button onClick={() => props.follow(u.id)}>Follow</button> }
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
};

