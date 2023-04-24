import React from 'react';
import {InitialStateMessagesPageReducerType} from "Redux/Reducers/messagesPageReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "Redux/redux-store";
import {compose} from "redux";
import {withAuthRedirect} from "hoc/withAuthRedirect";

type MapStateToPropsType = {
    messagePage: InitialStateMessagesPageReducerType
}
type MapDispatchPropsType = {
    onNewMessageChange: (value: string) => void
}
export type DialogsPropsType = MapStateToPropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        messagePage: state.messagesPage,
    }
}


export const DialogsContainer = compose<React.ComponentType>(withAuthRedirect,
    connect(mapStateToProps, {}))(Dialogs)


