import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileAPI} from "api/api";
import {EditProfileType} from 'components/Profile/ProfileForm/ProfileForm';
import {AppDispatch, AppStateType} from 'Redux/redux-store';
import {stopSubmit} from 'redux-form';
import life from 'assets/images/life.webp'
import ocean from 'assets/images/ocean.jpg'
import forest from 'assets/images/forest.jpg'
import animals from 'assets/images/animals.webp'
import ava1 from 'assets/images/ava-1.webp'
import ava2 from 'assets/images/ava-2.webp'
import ava3 from 'assets/images/ava-3.webp'
import ava4 from 'assets/images/ava-4.webp'


export type PostsType = {
    id: string
    post: string
    like: number
    image: string
    avatar?: string
    lastSeen: string
    name: string
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
    status: string,
    popup: boolean
}
export const initialState: InitialProfilePageReducerStateType = {
    posts: [{post: 'Life', image: life, like: 134, id: '1', avatar: ava1, lastSeen: '25 Min Ago', name: 'Merry Watson'},
        {post: 'Ocean', image: ocean, like: 64, id: '2', avatar: ava2, lastSeen: '46 Min Ago', name: 'Jon Wileyam'},
        {post: 'Forest', image: forest, like: 89, id: '3', avatar: ava3, lastSeen: '54 Min Ago', name: 'Anna Fray'},
        {
            post: 'Animals',
            image: animals,
            like: 45,
            id: '4',
            avatar: ava4,
            lastSeen: '13 Min Ago',
            name: 'Nick Jackson'
        }],
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
            small: "",
            large: ""
        },

    },
    status: '',
    popup: false
};

export const profilePageReducer = (state = initialState, action: ProfilePageReducerType): InitialProfilePageReducerStateType => {
    switch (action.type) {
        case 'ADD-POST': {
            return {
                ...state,
                posts: [{
                    id: v1(),
                    post: action.payload.value,
                    like: Math.ceil(Math.random() * 100),
                    image: action.payload.image,
                    lastSeen: Math.ceil(Math.random() * 100).toString() + ' Min Ago',
                    avatar: action.payload.avatar,
                    name: action.payload.name
                }, ...state.posts]
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
        case 'SET-USER-PHOTO': {
            return {
                ...state, profile: {...state.profile, photos: {...action.payload.photos}}

            }
        }
        case 'OPEN-POPUP': {
            return {...state, popup: action.payload}
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
    | ReturnType<typeof setUserPhotos>
    | ReturnType<typeof openPopup>


//actions
export const addPost = (value: string, image: string, avatar: string, name: string) => ({
    type: 'ADD-POST',
    payload: {value, image, avatar, name}
}) as const
export const openPopup = (value: boolean) => ({
    type: 'OPEN-POPUP',
    payload: value
}) as const
export const setUserProfile = (userProfile: ProfileUserType) => ({
    type: 'SET_USER_PROFILE',
    payload: {userProfile}
}) as const
export const setUserStatus = (status: string) => ({type: 'SET_USER_STATUS', payload: {status}}) as const
export const deletePost = (id: string) => ({type: 'DELETE-POST', payload: {id}}) as const
export const setUserPhotos = (photos: { small: string, large: string }) => ({
    type: 'SET-USER-PHOTO',
    payload: {photos}
}) as const
//thunks
export const getProfile = (id: string) => async (dispatch: Dispatch) => {
    const data = await profileAPI.getProfile(id)
    dispatch(setUserProfile(data))
    return data
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
export const saveUserPhoto = (photo: File) => async (dispatch: Dispatch) => {
    const response = await profileAPI.savePhoto(photo)
    if (response.data.resultCode === 0) {
        dispatch(setUserPhotos(response.data.data.photos))
    }
}
export const saveProfile = (profile: EditProfileType) => async (dispatch: AppDispatch, getState: () => AppStateType) => {
    const response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        const id = getState().auth.userId
        id && dispatch(getProfile(id.toString()))
    }
    if (response.data.resultCode === 1) {
        dispatch(stopSubmit('editProfile', {_error: response.data.messages[0]}))
    }
    return Promise.reject(response.data.messages[0])
}
export default profilePageReducer