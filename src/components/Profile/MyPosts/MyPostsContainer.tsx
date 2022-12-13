import React from 'react';
import {addPost} from "../../../Redux/Reducers/profilePageReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";

type PostsType = {
    id: string
    post: string
    like: number

}
type MapStateToPropsType = {
    posts: PostsType[]
}
type MapDispatchToProps = {
    addPost: (value: string) => void

}
export type MyPostsType = MapStateToPropsType & MapDispatchToProps
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
    }

}
/*const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        addPost: () => {
            dispatch(addPost())
        }
    }
}*/
export const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts)
