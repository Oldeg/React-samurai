import React from 'react';
import s from './Profile.module.scss';
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileUserType} from "Redux/Reducers/profilePageReducer";
import {EditProfileType} from 'components/Profile/ProfileForm';
import {ProfileMenu} from 'components/Profile/ProfileMenu/ProfileMenu';
import {AsidePanel} from 'components/common/AsidePanel/AsidePanel';
import {Cards2} from 'components/Home/HomePage';
import {CardType} from 'UI/Card/Card';

type ProfilePropsType = {
    profile: ProfileUserType
    status: string
    updateUserStatus: (status: string) => void
    owner: boolean
    savePhoto: (photo: File) => void
    saveProfile: (profile: EditProfileType) => void
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

    return (
        <>
            <div className={s.profileBanner}>
            </div>
            <ProfileMenu image={props.profile.photos.large}/>
            <div className={s.container}>
                <AsidePanel cards={Cards} isBanner={false}/>
                <MyPostsContainer/>
                <AsidePanel cards={Cards2} isBanner={false}/>
            </div>
            {/*<ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus}
                         owner={props.owner} savePhoto={props.savePhoto} saveProfile={props.saveProfile}/>*/}
        </>
    );
};

export default Profile;