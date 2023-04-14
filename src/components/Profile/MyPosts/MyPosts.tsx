import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.scss'
import {MyPostsType} from "./MyPostsContainer";
import AddNewPost, {PostFormType} from "components/Profile/MyPosts/PostForm/PostForm";

const MyPosts = React.memo((props: MyPostsType) => {
    console.log('Render')
    let postElements = props.posts.map(post => <Post key={post.id} post={post.post} like={post.like} id={post.id}
                                                     image={post.image} lastSeen={post.lastSeen} avatar={post.avatar}
                                                     name={post.name}/>)


    const addNewPost = (value: PostFormType) => {
        props.addPost(value.post_text, value.post_img, props.avatar, props.name)
    }
    return (
        <div className={s.postsContent}>
            <div className={s.postsForm}>
                <AddNewPost onSubmit={addNewPost}/>
            </div>
            {postElements}

        </div>
    );
});

export default MyPosts;