import React, {FC} from 'react';
import s from 'components/Profile/EditMenu/EditMenu.module.scss'
import {useAppDispatch} from 'Redux/redux-store';
import {openPopup, ProfileUserType} from 'Redux/Reducers/profilePageReducer';
import {coverAction} from 'Redux/Reducers/appReducer';
import {ProfileInfo} from 'components/Profile/ProfileInfo/ProfileInfo';
import {EditProfileType} from 'components/Profile/ProfileForm/ProfileForm';

type EditMEnuType = {
    popup: boolean
    profile: ProfileUserType
    status: string
    updateUserStatus: (status: string) => void
    owner: boolean
    savePhoto: (photo: File) => void
    saveProfile: (profile: EditProfileType) => void
}
export const EditMenu: FC<EditMEnuType> = ({
                                               popup,
                                               profile,
                                               saveProfile,
                                               savePhoto,
                                               status,
                                               updateUserStatus,
                                               owner
                                           }) => {
    const dispatch = useAppDispatch()
    const closeMenuHandler = () => {
        dispatch(openPopup(false))
        dispatch(coverAction(false))
    }
    const menuStyle = popup ? `${s.editMenu} ${s.activeMenu}` : `${s.editMenu}`
    return (
        <div className={menuStyle}>
            <div className={s.closeMenu} onClick={closeMenuHandler}>
                <span className={s.closeMenu_item}></span>
            </div>
            <ProfileInfo profile={profile} status={status} updateUserStatus={updateUserStatus} owner={owner}
                         savePhoto={savePhoto} saveProfile={saveProfile} display={popup}/>
        </div>
    );
};

