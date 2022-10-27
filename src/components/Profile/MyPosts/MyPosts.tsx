import React, {ChangeEvent,} from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css'
import {PostsType} from '../../../App';
import { addPostActionCreator, changeNewTextActionCreator} from "../../../Redux/Reduce/ProfilePageReducer";
import {ActionsType} from "../../../Redux/State";

type MyPostsType = {
    posts: Array<PostsType>
    newPostText:string
    dispatch: (action:ActionsType) => void
}
const MyPosts = (props: MyPostsType) => {

    let postElements = props.posts.map(post => <Post key={post.id} post={post.post} like={post.like} id={post.id}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let addPost = () => {
    let text = newPostElement.current!.value;
    if(text){props.dispatch(addPostActionCreator())}
    }
   const newPostText = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changeNewTextActionCreator(e.currentTarget.value))}
    return (
        <div>
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea ref={newPostElement} onChange={newPostText} value = {props.newPostText}/>
                    </div>
                    <div>
                        <button onClick={addPost}>
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