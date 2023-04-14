import React from 'react';
import {addPost} from "Redux/Reducers/profilePageReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "Redux/redux-store";

type PostsType = {
    id: string
    post: string
    like: number
    image: string
    avatar?: string
    lastSeen: string
    name: string

}
type MapStateToPropsType = {
    posts: PostsType[]
    avatar: string,
    name: string
}
type MapDispatchToProps = {
    addPost: (value: string, image: string, avatar: string, name: string) => void

}
export type MyPostsType = MapStateToPropsType & MapDispatchToProps
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        avatar: state.profilePage.profile.photos.large,
        name: state.profilePage.profile.fullName
    }

}

export const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts)
