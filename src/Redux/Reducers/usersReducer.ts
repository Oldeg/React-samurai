export type initialStateUsersType = {
    items: UserType[]
    pageSize: number
    totalCount: number
    currentPage: number
    isFetchingValue: boolean
    followingInProgress: Array<number>
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
    items: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    isFetchingValue: false,
    followingInProgress: []

}

const usersReducer = (state = initialState, action: ActionsType): initialStateUsersType => {
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
            if (action.payload.totalCount > 100) {
                return {...state, totalCount: 80}
            }
            return {...state, totalCount: action.payload.totalCount}
        }
        case 'TOGGLE_IS_FETCHING': {
            return {...state, isFetchingValue: action.payload.isFetching}
        }
        case 'TOGGLE_IS_FOLLOWING_PROGRESS': {
            return {...state, followingInProgress: action.payload.isFetching
                    ? [...state.followingInProgress,action.payload.userId]
            : state.followingInProgress.filter(id => id !== action.payload.userId)}
        }
        default:
            return state
    }

};
export type ActionsType = FollowACType
    | UnFollowACType
    | setUsersACType
    | setCurrentPageACType
    | setTotalUsersCountACType
    | isFetchingAC
    | followingInProgressType

type setUsersACType = ReturnType<typeof setUsers>
type FollowACType = ReturnType<typeof follow>
type UnFollowACType = ReturnType<typeof unFollow>
type setCurrentPageACType = ReturnType<typeof setCurrentPage>
type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
type isFetchingAC = ReturnType<typeof isFetching>
type followingInProgressType = ReturnType<typeof toggleFollowingInProgress>
export const follow = (userID: number) => {
    return {
        type: 'FOLLOW',
        payload: {
            userID
        }

    } as const
}
export const unFollow = (userID: number) => {
    return {
        type: 'UNFOLLOW',
        payload: {
            userID
        }

    } as const
}
export const setUsers = (users: Array<UserType>) => {
    return {
        type: 'SET_USERS',
        payload: {
            users
        }

    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET_CURRENT_PAGE',
        payload: {
            currentPage
        }
    } as const
}
export const setTotalUsersCount = (totalCount: number) => {
    return {
        type: 'SET_TOTAL_USERS_COUNT',
        payload: {
            totalCount
        }
    } as const
}
export const isFetching = (isFetching: boolean) => {
    return {
        type: 'TOGGLE_IS_FETCHING',
        payload: {
            isFetching
        }
    } as const
}
export const toggleFollowingInProgress = (isFetching: boolean, userId: number) => {
    return {
        type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
        payload: {
            isFetching,
            userId
        }
    } as const
}

export default usersReducer;
