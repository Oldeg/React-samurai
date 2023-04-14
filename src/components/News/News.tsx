import React from 'react';
import s from 'components/News/News.module.scss'
import ava1 from 'assets/images/ava-1.webp'
import ava2 from 'assets/images/ava-2.webp'
import ava3 from 'assets/images/ava-3.webp'
import ava4 from 'assets/images/ava-4.webp'
import post1 from 'assets/images/post-1.webp'
import post2 from 'assets/images/post-2.jpg'
import post3 from 'assets/images/post-3.jpg'
import post4 from 'assets/images/post-4.jpg'

export const News = () => {
    return (
        <div className={s.newsContent}>
            <div className={s.news}>
                <div className={s.newsContainer}>
                    <img src={ava1} alt="ava" className={s.ava}/>
                    <div className={s.userInfo}>
                        <h6 className={s.name}>Merry Watson</h6>
                        <p className={s.lastSeen}>20 min ago</p>
                    </div>
                    <div className={s.settings}>
                        <span className={s.settings_item}></span>
                        <span className={s.settings_item}></span>
                        <span className={s.settings_item}></span>
                    </div>
                </div>
                <div className={s.textImage}>
                    <p className={s.text}>
                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default
                        model text, and a search for 'lorem ipsum' will uncover many web sites still in their
                        infancy.
                    </p>
                    <img src={post1} alt="post image" className={s.postImage}/>
                </div>
            </div>
            <div className={s.news}>
                <div className={s.newsContainer}>
                    <img src={ava2} alt="ava" className={s.ava}/>
                    <div className={s.userInfo}>
                        <h6 className={s.name}>Jon Wileyam</h6>
                        <p className={s.lastSeen}>20 min ago</p>
                    </div>
                    <div className={s.settings}>
                        <span className={s.settings_item}></span>
                        <span className={s.settings_item}></span>
                        <span className={s.settings_item}></span>
                    </div>
                </div>
                <div className={s.textImage}>
                    <p className={s.text}>
                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default
                        model text, and a search for 'lorem ipsum' will uncover many web sites still in their
                        infancy.
                    </p>
                    <img src={post2} alt="post image" className={s.postImage}/>
                </div>
            </div>
            <div className={s.news}>
                <div className={s.newsContainer}>
                    <img src={ava3} alt="ava" className={s.ava}/>
                    <div className={s.userInfo}>
                        <h6 className={s.name}>
                            William Henry</h6>
                        <p className={s.lastSeen}>20 min ago</p>
                    </div>
                    <div className={s.settings}>
                        <span className={s.settings_item}></span>
                        <span className={s.settings_item}></span>
                        <span className={s.settings_item}></span>
                    </div>
                </div>
                <div className={s.textImage}>
                    <p className={s.text}>
                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default
                        model text, and a search for 'lorem ipsum' will uncover many web sites still in their
                        infancy.
                    </p>
                    <img src={post3} alt="post image" className={s.postImage}/>
                </div>
            </div>
            <div className={s.news}>
                <div className={s.newsContainer}>
                    <img src={ava4} alt="ava" className={s.ava}/>
                    <div className={s.userInfo}>
                        <h6 className={s.name}>Robart Faul</h6>
                        <p className={s.lastSeen}>20 min ago</p>
                    </div>
                    <div className={s.settings}>
                        <span className={s.settings_item}></span>
                        <span className={s.settings_item}></span>
                        <span className={s.settings_item}></span>
                    </div>
                </div>
                <div className={s.textImage}>
                    <p className={s.text}>
                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default
                        model text, and a search for 'lorem ipsum' will uncover many web sites still in their
                        infancy.
                    </p>
                    <img src={post4} alt="post image" className={s.postImage}/>
                </div>
            </div>
        </div>
    );
};

