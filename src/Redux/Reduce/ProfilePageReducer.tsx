import React from 'react';
import { PostsType, ProfilePageType} from "../../App";
import {v1} from "uuid";
import {ActionsType} from "../Store";

let initialState = {
        posts: [
            {id: v1(), post: 'Dog', like: 30},
            {id: v1(), post: 'Cars', like: 20},
            {id: v1(), post: 'Fruits', like: 34},
            {id: v1(), post: 'Cinema', like: 10},
            {id: v1(), post: 'Music', like: 14},
            {id: v1(), post: 'City', like: 398},
        ],
        newPostText: ''
    };

export const profilePageReducer = ( state: ProfilePageType = initialState , action: ActionsType) => {
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