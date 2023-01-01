import React from 'react';
import s from './ProfileInfo.module.css';
import {ProfileUserType} from "../../../Redux/Reducers/profilePageReducer";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";

type ProfileInfoType ={
    profile: ProfileUserType | undefined
    status: string
    updateUserStatus: (status: string) => void
}
export const ProfileInfo = (props: ProfileInfoType) => {

    return (
        <div>

            <div className={s.descriptionBlock}>
                <img
                    src={props.profile && props.profile.photos.large} alt="ava"/>
                <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus}/>

            </div>
        </div>
    )

};

