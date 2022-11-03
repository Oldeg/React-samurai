import React from 'react';
import {v1} from "uuid";

type DialogsType = {
    id: string
    name: string
}
type MessagesType = {
    id: string
    message: string


}
export type InitialStateMessagesPageReducerType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody: string
}
let initialState:InitialStateMessagesPageReducerType = {
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

export const messagesPageReducer = (state:InitialStateMessagesPageReducerType = initialState , action:ActionsType ):InitialStateMessagesPageReducerType => {
    switch(action.type){
        case 'UPDATE-NEW-MESSAGE-BODY' :
            return {...state, newMessageBody: action.newMessageBody}
        case 'SEND-MESSAGE' :
            return {...state, messages: [...state.messages,{id: v1(), message: state.newMessageBody}], newMessageBody: ''}
    }
    return state
};
export type ActionsType = UpdateNewMessageBodyACType |SendMessageACType
type UpdateNewMessageBodyACType = ReturnType<typeof updateNewMessageBodyAC>
type SendMessageACType = ReturnType<typeof sendMessageAC>
export const updateNewMessageBodyAC = (newMessageBody: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        newMessageBody: newMessageBody
    } as const
}
export const sendMessageAC = () => {
    return {
        type: 'SEND-MESSAGE',

    } as const
}

export default  messagesPageReducer;
