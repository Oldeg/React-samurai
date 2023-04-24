import React from 'react';
import s from './Profile.module.scss';
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {openPopup, ProfileUserType} from "Redux/Reducers/profilePageReducer";
import {EditProfileType} from 'components/Profile/ProfileForm/ProfileForm';
import {ProfileMenu} from 'components/Profile/ProfileMenu/ProfileMenu';
import {AsidePanel} from 'components/common/AsidePanel/AsidePanel';
import {Cards2} from 'components/Home/HomePage';
import {CardType} from 'UI/Card/Card';
import {EditMenu} from 'components/Profile/EditMenu/EditMenu';
import {useAppDispatch} from 'Redux/redux-store';

type ProfilePropsType = {
    profile: ProfileUserType
    status: string
    updateUserStatus: (status: string) => void
    owner: boolean
    savePhoto: (photo: File) => void
    saveProfile: (profile: EditProfileType) => void
    popup: boolean
}
export const Cards: CardType[] = [
    {
        subTitle: 'Adventure',
        title: 'Travel The World', cardTitle: 'Page You May Like', isLike: true, isImage: false, isProfile: true
    },
    {
        cardTitle: 'Latest Top News', title: 'Any one can join with us if you want',
        subTitle: '15 Min Ago',
        isLike: false, isImage: false
    }
]
const Profile = (props: ProfilePropsType) => {
    const dispatch = useAppDispatch()
    const popupHandler = () => {
        dispatch(openPopup(true))
    }
    return (
        <div className={s.profile}>
            <div className={s.profileBanner}>
            </div>
            <ProfileMenu image={props.profile.photos.large} popupHandler={popupHandler}/>
            <div className={s.container}>
                <EditMenu popup={props.popup} profile={props.profile} saveProfile={props.saveProfile}
                          savePhoto={props.savePhoto} updateUserStatus={props.updateUserStatus} status={props.status}
                          owner={props.owner}/>
                <AsidePanel cards={Cards} isBanner={false}/>
                <MyPostsContainer/>
                <AsidePanel cards={Cards2} isBanner={false}/>
            </div>
        </div>
    );
};

export default Profile;