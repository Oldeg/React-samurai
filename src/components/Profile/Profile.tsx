import React from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileUserType} from "../../Redux/Reducers/profilePageReducer";


type ProfilePropsType = {
    profile: ProfileUserType | undefined
    status: string
    updateUserStatus: (status: string) => void
}
const Profile = (props: ProfilePropsType) => {

    return (
        <div className={s.profile}>
            <div>
                <img
                    src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C176%2C3008%2C1654&wid=4000&hei=2200&scl=0.752"
                    alt="nature"/>
            </div>
            <ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus}/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;