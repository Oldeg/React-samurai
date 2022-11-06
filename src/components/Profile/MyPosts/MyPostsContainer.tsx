import React from 'react';
import {
    addPostAC,
    changeNewTextAC
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
            dispatch(addPostAC())
        },
        updateNewPostText: (text: string) => {
            dispatch(changeNewTextAC(text))
        }
    }

}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
