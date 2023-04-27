import {AppDispatch} from 'Redux/redux-store';

export type InitialStateMessagesPageReducerType = {
    messages: { [key: string]: { id: number, message: string }[] }
    userMessagesState: string[]
    time: string
    lastMessage: string
    messageLoader: boolean
}

let initialState: InitialStateMessagesPageReducerType = {
    messages: {},
    userMessagesState: ['Hi!', 'How are you?', 'What do you do?', 'How can i help you?', 'I am fine, and you?',
        'Was you at exhibition yesterday?', 'What your favourite dishes?', 'Do you lake animals?',
        'My favourite film is `Matrix`', 'Bye)'],
    time: '',
    lastMessage: '',
    messageLoader: false
}

export const messagesPageReducer = (state: InitialStateMessagesPageReducerType = initialState, action: MessagesPageReducerType): InitialStateMessagesPageReducerType => {
    switch (action.type) {

        case 'CREATE-DIALOGS': {
            return {
                ...state,
                messages: state.messages[action.payload.id] !== undefined ? {
                    ...state.messages,
                    [action.payload.id]: [...state.messages[action.payload.id]]
                } : {...state.messages, [action.payload.id]: []},
            }
        }
        case 'SET-MESSAGE': {
            return {
                ...state, messages: {
                    ...state.messages,
                    [action.payload.id]: [...state.messages[action.payload.id], {
                        message: action.payload.message,
                        id: action.payload.messageId
                    }]
                }
            }
        }
        case 'IS-TYPING': {
            return {...state, messageLoader: action.payload}
        }

        default :
            return state
    }

};
export type MessagesPageReducerType = SendMessageACType
type SendMessageACType =
    ReturnType<typeof setMessage>
    | ReturnType<typeof createDialogs>
    | ReturnType<typeof setLastMessage>
    | ReturnType<typeof isTyping>

export const setMessageT = (message: string, id: number, messageId: number) => (dispatch: AppDispatch) => {
    dispatch(setMessage(message, id, messageId))
    dispatch(setLastMessage(message))
}
export const setMessage = (message: string, id: number, messageId: number) => ({
    type: 'SET-MESSAGE',
    payload: {
        message, id, messageId
    }

} as const)

export const createDialogs = (id: number) => ({
    type: 'CREATE-DIALOGS',
    payload: {
        id
    }

} as const)

export const setLastMessage = (message: string) => ({
    type: 'SET-LAST-MESSAGE',
    payload: {
        message
    }

} as const)
export const isTyping = (typing: boolean) => ({
    type: 'IS-TYPING',
    payload: typing


} as const)
export default messagesPageReducer;
