import React from 'react';
import {
    addPost,
    changeNewText
} from "../../../Redux/Reduce/profilePageReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../../Redux/redux-store";

type PostsType = {
    id: string
    post: string
    like: number

}
type MapStateToPropsType = {
    posts: PostsType[]
    newPostText: string
}
type MapDispatchToProps = {
    addPost: () => void
    updateNewPostText: (text: string) => void
}
export type MyPostsType = MapStateToPropsType & MapDispatchToProps
const mapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }

}
const mapDispatchToProps = (dispatch: Dispatch):MapDispatchToProps => {
    return {
        addPost: () => {
            dispatch(addPost())
        },
        updateNewPostText: (text: string) => {
            dispatch(changeNewText(text))
        }
    }

}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
