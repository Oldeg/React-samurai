import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogsItem} from './DialogItem/DialogsItem';
import {Message} from './Message/Message';
import {MessagesPageType} from '../../App';

type DialogsPropsType = {
    messagePage: MessagesPageType
    sendMessage: () => void
    newMessageBody: string
    onNewMessageChange: (value: string) => void
}

export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.messagePage.dialogs.map((dialog) => <DialogsItem key={dialog.id} name={dialog.name}
                                                                                 id={dialog.id}/>)
    let messageElements = props.messagePage.messages.map(mess => <div><Message key={mess.id} text={mess.message}
                                                                               id={mess.id}/></div>)

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onNewMessageChange(e.currentTarget.value)
    }
    const onSendMessageClick = () => {
        props.sendMessage()

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
            <div>
                <div><textarea onChange={onNewMessageChange}
                               value={props.newMessageBody}
                               placeholder={'Enter your message'}/></div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>
    );
};


