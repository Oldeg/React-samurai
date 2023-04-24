export type InitialStateMessagesPageReducerType = {
    myMessages: { [key: string]: string[] }
    userMessages: { [key: string]: string[] }
    time: string
}

let initialState: InitialStateMessagesPageReducerType = {
    myMessages: {},
    userMessages: {},
    time: '',
}

export const messagesPageReducer = (state: InitialStateMessagesPageReducerType = initialState, action: MessagesPageReducerType): InitialStateMessagesPageReducerType => {
    switch (action.type) {

        case 'CREATE-DIALOGS': {
            return {
                ...state,
                myMessages: state.myMessages[action.payload.id] !== undefined ? {
                    ...state.myMessages,
                    [action.payload.id]: [...state.myMessages[action.payload.id]]
                } : {...state.myMessages, [action.payload.id]: []},
                userMessages: state.userMessages[action.payload.id] !== undefined ? {
                    ...state.userMessages,
                    [action.payload.id]: [...state.userMessages[action.payload.id]]
                } : {...state.userMessages, [action.payload.id]: []},
            }
        }
        case 'SET-MY-MESSAGE': {
            return {
                ...state, myMessages: {
                    ...state.myMessages,
                    [action.payload.id]: [...state.myMessages[action.payload.id], action.payload.message]
                }
            }
        }

        default :
            return state
    }

};
export type MessagesPageReducerType = SendMessageACType
type SendMessageACType =
    ReturnType<typeof setMyMessage>
    | ReturnType<typeof setUserMessage>
    | ReturnType<typeof createDialogs>


export const setMyMessage = (message: string, id: number) => ({
    type: 'SET-MY-MESSAGE',
    payload: {
        message, id
    }

} as const)

export const setUserMessage = (message: string, id: number) => ({
    type: 'SET-OTHER-MESSAGE',
    payload: {
        message, id
    }

} as const)
export const createDialogs = (id: number) => ({
    type: 'CREATE-DIALOGS',
    payload: {
        id
    }

} as const)

export default messagesPageReducer;
