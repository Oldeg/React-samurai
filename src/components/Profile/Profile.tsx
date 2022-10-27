import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import { ProfilePageType} from '../../App';
import {ActionsType} from "../../Redux/State";


type ProfileType = {
    profilePage: ProfilePageType
    dispatch: (action:ActionsType ) => void
}
const Profile = (props: ProfileType) => {
    return (
        <div className={s.profile}>
            <div>
                <img
                    src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C176%2C3008%2C1654&wid=4000&hei=2200&scl=0.752"
                    alt="nature"/>
            </div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts} newPostText={props.profilePage.newPostText} dispatch={props.dispatch}  />
        </div>
    );
};

export default Profile;