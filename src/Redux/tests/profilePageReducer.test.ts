import {v1} from "uuid";
import {
    addPost, deletePost,
    InitialProfilePageReducerStateType,
    profilePageReducer
} from "../Reducers/profilePageReducer";
let startState: InitialProfilePageReducerStateType
beforeEach(() => {
    startState = {
        posts: [
            {id: v1(), post: 'Dog', like: 30},
            {id: v1(), post: 'Cars', like: 20},
            {id: v1(), post: 'Fruits', like: 34},
            {id: v1(), post: 'Cinema', like: 10},
            {id: v1(), post: 'Music', like: 14},
            {id:'fff', post: 'City', like: 398},
        ],
        profile: undefined,
        status: ''
    }
})
test('New post should be added', () => {

    expect(startState.posts.length).toBe(6)
    const endState = profilePageReducer(startState, addPost(''))
    expect(endState.posts.length).toBe(7)
    expect(endState.posts[6].post).toBe('')


})
test('Correct post should be deleted', () => {

    expect(startState.posts.length).toBe(6)
    const endState = profilePageReducer(startState, deletePost('fff'))
    expect(endState.posts.length).toBe(5)



})


