import {v1} from "uuid";
import {
    addPostAC,
    changeNewTextAC,
    InitialProfilePageReducerStateType,
    profilePageReducer
} from "../Reduce/profilePageReducer";



test('New post should be added', () => {
    const startState: InitialProfilePageReducerStateType = {
        posts: [
            {id: v1(), post: 'Dog', like: 30},
            {id: v1(), post: 'Cars', like: 20},
            {id: v1(), post: 'Fruits', like: 34},
            {id: v1(), post: 'Cinema', like: 10},
            {id: v1(), post: 'Music', like: 14},
            {id: v1(), post: 'City', like: 398},
        ],
        newPostText: ''
    };
    expect(startState.posts.length).toBe(6)
    const endState = profilePageReducer(startState, addPostAC())
    expect(endState.posts.length).toBe(7)
    expect(endState.posts[6].post).toBe('')
    expect(endState.posts[6].like).toBe(0)


})
test('Posts text should be updated', () => {
    const startState: InitialProfilePageReducerStateType = {
        posts: [
            {id: v1(), post: 'Dog', like: 30},
            {id: v1(), post: 'Cars', like: 20},
            {id: v1(), post: 'Fruits', like: 34},
            {id: v1(), post: 'Cinema', like: 10},
            {id: v1(), post: 'Music', like: 14},
            {id: v1(), post: 'City', like: 398},
        ],
        newPostText: ''
    };

    const endState = profilePageReducer(startState, changeNewTextAC('Hey'))
   expect(endState.posts.length).toBe(6)
    expect(endState.newPostText).toBe('Hey')



})