import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css'
import {MyPostsType} from "./MyPostsContainer";
import AddNewPost, {PostFormType} from "./PostForm";

const MyPosts = (props: MyPostsType) => {

    let postElements = props.posts.map(post => <Post key={post.id} post={post.post} like={post.like} id={post.id}/>)


    const addNewPost = (value: PostFormType ) => {
        props.addPost(value.post_text)
    }
    return (
        <div>
            <div className={s.postsBlock}>
                <AddNewPost onSubmit={addNewPost}/>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
};

export default MyPosts;