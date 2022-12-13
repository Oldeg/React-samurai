import React from 'react';
import s from './Dialogs.module.css'
import {DialogsItem} from './DialogItem/DialogsItem';
import {Message} from './Message/Message';

import {DialogsPropsType} from "./DialogsContainer";
import AddMessageFormRedux, {MessageFormType} from "./MessageForm";


export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.messagePage.dialogs.map((dialog) => <DialogsItem key={dialog.id} name={dialog.name}
                                                                                 id={dialog.id}/>)
    let messageElements = props.messagePage.messages.map(mess => <div key={mess.id}><Message text={mess.message}
                                                                                             id={mess.id}/></div>)


    const addNewMessage = (values: MessageFormType) => {
        props.sendMessage(values.newMessageBody)
    }
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messageElements}
                </div>

            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    );
};


