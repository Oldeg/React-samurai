import React, {useLayoutEffect, useState} from 'react';
import s from './Dialogs.module.scss'
import {DialogsItem} from './DialogItem/DialogsItem';

import {DialogsPropsType} from "./DialogsContainer";
import {AppStateType, useAppDispatch} from 'Redux/redux-store';
import {requestUsers, UserType} from 'Redux/Reducers/usersReducer';
import {useSelector} from 'react-redux';
import {createDialogs, isTyping, setMessageT} from 'Redux/Reducers/messagesPageReducer';

export const Dialogs = (props: DialogsPropsType) => {
    useLayoutEffect(() => {
        debugger
        dispatch(requestUsers(1, 15))
    }, [])
    const dispatch = useAppDispatch()
    const users = useSelector<AppStateType, UserType[]>(state => state.usersPage.items)
    const myId = useSelector<AppStateType, string>(state => state.auth.userId)
    const messages = useSelector<AppStateType, {
        [key: string]: { id: number, message: string }[]
    }>(state => state.messagesPage.messages)
    const messageLoader = useSelector<AppStateType, boolean>(state => state.messagesPage.messageLoader)
    const userMessagesState = useSelector<AppStateType, string[]>(state => state.messagesPage.userMessagesState)
    const [select, setSelect] = useState({id: 0, name: '', lastSeen: 0})
    const [value, setValue] = useState('')


    const onClickHandler = (options: { id: number, name: string }) => {
        setSelect({...options, lastSeen: Math.ceil(Math.random() * 100)})
    }
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const userSendMessage = () => {
        dispatch(isTyping(true))
        const id = setTimeout(() => {
            dispatch(setMessageT(userMessagesState[Math.ceil(Math.random() * 10) - 1], select.id, select.id))
            dispatch(isTyping(false))
            clearTimeout(id)
        }, Math.ceil(Math.random() * 10000))

    }

    const sendMessage = () => {
        dispatch(setMessageT(value, select.id, Number(myId)))
        setValue('')
        userSendMessage()
    }
    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        e.key === 'Enter' && value && sendMessage()
    }
    return (
        <div className={s.container}>
            <div className={s.dialogsContainer}>
                <div className={s.dialogsList}>
                    <div className={s.dialogsList_header}>
                        <div className={s.settings}>
                            <span className={s.settings_item}></span>
                            <span className={s.settings_item}></span>
                            <span className={s.settings_item}></span>
                        </div>
                        <div className={s.inputWrap}><input className={s.search} placeholder={'Search'}/></div>
                    </div>
                    <div className={s.dialogs}>
                        {users.map(user => <DialogsItem key={user.id} name={user.name} image={user.photos.large}
                                                        id={user.id.toString()}
                                                        selected={user.id === select.id}
                                                        lastMessage={messages[user.id]}
                                                        onClick={(name: string) => onClickHandler({
                                                            id: user.id,
                                                            name
                                                        })}/>)}
                    </div>
                </div>
                <div className={s.messages}>
                    {select.name === '' ? null : <div className={s.messages_header}>
                        <div className={s.header_content}>
                            <h3 className={s.dialog_user_name}>
                                {select.name}
                            </h3>
                            {select.lastSeen === 0 ? null : messageLoader ?
                                <div className={s.loaderWrap}>
                                    <div className={s.loader}>
                                        <div className={s.loader_item}></div>
                                        <div className={s.loader_item}></div>
                                        <div className={s.loader_item}></div>
                                    </div>
                                    <p>typing</p>
                                </div>
                                : <p>
                                    {select.lastSeen > 59 ? 'Last seen recently' : `Last seen ${select.lastSeen} minutes ago`}
                                </p>
                            }
                        </div>
                    </div>}
                    {select.name === '' ? <div className={s.not_select_block}>
                            <span className={s.selectSmth}>Select a chat to start messaging</span>
                        </div> :
                        <div className={s.messages_main}>

                            {messages[select.id].map((i, index) => <div className={s.messageWrap} key={index}>
                                <div
                                    className={Number(myId) === i.id ? `${s.myMessageWrap} ${s.myLastMessage}` :
                                        ` ${s.userMessageWrap} ${s.userLastMessage}`}>
                                    <div
                                        className={Number(myId) === i.id ? s.message : `${s.message} ${s.userMessage}`}>{i.message}</div>
                                </div>
                            </div>)}


                        </div>
                    }
                    {select.name === '' ? null : <div className={s.input_block}>
                        <div className={s.clip}/>
                        <div className={s.inputWrap}>
                            <input type="text" className={s.message_input} placeholder={'Write a message...'}
                                   value={value}
                                   onChange={onChangeHandler}
                                   autoFocus={true}
                                   onKeyPress={onKeyPressHandler}/>
                        </div>
                        <div className={s.smile}/>
                        {value ? <div className={s.send} onClick={sendMessage}/> : <div className={s.microphone}/>}
                    </div>}
                </div>
            </div>
        </div>
    );
};


