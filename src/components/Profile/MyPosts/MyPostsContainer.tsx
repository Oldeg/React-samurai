import React from 'react';
import {addPostActionCreator, changeNewTextActionCreator} from "../../../Redux/Reduce/ProfilePageReducer";
import {StoreType} from "../../../Redux/Store";
import MyPosts from "./MyPosts";
import {StoreContext} from "../../../StoreContext";

type MyPostsType = {}
export const MyPostsContainer = (props: MyPostsType) => {
    return (
        <StoreContext.Consumer>{
            (store) => {
                let addPost = () => {
                    store.dispatch.bind(store)(addPostActionCreator())
                }
                const onPostChange = (text: string) => {
                    store.dispatch.bind(store)(changeNewTextActionCreator(text))
                }

                return <MyPosts updateNewPostText={onPostChange} addPost={addPost}
                                posts={store.getState().profilePage.posts}
                                newPostText={store.getState().profilePage.newPostText}/>
            }

        }
        </StoreContext.Consumer>


    );
};

