import React from 'react';
import {v1} from "uuid";
import {MessagesPageType} from "../../App";
import {ActionsType} from "../State";

export const messagesPageReducer = (state:MessagesPageType, action: ActionsType) => {
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
