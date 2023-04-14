import React, {ChangeEvent, useState} from 'react';
import s from './ProfileInfo.module.css';
import {ProfileUserType} from "Redux/Reducers/profilePageReducer";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import {EditProfileForm, EditProfileType} from '../ProfileForm';


export type KeysType = 'facebook' | 'website' | 'vk' | 'twitter' | 'instagram' | 'youtube' | 'github' | 'mainLink'
type ProfileInfoType = {
    profile: ProfileUserType
    status: string
    updateUserStatus: (status: string) => void
    owner: boolean
    savePhoto: (photo: File) => void
    saveProfile: (profile: EditProfileType) => void
}
export const ProfileInfo = (props: ProfileInfoType) => {
    const {
        aboutMe, lookingForAJob, lookingForAJobDescription,
        fullName, contacts, userId
    } = props.profile
    const [editMode, setEditMode] = useState(false)
    const uploadPhoto = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            props.savePhoto(e.target.files[0])
            e.target.value = ''
        }
    }
    const onSubmit =  (profile: EditProfileType) => {
        props.saveProfile(profile)
        setEditMode(false)
    }
    return (
        <div>

            {editMode ? <EditProfileForm onSubmit={onSubmit} initialValues={props.profile}/> :
                < div className={s.descriptionBlock}>
                    < img
                        src={props.profile.photos.large} alt="ava"/>
                    {props.owner && <input type="file" onChange={uploadPhoto}/>
                    }
                    <div>
                        Full name: {fullName}
                    </div>
                    <div>
                        Looking for a job: {lookingForAJob ? 'yes' : 'no'}
                    </div>

                    <div>
                        My professional skills: {lookingForAJobDescription}
                    </div>

                    <div>
                        About me: {aboutMe}
                    </div>
                    <div>
                        contacts: {Object.keys(contacts).map(key => {
                        return <div key={key}>{key} : {contacts[key as KeysType]}</div>
                    })}
                    </div>
                    <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
                    {props.owner && <button onClick={() => setEditMode(!editMode)}>edit</button>}
                </div>
            }

        </div>
    )

}


