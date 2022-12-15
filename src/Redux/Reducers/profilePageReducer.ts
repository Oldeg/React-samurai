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
    profile: ProfileUserType
    status: string
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
            return {...state, posts: [...state.posts, {id: v1(), post: action.payload.value, like: Math.ceil(Math.random()*100)}]}
        }
        case 'SET_USER_PROFILE': {
            return {...state, profile: action.payload.userProfile}
        }
        case 'SET_USER_STATUS': {
            return {...state, status: action.payload.status}
        }
        default:
            return state
    }

};
export type ProfilePageReducerType = AddPostACType | setUserProfileACType | setUserStatusType;
type AddPostACType = ReturnType<typeof addPost>
type setUserProfileACType = ReturnType<typeof setUserProfile>
type setUserStatusType = ReturnType<typeof setUserStatus>
export const addPost = (value:string) => {
    return {
        type: 'ADD-POST',
        payload:{
            value
        }
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
export const setUserStatus = (status: string) => {
    return {
        type: 'SET_USER_STATUS',
        payload: {
            status
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
export const getUserStatus = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getUserStatus(userId).then(response => {
            dispatch(setUserStatus(response.data))
        })
    }
}
export const updateUserStatus = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateUserStatus(status).then(response => {
            if(response.data.resultCode === 0){
                dispatch(setUserStatus(status))
            }


        })
    }
}
export default profilePageReducer