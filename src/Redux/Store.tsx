import {v1} from 'uuid';
import {StateType} from '../App';
import messagesPageReducer, {sendMessage, updateNewMessageBody} from "./Reduce/MessagesPageReducer";
import profilePageReducer, {addPostActionCreator, changeNewTextActionCreator} from "./Reduce/ProfilePageReducer";
import sidebarReducer from "./Reduce/SidebarReducer";

export type StoreType = {
    _state: StateType
    _callsubscriber: () => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionsType) => void
}
export type ActionsType =
    ReturnType<typeof updateNewMessageBody> |
    ReturnType<typeof sendMessage> |
    ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof changeNewTextActionCreator>
let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), post: 'Dog', like: 30},
                {id: v1(), post: 'Cars', like: 20},
                {id: v1(), post: 'Fruits', like: 34},
                {id: v1(), post: 'Cinema', like: 10},
                {id: v1(), post: 'Music', like: 14},
                {id: v1(), post: 'City', like: 398},
            ],
            newPostText: ''
        },
        messagesPage: {
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
            newMessageBody: ''
        },
        sidebar: {
            elements: [
                {name: 'Sveta'}, {name: 'Victor'}, {name: 'Nikita'}]
        }


    },
    _callsubscriber() {
        console.log('State changed')
    },
    subscribe(observer: () => void) {
        this._callsubscriber = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) {

        this._state.profilePage = profilePageReducer(this._state.profilePage, action)
        this._state.messagesPage = messagesPageReducer(this._state.messagesPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callsubscriber();

    }
}
export default store;






