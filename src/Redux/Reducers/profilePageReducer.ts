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
    profile: ProfileUserType | undefined
    status: string
}
export const initialState: InitialProfilePageReducerStateType = {
    posts: [],
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
        userId: 0,
        photos: {
            small: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
            large: "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
        },

    },
    status: ''
};

export const profilePageReducer = (state = initialState, action: ProfilePageReducerType): InitialProfilePageReducerStateType => {
    switch (action.type) {
        case 'ADD-POST': {
            return {
                ...state,
                posts: [...state.posts, {id: v1(), post: action.payload.value, like: Math.ceil(Math.random() * 100)}]
            }
        }
        case 'SET_USER_PROFILE': {
            return {...state, profile: action.payload.userProfile}
        }
        case 'SET_USER_STATUS': {
            return {...state, status: action.payload.status}
        }
        case 'DELETE-POST': {
            return {...state, posts: state.posts.filter(el => el.id !== action.payload.id)}
        }
        default:
            return state
    }

};
export type ProfilePageReducerType =
    ReturnType<typeof addPost>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setUserStatus>
    | ReturnType<typeof deletePost>

//actions
export const addPost = (value: string) => ({type: 'ADD-POST', payload: {value}}) as const
export const setUserProfile = (userProfile: ProfileUserType) => ({
    type: 'SET_USER_PROFILE',
    payload: {userProfile}
}) as const
export const setUserStatus = (status: string) => ({type: 'SET_USER_STATUS', payload: {status}}) as const
export const deletePost = (id: string) => ({type: 'DELETE-POST', payload: {id}}) as const
//thunks
export const getProfile = (id: string) => async (dispatch: Dispatch) => {
    const data = await profileAPI.getProfile(id)
    dispatch(setUserProfile(data))
}

export const getUserStatus = (userId: string) => async (dispatch: Dispatch) => {
    const response = await profileAPI.getUserStatus(userId)
    dispatch(setUserStatus(response.data))
}
export const updateUserStatus = (status: string) => async (dispatch: Dispatch) => {
    const response = await profileAPI.updateUserStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
}
export default profilePageReducer