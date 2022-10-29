import React from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import { StoreType} from "../../Redux/Store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


type ProfileType = {
    /*store: StoreType*/
}
const Profile = (props: ProfileType) => {
    return (
        <div className={s.profile}>
            <div>
                <img
                    src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C176%2C3008%2C1654&wid=4000&hei=2200&scl=0.752"
                    alt="nature"/>
            </div>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    );
};

export default Profile;