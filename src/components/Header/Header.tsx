import React from 'react';
import s from 'components/Header/Header.module.scss';
import {NavLink} from "react-router-dom";
import logo from 'assets/images/logo.webp'

type HeaderProps = {
    isAuth: boolean
    login: string | null
    logOut: () => void
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
                    <button onClick={props.logOut} className={s.logoutBtn}>Log out</button>
                </div>

            </div>
        </header>
    );
};

export default Header;