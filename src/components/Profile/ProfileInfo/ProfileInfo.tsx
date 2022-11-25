import React from 'react';
import s from './ProfileInfo.module.css';
import {ProfileUserType} from "../../../Redux/Reducers/profilePageReducer";
type ProfileInfoType ={
    profile: ProfileUserType
}
export const ProfileInfo = (props: ProfileInfoType) => {
    return (
        <div>
            <div className={s.ava}>
                <img
                    src={props.profile.photos.large}
                    alt="ava"/>
            </div>
            <div className={s.descriptionBlock}>
                <div>
                    {props.profile.fullName}
                </div>
                <div>
                    {props.profile.aboutMe}
                </div>
                <div>
                    {props.profile.lookingForAJob}
                </div>
                <div>
                    {props.profile.lookingForAJobDescription}
                </div>
            </div>
        </div>
    )

};

