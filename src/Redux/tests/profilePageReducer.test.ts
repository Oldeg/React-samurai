import {v1} from "uuid";
import {
    addPost, deletePost,
    InitialProfilePageReducerStateType,
    profilePageReducer, ProfileUserType
} from "../Reducers/profilePageReducer";

let startState: InitialProfilePageReducerStateType
beforeEach(() => {
    startState = {
        posts: [
            {id: v1(), post: 'Dog', like: 30, image: '', lastSeen: '', avatar: '', name: ''},
            {id: v1(), post: 'Cars', like: 20, image: '', lastSeen: '', avatar: '', name: ''},
            {id: v1(), post: 'Fruits', like: 34, image: '', lastSeen: '', avatar: '', name: ''},
            {id: v1(), post: 'Cinema', like: 10, image: '', lastSeen: '', avatar: '', name: ''},
            {id: v1(), post: 'Music', like: 14, image: '', lastSeen: '', avatar: '', name: ''},
            {id: 'fff', post: 'City', like: 398, image: '', lastSeen: '', avatar: '', name: ''},
        ],
        profile: {} as ProfileUserType,
        status: ''
    }
})
test('New post should be added', () => {

    expect(startState.posts.length).toBe(6)
    const endState = profilePageReducer(startState, addPost('', '', '', ''))
    expect(endState.posts.length).toBe(7)
    expect(endState.posts[6].post).toBe('')


})
test('Correct post should be deleted', () => {

    expect(startState.posts.length).toBe(6)
    const endState = profilePageReducer(startState, deletePost('fff'))
    expect(endState.posts.length).toBe(5)


})


