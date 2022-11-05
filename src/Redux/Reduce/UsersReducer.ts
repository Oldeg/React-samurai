import {v1} from "uuid";

export type initialStateUsersType = {
    users: UserType[]
}
export type UserType = {
    id: string
    fullName: string
    status: string
    followed: boolean
    location: { city: string, country: string }
}

const initialState: initialStateUsersType = {
    users: [
        {
            id: v1(),
            fullName: 'Dmitry',
            status: 'Nice looking',
            followed: true,
            location: {city: 'Minsk', country: 'Belarus',}
        },
        {
            id: v1(),
            fullName: 'Nick',
            status: 'Looking for a job',
            followed: false,
            location: {city: 'Warshaw', country: 'Poland'}
        },
        {
            id: v1(),
            fullName: 'Artem',
            status: 'Like swimming',
            followed: true,
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: v1(),
            fullName: 'Daniel',
            status: 'I want to buy a car',
            followed: false,
            location: {city: 'Chicago', country: 'USA'}
        }
    ]

}

const usersReducer = (state: initialStateUsersType = initialState, action: ActionsType): initialStateUsersType => {
    switch (action.type) {
        case 'FOLLOW' : {
            return {
                ...state,
                users: state.users.map(el => el.id === action.payload.userID ? {...el, followed: true} : el)
            }
        }
        case 'UNFOLLOW': {
            return {
                ...state,
                users: state.users.map(el => el.id === action.payload.userID ? {...el, followed: false} : el)
            }
        }
        case 'SET_USERS': {
            return {...state, users: [...state.users, ...action.payload.users]}
        }
        default:
            return state
    }

};
export type ActionsType = FollowACType | UnFollowACType | setUsersACType
type setUsersACType = ReturnType<typeof setUsersAC>
type FollowACType = ReturnType<typeof followAC>
type UnFollowACType = ReturnType<typeof unFollowAC>
export const followAC = (userID: string) => {
    return {
        type: 'FOLLOW',
        payload: {
            userID
        }

    } as const
}
export const unFollowAC = (userID: string) => {
    return {
        type: 'UNFOLLOW',
        payload: {
            userID
        }

    } as const
}
export const setUsersAC = (users:Array<UserType>) => {
    return {
        type: 'SET_USERS',
        payload: {
            users
        }

    } as const
}

export default usersReducer;
