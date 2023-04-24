import {v1} from "uuid";
import  {
    InitialStateMessagesPageReducerType,
    messagesPageReducer
} from "../Reducers/messagesPageReducer";


/*test('Message body should be updated', () => {
    const startState: InitialStateMessagesPageReducerType = {
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
        ],

    }
    expect(startState.newMessageBody).toBe('')
    const endState = messagesPageReducer(startState, updateNewMessageBody('Hello, what are you doing now?'))

    expect(endState.newMessageBody).toBe('Hello, what are you doing now?')


})*/
/*
test('Message should be send', () => {
    const startState: InitialStateMessagesPageReducerType = {
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
        ],
    }
    const endState = messagesPageReducer(startState, sendMessage(''))

    expect(endState.messages.length).toBe(7)
    expect(endState.messages[6].message).toBe('')


})*/
