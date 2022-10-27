import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogsItem} from './DialogItem/DialogsItem';
import {Message} from './Message/Message';
import {MessagesPageType} from '../../App';
import { sendMessage, updateNewMessageBody} from "../../Redux/Reduce/MessagesPageReducer";
import {ActionsType} from "../../Redux/State";
type DialogsPropsType = {
    messagePage: MessagesPageType
    dispatch: (action: ActionsType) => void
    newMessageBody: string
}

export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.messagePage.dialogs.map((dialog) => <DialogsItem key={dialog.id} name={dialog.name}
                                                                                 id={dialog.id}/>)
    let messageElements = props.messagePage.messages.map(mess => <div><Message key={mess.id} text={mess.message}
                                                                               id={mess.id}/></div>)

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageBody(e.currentTarget.value))
    }
    const onSendMessageClick = () => {
        props.dispatch(sendMessage())


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


