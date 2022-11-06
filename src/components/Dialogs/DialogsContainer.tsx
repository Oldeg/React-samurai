import React from 'react';
import {InitialStateMessagesPageReducerType, sendMessageAC, updateNewMessageBodyAC} from "../../Redux/Reduce/messagesPageReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    messagePage: InitialStateMessagesPageReducerType
    newMessageBody: string
}
type MapDispatchPropsType = {
    sendMessage: () => void
    onNewMessageChange: (value: string) => void
}
export type DialogsPropsType = MapStateToPropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        messagePage: state.messagesPage,
        newMessageBody: state.messagesPage.newMessageBody
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        sendMessage: () => {
            dispatch(sendMessageAC())
        },
        onNewMessageChange: (value: string) => {
            dispatch(updateNewMessageBodyAC(value))
        }

    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


