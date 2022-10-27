import React from 'react';
import s from './ProfileInfo.module.css';

export const ProfileInfo = () => {
    return (
        <div>
            <div className={s.ava}>
                <img
                    src="https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg"
                    alt="dog"/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>
    )

};

