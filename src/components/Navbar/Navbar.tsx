import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/news" activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
            </div>
            <div className={s.friends}>
                <NavLink to="/friends" activeClassName={s.active}>Friends</NavLink>
                <div className={s.image}>
                    <img src="https://i.iplsc.com/-/000AIAU0P13DKS7P-C122.jpg" alt="1"/>
                    <img src="https://i.iplsc.com/-/000AIAU0P13DKS7P-C122.jpg" alt="2"/>
                    <img src="https://i.iplsc.com/-/000AIAU0P13DKS7P-C122.jpg" alt="3"/>
                </div>
                <div className={s.sidebar}>
                    {/*<StoreContext.Consumer>{
                        (store) => {
                            return <div>
                                <div>{store.getState().sidebar.elements[0].name}</div>
                                <div>{store.getState().sidebar.elements[1].name}</div>
                                <div>{store.getState().sidebar.elements[2].name}</div>
                            </div>
                        }

                    }
                    </StoreContext.Consumer>*/}

                </div>
            </div>

        </nav>

    );
};

export default Navbar;