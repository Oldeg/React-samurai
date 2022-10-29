import React from 'react';
import {v1} from "uuid";
import {MessagesPageType} from "../../App";
import {ActionsType} from "../Store";

let initialState = {
    dialogs: [
        {id: v1(), name: 'Dimych'},
        {id: v1(), name: 'Victor'},
        {id: v1(), name: 'Valera'},
        {id: v1(), name: 'Sveta'},
        {id: v1(), name: 'Vova'},
        {id: v1(), name: 'Nikita'},
    ],
    messages: [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'How are you?'},
        {id: v1(), message: 'Nice day'},
        {id: v1(), message: 'Nice to meet you'},
        {id: v1(), message: 'All right'},
        {id: v1(), message: 'Cavabanga'},
    ],
    newMessageBody: ''
};

export const messagesPageReducer = (state:MessagesPageType = initialState , action: ActionsType) => {
    switch(action.type){
        case 'UPDATE-NEW-MESSAGE-BODY' :
            state.newMessageBody = action.newMessageBody
            return state
        case 'SEND-MESSAGE' :
            state.messages.push({id: v1(), message: state.newMessageBody},)
            state.newMessageBody = '';
            return state
    }
    return state
};
export const updateNewMessageBody = (newMessageBody: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        newMessageBody: newMessageBody
    } as const
}
export const sendMessage = () => {
    return {
        type: 'SEND-MESSAGE',

    } as const
}

export default  messagesPageReducer;
