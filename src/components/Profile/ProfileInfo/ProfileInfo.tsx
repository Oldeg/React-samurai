import React from 'react';
import s from './ProfileInfo.module.css';
import {ProfileUserType} from "../../../Redux/Reducers/profilePageReducer";
import ProfileStatus from "./ProfileStatus";
type ProfileInfoType ={
    profile: ProfileUserType
    status: string
    updateUserStatus: (status: string) => void
}
export const ProfileInfo = (props: ProfileInfoType) => {

    return (
        <div>

            <div className={s.descriptionBlock}>
                <img
                    src={props.profile.photos.large} alt="ava"/>
                <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>

            </div>
        </div>
    )

};

