import React from 'react';
import {v1} from "uuid";

type PostsType = {
    id: string
    post: string
    like: number

}
export type InitialProfilePageReducerStateType = {
    posts: PostsType[]
    newPostText: string
}
export const initialState: InitialProfilePageReducerStateType = {
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

export const profilePageReducer = (state: InitialProfilePageReducerStateType = initialState, action: ActionsType): InitialProfilePageReducerStateType => {
    switch (action.type) {
        case 'ADD-POST':
            return {...state, posts: [...state.posts, {id: v1(), post: state.newPostText, like: 0}], newPostText: ''}
        case 'UPDATE-NEW-POST-TEXT' :

            return {...state, newPostText: action.newText}
    }
    return state
};
type ActionsType = AddPostACType | ChangeNewTextACType
type AddPostACType = ReturnType<typeof addPostAC>
type ChangeNewTextACType = ReturnType<typeof changeNewTextAC>
export const addPostAC = () => {
    return {
        type: 'ADD-POST',
    } as const
}
export const changeNewTextAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText
    } as const
}


export default profilePageReducer