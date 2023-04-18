import React from 'react';
import s from 'components/Header/Header.module.scss';
import {NavLink} from "react-router-dom";
import logo from 'assets/images/logo.webp'

type HeaderProps = {
    isAuth: boolean
    login: string | null
    logOut: () => void
    avatar: string
    name: string
}
const Header = (props: HeaderProps) => {
    return (
        <header className={s.header}>
            <div className={s.headerContent}>
                <ul className={s.headerNav}>
                    <li>
                        <NavLink to="/home" className={s.headerNavItem} activeClassName={s.active}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dialogs" className={s.headerNavItem} activeClassName={s.active}>Messages</NavLink>
                    </li>
                    <li>
                        <NavLink to="/profile" className={s.headerNavItem}
                                 activeClassName={s.active}>Profile</NavLink>
                    </li>
                </ul>

                <img src={logo} alt=""/>
                <div className={s.headerBtnWrapper}>
                    <h6 className={s.name}>{props.name}</h6>
                    <img src={props.avatar} alt="avatar" className={s.avatar}/>
                    <div onClick={props.logOut} className={s.logoutBtn}/>
                </div>

            </div>
        </header>
    );
};

export default Header;