import {v1} from 'uuid';


type SideBarType = {
    elements: Array<ElementsType>

}
type ElementsType = {
    name: string
}
 type StoreType = {
    _state: StateType
    _callsubscriber: () => void
    subscribe: (observer: () => void) => void
    getState: () => StateType

}
type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
    sidebar: SideBarType
}
type MessagesPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody: string
}
type MessagesType = {
    id: string
    message: string
}
type DialogsType = {
    id: string
    name: string
}
type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}

type PostsType = {
    id: string
    post: string
    like: number

}

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

}
export default store;






