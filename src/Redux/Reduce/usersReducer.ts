

export type initialStateUsersType = {
    items: UserType[]
}
export type UserType = {
    id: number
    name: string
    status: null
    followed: boolean
    uniqueUrlName: null
    photos: {
        small: null
        large: null
    }
}

const initialState: initialStateUsersType = {
    items: [
        {
            name: "Alex",
            id: 87364,
            uniqueUrlName: null,
            photos: {
                "small": null,
                "large": null
            },
            status: null,
            followed: false
        }

    ]

}

const usersReducer = (state: initialStateUsersType = initialState, action: ActionsType): initialStateUsersType => {
    switch (action.type) {
        case 'FOLLOW' : {
            return {
                ...state,
                items: state.items.map(el => el.id === action.payload.userID ? {...el, followed: true} : el)
            }
        }
        case 'UNFOLLOW': {
            return {
                ...state,
                items: state.items.map(el => el.id === action.payload.userID ? {...el, followed: false} : el)
            }
        }
        case 'SET_USERS': {
            return {...state, items: [...state.items, ...action.payload.users]}
        }
        default:
            return state
    }

};
export type ActionsType = FollowACType | UnFollowACType | setUsersACType
type setUsersACType = ReturnType<typeof setUsersAC>
type FollowACType = ReturnType<typeof followAC>
type UnFollowACType = ReturnType<typeof unFollowAC>
export const followAC = (userID: number) => {
    return {
        type: 'FOLLOW',
        payload: {
            userID
        }

    } as const
}
export const unFollowAC = (userID: number) => {
    return {
        type: 'UNFOLLOW',
        payload: {
            userID
        }

    } as const
}
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: 'SET_USERS',
        payload: {
            users
        }

    } as const
}

export default usersReducer;
