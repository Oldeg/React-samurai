import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileAPI} from "../../api/api";

export type PostsType = {
    id: string
    post: string
    like: number

}

export type ProfileUserType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: null
        vk: string
        twitter: string
        instagram: string
        youtube: null
        github: string
        mainLink: null
    },
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string, large: string
    }

}
export type InitialProfilePageReducerStateType = {
    posts: PostsType[]
    newPostText: string
    profile: ProfileUserType
}
export const initialState: InitialProfilePageReducerStateType = {
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

export const profilePageReducer = (state: InitialProfilePageReducerStateType = initialState, action: ActionsType): InitialProfilePageReducerStateType => {
    switch (action.type) {
        case 'ADD-POST': {
            return {...state, posts: [...state.posts, {id: v1(), post: state.newPostText, like: 0}], newPostText: ''}
        }
        case 'UPDATE-NEW-POST-TEXT' : {
            return {...state, newPostText: action.newText}
        }
        case 'SET_USER_PROFILE': {
            return {...state, profile: action.payload.userProfile}
        }
        default:
            return state
    }

};
type ActionsType = AddPostACType | ChangeNewTextACType | setUserProfileACType
type AddPostACType = ReturnType<typeof addPost>
type ChangeNewTextACType = ReturnType<typeof changeNewText>
type setUserProfileACType = ReturnType<typeof setUserProfile>
export const addPost = () => {
    return {
        type: 'ADD-POST',
    } as const
}
export const changeNewText = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText
    } as const
}
export const setUserProfile = (userProfile: ProfileUserType) => {
    return {
        type: 'SET_USER_PROFILE',
        payload: {
            userProfile
        }
    } as const
}
export const getProfile = (id: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getProfile(id).then(data => {
            dispatch(setUserProfile(data))
        })
    }
}

export default profilePageReducer