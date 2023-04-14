import React, {FC} from 'react';
import s from './ProfileMenu.module.scss';
import {NavLink} from 'react-router-dom';

type ProfileMenuType = {
    image: string
}
export const ProfileMenu: FC<ProfileMenuType> = ({image}) => {
    return (
        <div className={s.profileMenu}>
            <div className={s.container}>
                <div className={s.avatarWrap}>
                    <img src={image} alt="user-avatar" className={s.avatar}/>
                </div>
                <div className={s.navWrapper}>
                    <ul className={s.nav}>
                        <li className={s.linkWrap}>
                            <NavLink to={'/profile'} className={s.link}>Timeline</NavLink>
                        </li>
                        <li className={s.linkWrap}>
                            <NavLink to={'/about'} className={s.link}>About</NavLink>
                        </li>
                        <li className={s.linkWrap}>
                            <NavLink to={'/photos'} className={s.link}>Photos</NavLink>
                        </li>
                        <li className={s.linkWrap}>
                            <NavLink to={'/friends'} className={s.link}>Friends</NavLink>
                        </li>
                        <li className={s.linkWrap}>
                            <NavLink to={'#'} className={s.link}>More</NavLink>
                        </li>
                    </ul>
                </div>
                <div className={s.btnWrapper}>
                    <div className={s.btnContainer}>
                        <button className={s.btn}>
                            Edit profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

