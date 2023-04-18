import React, {FC} from 'react';
import s from './ProfileMenu.module.scss';
import {NavLink} from 'react-router-dom';
import {useAppDispatch} from 'Redux/redux-store';
import {coverAction} from 'Redux/Reducers/appReducer';
import defaultUser from 'assets/images/istockphoto-1300845620-612x612.jpg'

type ProfileMenuType = {
    image: string
    popupHandler: () => void
}
export const ProfileMenu: FC<ProfileMenuType> = ({image, popupHandler}) => {
    const dispatch = useAppDispatch()
    const popup = () => {
        dispatch(coverAction(true))
        popupHandler()
    }
    return (
        <div className={s.profileMenu}>
            <div className={s.container}>
                <div className={s.avatarWrap}>
                    <img src={image ? image : defaultUser} alt="user-avatar" className={s.avatar}/>
                </div>
                <div className={s.navWrapper}>
                    <ul className={s.nav}>
                        <li className={s.linkWrap}>
                            <NavLink to={'/profile'} className={s.link}>Timeline</NavLink>
                        </li>
                        <li className={s.linkWrap}>
                            <button className={s.link}>About</button>
                        </li>
                        <li className={s.linkWrap}>
                            <NavLink to={'/users'} className={s.link}>Users</NavLink>
                        </li>
                        <li className={s.linkWrap}>
                            <NavLink to={'/friends'} className={s.link}>Friends</NavLink>
                        </li>
                        <li className={s.linkWrap}>
                            <button className={s.link}>More</button>
                        </li>
                    </ul>
                </div>
                <div className={s.btnWrapper}>
                    <div className={s.btnContainer}>
                        <button className={s.btn} onClick={popup}>
                            Edit profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

