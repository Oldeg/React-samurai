import React from 'react';
import s from "../Users/Users.module.css";

export const Preloader = () => {
    return (
        <div>
            <img src={'https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif'}
                 alt={'Loading'}
                 className={s.preloader}/>
        </div>
    );
};

