import React from 'react';
import {InitialStateMessagesPageReducerType, sendMessage} from "../../Redux/Reducers/messagesPageReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type MapStateToPropsType = {
    messagePage: InitialStateMessagesPageReducerType
}
type MapDispatchPropsType = {
    sendMessage: (value: string) => void
    onNewMessageChange: (value: string) => void
}
export type DialogsPropsType = MapStateToPropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        messagePage: state.messagesPage,
    }
}

/*const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        sendMessage: () => {
            dispatch(sendMessage())
        },
        onNewMessageChange: (value: string) => {
            dispatch(updateNewMessageBody(value))
        }

    }
}*/

export const DialogsContainer = compose<React.ComponentType>(withAuthRedirect,
    connect(mapStateToProps, {sendMessage}))(Dialogs)


