import React from 'react';
import s from './ProfileBanner.module.scss'
import banner from 'assets/images/profile-banner.webp'
import ava from 'assets/images/banner-ava.webp'
import {Link} from 'react-router-dom';

export const ProfileBanner = () => {
    return (
        <div className={s.bannerContainer}>
            <figure className={s.bannerFigure}>
                <Link to={'/profile'} className={s.bannerImgLink}>
                    <img src={banner} alt="banner-image" className={s.bannerImg}/>
                </Link>
                <Link to={'/profile'} className={s.avaLink}>
                    <img src={ava} alt="banner-avatar" className={s.ava}/>
                </Link>
            </figure>
            <div className={s.bannerContent}>
                <Link to={'/profile'} className={s.bannerLink}>Erik Jhonson</Link>
                <p className={s.bannerText}>Any one can join with but Social network us if you want Any one can join
                    with us if you want</p>
            </div>

        </div>
    );
};

