import React from 'react';
import {sendMessage, updateNewMessageBody} from "../../Redux/Reduce/MessagesPageReducer";
import {StoreType} from "../../Redux/Store";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";

type DialogsPropsType = {
    /*store: StoreType*/
}

export const DialogsContainer = (props: DialogsPropsType) => {
    return (
        <StoreContext.Consumer>{
            (store )=> {
                const onNewMessageChange = (value: string) => {
                    store.dispatch.bind(store)(updateNewMessageBody(value))
                }
                const onSendMessageClick = () => {
                    store.dispatch.bind(store)(sendMessage())}
          return   <Dialogs
                messagePage={store.getState().messagesPage}
                newMessageBody={store.getState().messagesPage.newMessageBody}
                sendMessage={onSendMessageClick}
                onNewMessageChange={onNewMessageChange}
            />
        }}

        </StoreContext.Consumer>


    );
};


