import {v1} from "uuid";

type DialogsType = {
    id: string
    name: string
}
type MessagesType = {
    id: string
    message: string


}
export type InitialStateMessagesPageReducerType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>

}
let initialState: InitialStateMessagesPageReducerType = {
    dialogs: [
        {id: v1(), name: 'Dimych'},
        {id: v1(), name: 'Victor'},
        {id: v1(), name: 'Valera'},
        {id: v1(), name: 'Sveta'},
        {id: v1(), name: 'Vova'},
        {id: v1(), name: 'Nikita'},
    ],
    messages: [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'How are you?'},
        {id: v1(), message: 'Nice day'},
        {id: v1(), message: 'Nice to meet you'},
        {id: v1(), message: 'All right'},
        {id: v1(), message: 'Cavabanga'},
    ]
};

export const messagesPageReducer = (state: InitialStateMessagesPageReducerType = initialState, action: ActionsType): InitialStateMessagesPageReducerType => {
    switch (action.type) {

        case 'SEND-MESSAGE' :
            return {
                ...state,
                messages: [...state.messages, {id: v1(), message: action.payload.value}],
            }
    }
    return state
};
export type ActionsType =  SendMessageACType
type SendMessageACType = ReturnType<typeof sendMessage>

export const sendMessage = (value:string) => {
    return {
        type: 'SEND-MESSAGE',
        payload:{
            value
        }

    } as const
}

export default messagesPageReducer;
