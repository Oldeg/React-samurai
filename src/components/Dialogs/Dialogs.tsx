import React, {useLayoutEffect, useState} from 'react';
import s from './Dialogs.module.scss'
import {DialogsItem} from './DialogItem/DialogsItem';

import {DialogsPropsType} from "./DialogsContainer";
import {AppStateType, useAppDispatch} from 'Redux/redux-store';
import {requestUsers, UserType} from 'Redux/Reducers/usersReducer';
import {useSelector} from 'react-redux';
import {createDialogs, setMyMessage} from 'Redux/Reducers/messagesPageReducer';

export const Dialogs = (props: DialogsPropsType) => {
    const dispatch = useAppDispatch()
    const users = useSelector<AppStateType, UserType[]>(state => state.usersPage.items)
    const myMessages = useSelector<AppStateType, { [key: string]: string[] }>(state => state.messagesPage.myMessages)
    const [select, setSelect] = useState({id: 0, name: '', lastSeen: 0})
    const [value, setValue] = useState('')
    const lastMessage = select.id !==0  && myMessages[select.id][myMessages[select.id]?.length-1]

        useLayoutEffect(() => {
            dispatch(requestUsers(1, 15))
        }, [])

    const onClickHandler = (options: { id: number, name: string }) => {
        setSelect({...options, lastSeen: Math.ceil(Math.random() * 100)})
        dispatch(createDialogs(options.id))
    }
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const sendMessage = () => {
        dispatch(setMyMessage(value, select.id))
        setValue('')
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
                            {select.lastSeen === 0 ? null : <p>
                                {select.lastSeen > 59 ? 'Last seen recently' : `Last seen ${select.lastSeen} minutes ago`}
                            </p>}
                        </div>
                    </div>}
                    {select.name === '' ? <div className={s.not_select_block}>
                            <span className={s.selectSmth}>Select a chat to start messaging</span>
                        </div> :
                        <div className={s.messages_main}>

                            <div className={s.myMessages}>
                                {myMessages[select.id].map((i, index) => <div
                                    className={s.messageWrap} key={index}>
                                    <div className={lastMessage === i ? `${s.message} ${s.lastMessage}`: `${s.message}`}>
                                        {i}
                                    </div>
                                </div>)}
                            </div>

                            <div className={s.userMessages}>

                            </div>
                        </div>
                    }
                    {select.name === '' ? null : <div className={s.input_block}>
                        <div className={s.clip}/>
                        <div className={s.inputWrap}>
                            <input type="text" className={s.message_input} placeholder={'Write a message...'}
                                   value={value}
                                   onChange={onChangeHandler}
                            autoFocus={true}/>
                        </div>
                        <div className={s.smile}/>
                        {value ? <div className={s.send} onClick={sendMessage}/> : <div className={s.microphone}/>}
                    </div>}
                </div>
            </div>
        </div>
    );
};


