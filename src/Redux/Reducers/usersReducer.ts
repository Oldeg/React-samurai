import {Dispatch} from "redux";
import {followingAPI, usersAPI} from "../../api/api";

export type InitialStateUsersType = {
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

const initialState: InitialStateUsersType = {
    items: [],
    pageSize: 30,
    totalCount: 0,
    currentPage: 1,
    isFetchingValue: false,
    followingInProgress: []

}

const usersReducer = (state = initialState, action: UsersReducerType): InitialStateUsersType => {
    switch (action.type) {
        case 'FOLLOW-UNFOLLOW' : {
            return {
                ...state,
                items: state.items.map(el => el.id === action.payload.userID ? {
                    ...el,
                    followed: action.payload.value
                } : el)
            }
        }

        case 'SET_USERS': {
            return {...state, items: [...action.payload.users]}
        }

        case "SET_CURRENT_PAGE": {
            return {...state, currentPage: action.payload.currentPage}
        }

        case "SET_TOTAL_USERS_COUNT": {
            return action.payload.totalCount > 500 ? {...state, totalCount: 500} : {
                ...state,
                totalCount: action.payload.totalCount
            }

        }

        case 'TOGGLE_IS_FETCHING': {
            return {...state, isFetchingValue: action.payload.isFetching}
        }

        case 'TOGGLE_IS_FOLLOWING_PROGRESS': {
            return {
                ...state, followingInProgress: action.payload.isFetching
                    ? [...state.followingInProgress, action.payload.userId]
                    : state.followingInProgress.filter(id => id !== action.payload.userId)
            }
        }

        default:
            return state
    }

};


//actions
export const followUnfollow = (userID: number, value: boolean) => ({
    type: 'FOLLOW-UNFOLLOW',
    payload: {userID, value}
}) as const
export const setUsers = (users: Array<UserType>) => ({type: 'SET_USERS', payload: {users}}) as const
export const setCurrentPage = (currentPage: number) => ({type: 'SET_CURRENT_PAGE', payload: {currentPage}}) as const
export const setTotalUsersCount = (totalCount: number) => ({
    type: 'SET_TOTAL_USERS_COUNT',
    payload: {totalCount}
}) as const
export const isFetching = (isFetching: boolean) => ({type: 'TOGGLE_IS_FETCHING', payload: {isFetching}}) as const
export const toggleFollowingInProgress = (isFetching: boolean, userId: number) => ({
    type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
    payload: {
        isFetching,
        userId
    }
}) as const

//thunks
export const requestUsers = (page: number, pageSize: number) => async (dispatch: Dispatch<UsersReducerType>) => {
    dispatch(isFetching(true))
    dispatch(setCurrentPage(page))
    let data = await usersAPI.getUsers(page, pageSize)
    dispatch(isFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
}
export const followUnfollowFlow = (id: number, value: boolean) => async (dispatch: Dispatch) => {
    dispatch(toggleFollowingInProgress(true, id))
    if (value) {
        let data = await followingAPI.follow(id)
        if (data.resultCode === 0) {
            dispatch(followUnfollow(id, value))
        }
    } else {
        let data = await followingAPI.unfollow(id)
        if (data.resultCode === 0) {
            dispatch(followUnfollow(id, value))
        }
    }
    dispatch(toggleFollowingInProgress(false, id))
}

//types
export type UsersReducerType =
    | ReturnType<typeof followUnfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof isFetching>
    | ReturnType<typeof toggleFollowingInProgress>

export default usersReducer;


