export type initialStateUsersType = {
    items: UserType[]
    pageSize: number
    totalCount: number
    currentPage: number
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

    ],
    pageSize: 5,
    totalCount: 0,
    currentPage: 3

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
            return {...state, items: action.payload.users}
        }
        case "SET_CURRENT_PAGE": {
            return {...state, currentPage: action.payload.currentPage}
        }
        case "SET_TOTAL_USERS_COUNT": {
            return {...state, totalCount: action.payload.totalCount}
        }
        default:
            return state
    }

};
export type ActionsType = FollowACType | UnFollowACType | setUsersACType | setCurrentPageACType | setTotalUsersCountACType
type setUsersACType = ReturnType<typeof setUsersAC>
type FollowACType = ReturnType<typeof followAC>
type UnFollowACType = ReturnType<typeof unFollowAC>
type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>
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
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET_CURRENT_PAGE',
        payload: {
            currentPage
        }
    } as const
}
export const setTotalUsersCountAC = (totalCount: number) => {
    return {
        type: 'SET_TOTAL_USERS_COUNT',
        payload: {
            totalCount
        }
    }as const
}

export default usersReducer;
