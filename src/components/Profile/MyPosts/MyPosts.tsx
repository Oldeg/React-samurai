import React, {ChangeEvent,} from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css'
import {MyPostsType} from "./MyPostsContainer";

const MyPosts = (props: MyPostsType) => {

    let postElements = props.posts.map(post => <Post key={post.id} post={post.post} like={post.like} id={post.id}/>)

    let onAddPost = () => {
        props.addPost()
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }
    return (
        <div>
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea onChange={onPostChange} value={props.newPostText}/>
                    </div>
                    <div>
                        <button onClick={onAddPost}>
                            Add posts
                        </button>
                    </div>
                    <button>
                        Remove
                    </button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
};

export default MyPosts;