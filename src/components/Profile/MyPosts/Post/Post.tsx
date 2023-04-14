import React from 'react';
import s from 'components/Profile/MyPosts/Post/Post.module.scss'


type PostType = {
    post: string
    like: number
    id: string
    image?: string
    avatar?: string
    lastSeen: string
    name: string
}
const Post = (props: PostType) => {
    return (
        <div className={s.post}>
            <div className={s.postContainer}>
                <img src={props.avatar} alt="ava" className={s.ava}/>
                <div className={s.userInfo}>
                    <h6 className={s.name}>{props.name}</h6>
                    <p className={s.lastSeen}>{props.lastSeen}</p>
                </div>
                <div className={s.settings}>
                    <span className={s.settings_item}></span>
                    <span className={s.settings_item}></span>
                    <span className={s.settings_item}></span>
                </div>
            </div>
            <div className={s.textImage}>
                <p className={s.text}>
                    {props.post}
                </p>
                {props.image && <img src={props.image} alt="post image" className={s.postImage}/>}
            </div>
        </div>
    );
};

export default Post;