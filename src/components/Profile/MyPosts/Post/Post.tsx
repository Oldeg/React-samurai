import React from 'react';
import s from './Post.module.css'
type PostType = {
    post: string
    like: number
    id:string
}
const Post = (props: PostType) => {
    return (
        <div className={s.item}>
            {props.post}
            <img src='https://cdn1.naekranie.pl/media/cache/article-cover/2018/11/avatar-sequel-budget-700x300.jpg' alt={'Ava'}/>
            <div><span>like {props.like}</span></div>
            <div><span>dislike</span></div>

        </div>
    );
};

export default Post;