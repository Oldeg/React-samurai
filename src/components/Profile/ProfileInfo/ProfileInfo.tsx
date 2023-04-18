import React, {ChangeEvent, useState} from 'react';
import s from 'components/Profile/ProfileInfo/ProfileInfo.module.scss';
import {ProfileUserType} from "Redux/Reducers/profilePageReducer";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import {EditProfileForm, EditProfileType} from 'components/Profile/ProfileForm/ProfileForm';


export type KeysType = 'facebook' | 'website' | 'vk' | 'twitter' | 'instagram' | 'youtube' | 'github' | 'mainLink'
type ProfileInfoType = {
    profile: ProfileUserType
    status: string
    updateUserStatus: (status: string) => void
    owner: boolean
    savePhoto: (photo: File) => void
    saveProfile: (profile: EditProfileType) => void
    display: boolean
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
    const onSubmit = (profile: EditProfileType) => {
        props.saveProfile(profile)
        setEditMode(false)
    }
    const profileInfoStyle = props.display ? `${s.profileInfo} ${s.profileInfoActive}` : `${s.profileInfo}`
    return (
        <div className={profileInfoStyle}>

            {editMode ? <EditProfileForm onSubmit={onSubmit} initialValues={props.profile}/> :
                < div className={s.descriptionBlock}>
                    < img
                        src={props.profile.photos.large} alt="ava" className={s.avatar}/>
                    {props.owner && <label className={s.uploadBtn}>
                        <input type="file" onChange={uploadPhoto} className={s.input}
                               accept=".jpg,.png,.svg,.jpeg"/>
                    </label>}
                    <div className={s.userInfo}>
                        <div>
                            <span className={s.title}>Full name</span>
                            : {fullName}
                        </div>
                        <div>
                            <span className={s.title}>Looking for a job</span>: {lookingForAJob ? 'yes' : 'no'}
                        </div>

                        <div>
                            <span className={s.title}>My professional skills</span>: {lookingForAJobDescription}
                        </div>

                        <div>
                            <span className={s.title}>About me</span>: {aboutMe}
                        </div>
                        <div>
                            {Object.keys(contacts).map(key => {
                                return <div key={key}><span
                                    className={s.title}>{key}</span> : {contacts[key as KeysType]}</div>
                            })}
                        </div>
                        <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
                    </div>
                    {props.owner && <button onClick={() => setEditMode(!editMode)} className={s.editBtn}> edit</button>}
                </div>

            }

        </div>
    )

}


