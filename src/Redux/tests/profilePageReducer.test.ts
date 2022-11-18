import {v1} from "uuid";
import {
    addPost,
    changeNewText,
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
        newPostText: '',
        profile: {
            aboutMe: "я круто чувак 1001%",
            contacts: {
                facebook: "facebook.com",
                website: null,
                vk: "vk.com/dimych",
                twitter: "https://twitter.com/@sdf",
                instagram: "instagra.com/sds",
                youtube: null,
                github: "github.com",
                mainLink: null
            },
            lookingForAJob: true,
            lookingForAJobDescription: "не ищу, а дурачусь",
            fullName: "samurai dimych",
            userId: 2,
            photos: {
                small: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
                large: "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
            }
        }
    };
    expect(startState.posts.length).toBe(6)
    const endState = profilePageReducer(startState, addPost())
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
        newPostText: '',
        profile: {
            aboutMe: "я круто чувак 1001%",
            contacts: {
                facebook: "facebook.com",
                website: null,
                vk: "vk.com/dimych",
                twitter: "https://twitter.com/@sdf",
                instagram: "instagra.com/sds",
                youtube: null,
                github: "github.com",
                mainLink: null
            },
            lookingForAJob: true,
            lookingForAJobDescription: "не ищу, а дурачусь",
            fullName: "samurai dimych",
            userId: 2,
            photos: {
                small: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
                large: "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
            }
        }
    };

    const endState = profilePageReducer(startState, changeNewText('Hey'))
   expect(endState.posts.length).toBe(6)
    expect(endState.newPostText).toBe('Hey')



})