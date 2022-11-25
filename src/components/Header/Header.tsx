import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

type HeaderProps = {
    isAuth: boolean
    login: string | null
}
const Header = (props: HeaderProps) => {
    return (
        <header className={s.header}>
            <img src='https://img.freepik.com/darmowe-psd/makieta-logo-na-szarej-scianie_35913-2122.jpg?w=2000'
                 alt='nature'/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login:
                <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;