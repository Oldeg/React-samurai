import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from './Users.module.css'
import {v1} from "uuid";


export const Users = (props: UsersPropsType) => {
        if(props.users.length === 4){
            props.setUsers(  [
                {
                    id: v1(),
                    fullName: 'Dmitry',
                    status: 'Nice looking',
                    followed: true,
                    location: {city: 'Minsk', country: 'Belarus',}
                },
                {
                    id: v1(),
                    fullName: 'Nick',
                    status: 'Looking for a job',
                    followed: false,
                    location: {city: 'Warshaw', country: 'Poland'}
                },
                {
                    id: v1(),
                    fullName: 'Artem',
                    status: 'Like swimming',
                    followed: true,
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: v1(),
                    fullName: 'Daniel',
                    status: 'I want to buy a car',
                    followed: false,
                    location: {city: 'Chicago', country: 'USA'}
                }
            ])
        }
    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div className={s.imageBox}>
                        <img
                            src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
                            alt="avatar"/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button> : <button onClick={() => props.follow(u.id)}>Follow</button> }
                    </div>
                </span>
                <span className={s.message}>
                    <span>
                        <div>
                            {u.fullName}
                        </div>
                        <div>
                            {u.status}
                        </div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>


                </span>
            </div>)}
        </div>
    );
};

