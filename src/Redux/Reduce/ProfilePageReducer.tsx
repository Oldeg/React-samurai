import React from 'react';
import { PostsType, ProfilePageType} from "../../App";
import {v1} from "uuid";
import {ActionsType} from "../State";

const profilePageReducer = ( state: ProfilePageType , action: ActionsType) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostsType = {id: v1(), post: state.newPostText, like: 0}
            state.posts.push(newPost)
            state.newPostText = '';
            return state
        case 'UPDATE-NEW-POST-TEXT' :
            state.newPostText = action.newText
            return state
    }
    return state
};
export const addPostActionCreator = () => {
    return {
        type: 'ADD-POST',
    } as const
}
export const changeNewTextActionCreator = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText
    } as const
}


export default profilePageReducer